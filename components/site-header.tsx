export function SiteHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-3 mx-auto">
          {children}
        </div>
      </div>
    </header>
  );
}
