import { FC } from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-1 bg-blue-100 min-h-[100vh] p-10">
      <section className="flex flex-1 flex-col bg-primary" id="app-content">
        {children}
      </section>
    </main>
  );
};
