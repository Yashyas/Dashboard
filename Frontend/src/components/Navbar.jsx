import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuthStore from "@/store/authStore";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { token, clearAuth } = useAuthStore();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="w-full border-b bg-background text-foreground relative sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-primary">
          Assignment
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-2 py-1 transition group`}
              >
                {/* Highlight BG when active */}
                <span
                  className={`
                    absolute inset-0 rounded-md transition z-0
                    ${active
                      ? "bg-primary opacity-100"
                      : "bg-primary opacity-0 group-hover:opacity-100"}
                  `}
                />

                {/* Text */}
                <span
                  className={`
                    relative z-10 
                    ${active ? "text-primary-foreground" : ""}
                  `}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-3">
          {token ? (
            <Button variant="" className="shadow-2xl" onClick={clearAuth}>
              Logout
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary" className="shadow-2xl">
                  Signup
                </Button>
              </Link>
            </>
          )}
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden gap-4 items-center justify-center">
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="mt-2">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden 
            absolute top-full left-0 w-full 
            px-4 py-4 space-y-4 
            bg-background border-b 
            z-50 
            animate-in fade-in slide-in-from-top duration-200
          "
        >
          {/* Nav Links */}
          <div className="flex flex-col gap-2 text-sm font-medium">
            {links.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="relative px-3 py-2 rounded-md transition group"
                >
                  {/* Highlight BG on active */}
                  <span
                    className={`
                      absolute inset-0 rounded-md transition z-0
                      ${active
                        ? "bg-primary opacity-100"
                        : "bg-primary opacity-0 group-hover:opacity-100"}
                    `}
                  />
                  <span
                    className={`
                      relative z-10
                      ${active ? "text-primary-foreground" : ""}
                    `}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-2 mt-1">
            {token ? (
              <Button
                className="w-full shadow-2xl"
                variant=""
                onClick={() => {
                  clearAuth();
                  setOpen(false);
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>

                <Link to="/register" onClick={() => setOpen(false)}>
                  <Button variant="secondary" className="w-full shadow-2xl">
                    Signup
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
