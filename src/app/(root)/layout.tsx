// Import the correct component for the Image element
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Tomas",
    lastName: "Garcia",
    email: "contact@gmail.com",
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </main>
  );
}
