// Import the correct component for the Image element
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
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
    <main className="min-h-screen bg-[#faf3e0] dark:bg-gray-800 w-full">
      <ClerkProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </ClerkProvider>
    </main>
  );
}
