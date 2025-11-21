import { ThemeProvider as NextThemes } from "next-themes";

export default function ThemeProvider({ children }) {
  return (
    <NextThemes defaultTheme="light" attribute="class">
      {children}
    </NextThemes>
  );
}
