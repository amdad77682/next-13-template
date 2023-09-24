import { ReactNode } from "react";

function Layout({
  children,
}: {
  children: ReactNode;
  header?: boolean;
  footer?: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: "#FCFCFC",
      }}
    >
      <main className="container h-full md:min-h-[calc(100vh_-_400px)] min-h-[calc(100vh_-_250px)] m-auto mb-4">
        {children}
      </main>
    </div>
  );
}

export default Layout;
