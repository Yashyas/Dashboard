import { ThemeProvider as NextThemes } from "next-themes";

export default function ThemeProvider({ children }) {
  return (
    <NextThemes defaultTheme="dark" attribute="class" enableSystem={false}>
      {children}
    </NextThemes>
  );
}
