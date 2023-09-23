import QueryProvider from "@/components/Common/QueryProvider";
import "./global.css";
import Toaster from "@/components/Common/Toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <QueryProvider>
        <body>
          <Toaster />
          {children}
        </body>
      </QueryProvider>
    </html>
  );
}
