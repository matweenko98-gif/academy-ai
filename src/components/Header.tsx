import { Search } from "lucide-react";

const navItems = [
  { label: "Главная", href: "#", active: true },
  { label: "Курсы", href: "#", active: false },
  { label: "Методология", href: "#", active: false },
  { label: "Отзывы", href: "#", active: false },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full pt-[18px]">
      <div className="max-w-[1920px] mx-auto w-full px-[40px]">
        <div className="flex items-center justify-between rounded-full border border-border bg-background/70 px-6 py-3.5 shadow-[0_2px_12px_0_rgba(0,0,0,0.06)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent">
              <span className="text-sm font-bold text-accent-foreground">A</span>
            </div>
            <span className="text-base font-semibold text-foreground tracking-tight">
              ИИ Академия
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  item.active
                    ? "rounded-full bg-foreground px-4 py-2 text-primary-foreground shadow-sm transition-all duration-200"
                    : "rounded-full px-4 py-2 text-muted-foreground transition-all duration-200 hover:bg-muted/60 hover:text-foreground"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right block */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Поиск"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-200 hover:bg-muted/70 hover:text-foreground"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <button className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-foreground/85 active:scale-[0.98]">
              Начать
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
