import Image from "next/image"; // Import the correct component for the Image element

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

  return <main className="flex h-screen w-full font-inter">{children}</main>;
}
