const StatsSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1920px] mx-auto w-full px-[40px]">
        <div className="rounded-3xl bg-foreground px-[40px] py-10 lg:py-20">
          <div className="mb-10 lg:mb-14">
            <span className="text-sm font-semibold text-primary-foreground/40 uppercase tracking-widest mb-3 block">Статистика</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-primary-foreground tracking-tight leading-[1.1] mb-6">
              Цифры, которым можно <span className="text-accent">верить</span>
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/60 max-w-xl">
              Мы учим ИИ так, чтобы знания работали в жизни. Реальные данные о результатах учеников.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <span className="px-4 py-1.5 rounded-full border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors duration-200 cursor-pointer">Обучение</span>
              <span className="px-4 py-1.5 rounded-full border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors duration-200 cursor-pointer">Развитие</span>
              <span className="px-4 py-1.5 rounded-full border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors duration-200 cursor-pointer">Карьера</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="w-full min-w-0 rounded-2xl border border-primary-foreground/5 bg-primary-foreground/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground/[0.12] hover:shadow-[0_12px_40px_rgba(163,230,53,0.06)] lg:p-10">
              <span className="text-5xl lg:text-6xl font-extrabold text-accent">1200+</span>
              <p className="text-lg text-primary-foreground/70 mt-3">Студентов прошли обучение</p>
              <div className="mt-8 flex gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-12 w-3 rounded-full" style={{ backgroundColor: `hsl(82 81% ${48 + i * 5}%)`, opacity: 0.4 + i * 0.08 }} />
                ))}
              </div>
            </div>
            <div className="w-full min-w-0 rounded-2xl border border-primary-foreground/5 bg-primary-foreground/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground/[0.12] lg:p-10">
              <span className="text-5xl lg:text-6xl font-extrabold text-primary-foreground">4</span>
              <p className="text-lg text-primary-foreground/70 mt-3">Направления треков</p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">Старт</span>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">Бизнес</span>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">Управление</span>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">Фриланс</span>
              </div>
            </div>
            <div className="w-full min-w-0 rounded-2xl border border-primary-foreground/5 bg-primary-foreground/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground/[0.12] hover:shadow-[0_12px_40px_rgba(163,230,53,0.06)] lg:p-10">
              <span className="text-5xl lg:text-6xl font-extrabold text-accent">2–6</span>
              <span className="text-2xl font-bold text-primary-foreground/70 ml-2">недель</span>
              <p className="text-lg text-primary-foreground/70 mt-3">До ощутимого результата</p>
              <div className="mt-6 h-16 flex items-end gap-1">
                {[30, 45, 55, 70, 85, 60, 75, 90, 65, 80].map((h, i) => (
                  <div key={i} className="w-4 rounded-t bg-accent/40" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="w-full min-w-0 rounded-2xl border border-primary-foreground/5 bg-primary-foreground/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground/[0.12] lg:p-10">
              <span className="text-5xl lg:text-6xl font-extrabold text-primary-foreground">2</span>
              <p className="text-lg text-primary-foreground/70 mt-3">Сертификата по итогам</p>
              <div className="flex gap-3 mt-6">
                <div className="w-20 h-28 rounded-lg border border-primary-foreground/20 flex items-center justify-center text-xs text-primary-foreground/40 hover:border-accent/40 transition-colors duration-200">
                  PDF
                </div>
                <div className="w-20 h-28 rounded-lg border border-primary-foreground/20 flex items-center justify-center text-xs text-primary-foreground/40 hover:border-accent/40 transition-colors duration-200">
                  PDF
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
