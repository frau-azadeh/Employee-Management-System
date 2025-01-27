import type { Metadata } from "next";
import { EmployeeProvider } from "@/context/EmployeeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Employee Managment System",
  description: "Employee Managment System App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-200">
       <EmployeeProvider>
       <div className="max-w-5xl mx-auto px-4">
          {children}
       </div>
       </EmployeeProvider> 
      </body>
    </html>
  );
}
