// /src/pages/dashboard/Dashboard.jsx
import { useEffect, useMemo, useState } from "react";
import api from "@/lib/api";
import useAuthStore from "@/store/authStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Trash, Plus, Search, Check } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../../components/ui/drawer";

export default function DashboardPage() {
  const token = useAuthStore((s) => s.token);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(false);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [sheetOpen, setSheetOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [creating, setCreating] = useState(false);

  const [error, setError] = useState(null);

  // Load Profile
  useEffect(() => {
    let mounted = true;
    async function loadProfile() {
      try {
        const { data } = await api.get("/api/auth/me");
        if (mounted) setUser(data);
      } catch (err) {
        clearAuth();
      }
    }
    if (token) loadProfile();
    return () => (mounted = false);
  }, [token, clearAuth]);

  // Load Tasks
  async function loadTasks() {
    setLoadingTasks(true);
    setError(null);
    try {
      const params = {};
      if (search) params.q = search;
      if (filter === "completed") params.completed = true;
      if (filter === "pending") params.completed = false;

      const { data } = await api.get("/api/tasks", { params });
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load tasks");
      if (err.response?.status === 401) clearAuth();
    } finally {
      setLoadingTasks(false);
    }
  }

  useEffect(() => {
    if (token) loadTasks();
  }, [token, search, filter]);

  // Create Task
  async function handleCreateTask(e) {
    e.preventDefault();
    if (!newTitle.trim()) {
      setError("Title is required");
      return;
    }
    setCreating(true);
    try {
      await api.post("/api/tasks", {
        title: newTitle.trim(),
        description: newDesc.trim(),
      });
      setNewTitle("");
      setNewDesc("");
      setSheetOpen(false);
      await loadTasks();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create task");
    } finally {
      setCreating(false);
    }
  }

  // Update
  async function toggleTaskCompleted(task) {
    try {
      await api.put(`/api/tasks/${task._id}`, {
        completed: !task.completed,
      });
      await loadTasks();
    } catch (err) {
      setError("Failed to update task");
    }
  }

  // Delete
  async function handleDelete(id) {
    if (!confirm("Delete this task?")) return;
    try {
      await api.delete(`/api/tasks/${id}`);
      await loadTasks();
    } catch (err) {
      setError("Failed to delete task");
    }
  }

  const ongoing = useMemo(() => tasks.filter((t) => !t.completed), [tasks]);
  const completed = useMemo(() => tasks.filter((t) => t.completed), [tasks]);

  return (
    <div className="min-h-screen bg-background py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        
{/* SECONDARY NAVBAR */}
<div className="grid grid-cols-1 md:grid-cols-6 gap-4  md:sticky md:top-12 pt-4 pb-4 z-10">

  {/* PROFILE CARD  */}
  <Card className="md:col-span-3 border-2 border-primary bg-card p-3 rounded-none shadow-[6px_6px_0_theme(colors.primary)] hover:shadow-accent-foreground flex flex-row items-center gap-8">
    <Avatar className="w-10 h-10">
      <AvatarFallback>
        {user
          ? user.name
              .split(" ")
              .map((s) => s[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()
          : "U"}
      </AvatarFallback>
    </Avatar>

    <div className="flex flex-col leading-tight">
      <div className="font-semibold text-primary text-base">
        {user?.name || "Loading..."}
      </div>
      <div className="text-xs text-muted-foreground">
        {user?.email}
      </div>
    </div>
  </Card>


 
  {/* SMALL SCREEN GROUPED LAYOUT (hidden on md and up)            */}
  <div className="flex flex-col gap-4 md:hidden">

    <div className="flex gap-4">
      {/* ONGOING */}
      <Card className="flex-1 border-2 border-primary bg-background p-3 rounded-none shadow-[6px_6px_0_theme(colors.primary)] flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Ongoing</span>
        <span className="text-xl font-bold">{ongoing.length}</span>
      </Card>

      {/* COMPLETED */}
      <Card className="flex-1 border-2 border-primary bg-background p-3 rounded-none shadow-[6px_6px_0_theme(colors.primary)] flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Completed</span>
        <span className="text-xl font-bold">{completed.length}</span>
      </Card>
    </div>

    {/* ADD TASK BUTTON */}
    <Button
      className="rounded-none w-full p-3 border-2 border-primary hover:shadow-2xl "
      onClick={() => setSheetOpen(true)}
    >
      Add Task
    </Button>

  </div>


  {/* ------------------------------------------------------------ */}
  {/* DESKTOP LAYOUT (hidden on small screens)                     */}
  {/* ------------------------------------------------------------ */}
  {/* ONGOING  */}
  <Card className="hidden md:flex md:col-span-1 border-2 border-primary bg-background p-3 rounded-none shadow-[6px_6px_0_theme(colors.primary)] hover:shadow-accent-foreground flex-row items-center justify-between">
    <span className="text-sm text-muted-foreground">Ongoing</span>
    <span className="text-xl font-bold">{ongoing.length}</span>
  </Card>

  {/* COMPLETED  */}
  <Card className="hidden md:flex md:col-span-1 border-2 border-primary bg-background p-3 rounded-none shadow-[6px_6px_0_theme(colors.primary)] hover:shadow-accent-foreground flex-row items-center justify-between">
    <span className="text-sm text-muted-foreground">Completed</span>
    <span className="text-xl font-bold">{completed.length}</span>
  </Card>

  {/* ADD TASK  */}
  <Button
    className="hidden md:flex rounded-none w-full h-full md:col-span-1 p-3  hover:shadow-2xl "
    onClick={() => setSheetOpen(true)}
  >
    Add Task
  </Button>

</div>

        {/* SEARCH + FILTERS */}
        <Card className="rounded-none border-2 border-primary bg-card p-4 shadow-[6px_6px_0_theme(colors.primary)] sticky top-18 md:top-34 hover:shadow-accent-foreground z-10">
          <CardContent className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex items-center gap-2 flex-1">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search tasks by title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <select
                className="rounded-none border-2 border-primary bg-background px-3 py-2"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="pending">Ongoing</option>
                <option value="completed">Completed</option>
              </select>

              <Button
                variant="outline"
                className="rounded-none"
                onClick={loadTasks}
              >
                Refresh
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* TASKS */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* ONGOING */}
          <Card className="rounded-none border-2 border-primary  bg-card p-4 shadow-[6px_6px_0_theme(colors.primary)] hover:shadow-accent-foreground">
            <CardHeader>
              <CardTitle className="text-primary">Ongoing</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              {loadingTasks && <div className="text-muted-foreground">Loading...</div>}
              {!loadingTasks && ongoing.length === 0 && (
                <div className="text-muted-foreground">No ongoing tasks</div>
              )}

              {ongoing.map((task) => (
                <div
                  key={task._id}
                  className="border-2 border-primary p-4 rounded-none flex flex-col gap-2 hover:shadow-[6px_6px_0_theme(colors.primary)]"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">{task.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {task.description}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="text-xs text-muted-foreground">Owner</div>
                      <div className="text-sm">{user?.name}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="default"
                      className="rounded-none hover:shadow-lg"
                      onClick={() => toggleTaskCompleted(task)}
                    >
                      <Check className="mr-2" />
                      Mark done
                    </Button>

                    <Button
                      variant="destructive"
                      className="rounded-none hover:shadow-lg"
                      onClick={() => handleDelete(task._id)}
                    >
                      <Trash className="mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* COMPLETED */}
          <Card className="rounded-none border-2 border-primary bg-card p-4 shadow-[6px_6px_0_theme(colors.primary)] hover:shadow-accent-foreground">
            <CardHeader>
              <CardTitle className="text-primary">Completed</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              {loadingTasks && <div className="text-muted-foreground">Loading...</div>}
              {!loadingTasks && completed.length === 0 && (
                <div className="text-muted-foreground">No completed tasks</div>
              )}

              {completed.map((task) => (
                <div
                  key={task._id}
                  className="border-2 border-primary p-4 rounded-none hover:shadow-[6px_6px_0_theme(colors.primary)]"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold line-through">{task.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {task.description}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="text-xs text-muted-foreground">Owner</div>
                      <div className="text-sm">{user?.name}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="outline"
                      className="rounded-none"
                      onClick={() => toggleTaskCompleted(task)}
                    >
                      Undo
                    </Button>

                    <Button
                      variant="destructive"
                      className="rounded-none hover:shadow-lg"
                      onClick={() => handleDelete(task._id)}
                    >
                      <Trash className="mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ADD TASK SHEET */}
     <Drawer open={sheetOpen} onOpenChange={setSheetOpen}>
  <DrawerTrigger asChild>
    <button className="sr-only">Open Add Task</button>
  </DrawerTrigger>

  <DrawerContent className="rounded-none bg-primary/70 backdrop-blur-xl px-4 ">
    <DrawerHeader>
      <DrawerTitle>Create Task</DrawerTitle>
    </DrawerHeader>

    {/* Compact form container */}
    <div className="w-full flex justify-center">
      <form
        onSubmit={handleCreateTask}
        className="p-4 space-y-4 w-[320px]"  // <<< reduced form width
      >
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="rounded-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <Textarea
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            className="rounded-none"
          />
        </div>

        {error && <div className="text-destructive text-sm">{error}</div>}

        <div className="flex gap-3">
          <Button
            type="submit"
            className="rounded-none"
            disabled={creating}
          >
            {creating ? "Creating..." : "Create Task"}
          </Button>

          <Button
            variant="outline"
            className="rounded-none"
            onClick={() => setSheetOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  </DrawerContent>
</Drawer>

    </div>
  );
}
