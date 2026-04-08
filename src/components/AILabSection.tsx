const AILabSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1920px] mx-auto w-full px-[40px]">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-secondary/60 px-[40px] py-10 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.05)] lg:flex-row lg:items-center lg:py-16">
          <div className="min-w-0">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
              Новое
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
              Получи доступ к <span className="text-accent">AI-лаборатории</span>
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground lg:text-xl">
              Все студенты ИИ Академия получают доступ к нашим инструментам искусственного интеллекта для практики.
            </p>
          </div>
          <button className="shrink-0 whitespace-nowrap rounded-button bg-foreground px-10 py-4 text-base font-bold text-primary-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-foreground/85 active:scale-[0.98] lg:px-12 lg:py-5 lg:text-lg">
            Получить
          </button>
        </div>
      </div>
    </section>
  );
};

export default AILabSection;
