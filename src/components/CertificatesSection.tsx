const CertificatesSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1920px] mx-auto w-full px-[40px]">
        <div className="rounded-3xl border border-border bg-secondary/60 px-[40px] py-14 backdrop-blur-xl lg:py-18">
          <div className="mb-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-muted-foreground">Документы</span>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight lg:text-4xl">
                Сертификаты, которые усиливают <span className="text-accent">резюме</span> и доверие
              </h2>
              <p className="text-lg text-muted-foreground">
                По итогам обучения вы получаете документы, которые подтверждают ваши навыки и повышают доверие работодателей.
              </p>
            </div>
            <div className="relative flex h-64 min-h-0 items-center justify-center overflow-hidden">
              <div className="absolute flex h-64 w-52 min-w-0 flex-col justify-between rounded-xl border-2 border-border bg-background/70 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 -rotate-6 hover:-rotate-3 hover:shadow-2xl">
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">ИИ Академия</span>
                  <p className="mt-4 text-lg font-bold text-foreground">Certificate</p>
                  <p className="mt-1 text-xs text-muted-foreground">of completion</p>
                </div>
                <div className="h-0.5 w-12 bg-accent" />
              </div>
              <div className="absolute flex h-64 w-52 min-w-0 flex-col justify-between rounded-xl border border-primary-foreground/5 bg-[#141414] p-6 shadow-xl transition-all duration-500 rotate-6 hover:rotate-3 hover:shadow-2xl">
                <div>
                  <span className="text-xs uppercase tracking-widest text-primary-foreground/40">ИИ Академия</span>
                  <p className="mt-4 text-lg font-bold text-primary-foreground">Certificate</p>
                  <p className="mt-1 text-xs text-primary-foreground/50">professional level</p>
                </div>
                <div className="h-0.5 w-12 bg-accent" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="w-full min-w-0 rounded-2xl border border-border bg-background/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Новое</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">1. Сертификат о владении ИИ</h3>
              <p className="text-sm text-muted-foreground">
                Подтверждает навыки работы с нейросетями, промптинжинирингом и AI-инструментами. Признаётся работодателями и платформами фриланса.
              </p>
            </div>
            <div className="w-full min-w-0 rounded-2xl border border-border bg-background/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Новое</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">2. Сертификат о повышении квалификации</h3>
              <p className="text-sm text-muted-foreground">
                Государственный документ о профессиональной переподготовке. Выдаётся по завершении полной программы обучения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
