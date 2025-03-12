import {
  DocsSidebar,
  DocsSidebarGroup,
  DocsSidebarGroupHeading,
  DocsSidebarItem,
} from "@/components/docs-sidebar-next";
import { docsConfig } from "@/config/docs";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container-wrapper">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <DocsSidebar>
          {docsConfig.sidebarItems.map((item) => {
            return (
              <DocsSidebarGroup key={item.title}>
                <DocsSidebarGroupHeading>{item.title}</DocsSidebarGroupHeading>
                {item.items.map((item) => {
                  return (
                    <DocsSidebarItem key={item.title} href={item.href}>
                      {item.title}
                    </DocsSidebarItem>
                  );
                })}
              </DocsSidebarGroup>
            );
          })}
        </DocsSidebar>
        <main className="prose prose-zinc min-w-full w-full py-4 pb-40">
          {children}
        </main>
      </div>
    </div>
  );
}
