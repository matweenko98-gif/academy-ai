import { Zap, Users, TrendingUp, BadgeCheck, UserCheck, ChevronDown, BrainCircuit } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1920px] mx-auto w-full px-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-5 items-stretch">
          {/* Left content */}
          <div className="flex w-full min-w-0 flex-col rounded-3xl border border-border bg-background/70 p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] lg:p-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-8 lg:mb-10">
              <span className="px-4 py-1.5 rounded-full border border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider hover:border-foreground/20 transition-colors duration-200">
                Академия ИИ
              </span>
              <span className="px-4 py-1.5 rounded-full border border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider hover:border-foreground/20 transition-colors duration-200">
                100% Онлайн
              </span>
              <span className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider hover:brightness-95 transition-all duration-200">
                Практика
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[82px] font-extrabold text-foreground tracking-tight leading-[1.08] mb-6">
              Карьерный рост
              <br className="hidden md:block" />
              {" "}начинается c
              <br className="hidden md:block" />
              {" "}<span className="text-accent-on-light">актуальных знаний</span>
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground max-w-md mb-auto leading-relaxed">
              Для новичков, специалистов, руководителей и предпринимателей.
              Изучайте инструменты завтрашнего дня уже сегодня.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-10">
              <div className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-accent-on-light/40 hover:bg-accent-on-light/10 transition-all duration-200 cursor-pointer">
                <BadgeCheck className="w-4 h-4 text-muted-foreground group-hover:text-accent-on-light transition-colors duration-200" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Сертификаты
                </span>
              </div>
              <div className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-accent-on-light/40 hover:bg-accent-on-light/10 transition-all duration-200 cursor-pointer">
                <UserCheck className="w-4 h-4 text-muted-foreground group-hover:text-accent-on-light transition-colors duration-200" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Личный ментор
                </span>
              </div>
              <div className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-accent-on-light/40 hover:bg-accent-on-light/10 transition-all duration-200 cursor-pointer">
                <BrainCircuit className="w-4 h-4 text-muted-foreground group-hover:text-accent-on-light transition-colors duration-200" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  ИИ-практика
                </span>
              </div>
            </div>
          </div>

          {/* Right — Form card */}
          <div className="w-full min-w-0 rounded-3xl border border-border bg-background/70 p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
            <h2 className="text-xl font-bold text-foreground mb-1">Начни обучение</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Заполните форму, чтобы получить программу курса
            </p>

            <div className="space-y-4 mb-5">
              <div>
                <label className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">
                  Ваше имя
                </label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 bg-input rounded-xl text-sm text-foreground placeholder:text-foreground/30 outline-none focus:ring-2 focus:ring-accent-on-light transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">
                  Email / Телеграм
                </label>
                <input
                  type="text"
                  placeholder="@username"
                  className="w-full px-4 py-3 bg-input rounded-xl text-sm text-foreground placeholder:text-foreground/30 outline-none focus:ring-2 focus:ring-accent-on-light transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">
                  Выберите направление
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-input rounded-xl text-sm text-foreground outline-none focus:ring-2 focus:ring-accent-on-light transition-all duration-200 appearance-none pr-10 cursor-pointer">
                    <option>Вайбкодинг (No-code)</option>
                    <option>Промпт-инжиниринг</option>
                    <option>ИИ для руководителя</option>
                    <option>Веб-дизайн</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <button className="w-full rounded-button bg-foreground py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:scale-[1.01] hover:bg-foreground/85 active:scale-[0.99]">
              Забронировать место
            </button>

            <p className="text-[10px] text-muted-foreground text-center mt-3 leading-relaxed">
              Нажимая кнопку, вы соглашаетесь с политикой
              <br />
              <a href="#" className="underline decoration-accent-on-light underline-offset-2 hover:text-foreground transition-colors duration-200">
                конфиденциальности
              </a>
            </p>

            <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border/50">
              <div className="flex -space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-foreground/80 border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-foreground/60 border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-foreground/40 border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-accent/50 border-2 border-background" />
              </div>
              <div className="leading-tight">
                <span className="text-sm font-semibold text-foreground">+2,400 учеников</span>
                <p className="text-xs text-muted-foreground">уже осваивают нейросети</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three feature cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="flex w-full min-w-0 cursor-pointer flex-col gap-3 rounded-2xl border border-accent-foreground/15 bg-accent p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-foreground/25 hover:shadow-[0_12px_40px_rgba(163,230,53,0.2)]">
            <Zap className="w-6 h-6 text-accent-foreground" />
            <h3 className="text-lg font-bold text-accent-foreground">Быстрый старт</h3>
            <p className="text-sm text-accent-foreground/70 leading-relaxed">
              Первые результаты уже через 2 недели обучения.
            </p>
          </div>
          <div className="flex w-full min-w-0 cursor-pointer flex-col gap-3 rounded-2xl border border-border bg-background/70 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <Users className="w-6 h-6 text-foreground" />
            <h3 className="text-lg font-bold text-foreground">Коммьюнити</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Доступ в закрытый чат со специалистами и экспертами индустрии.
            </p>
          </div>
          <div className="flex w-full min-w-0 cursor-pointer flex-col gap-3 rounded-2xl border border-border bg-background/70 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <TrendingUp className="w-6 h-6 text-foreground" />
            <h3 className="text-lg font-bold text-foreground">Актуальность</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Обновляем учебные материалы каждую неделю вслед за рынком.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
