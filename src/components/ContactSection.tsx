const ContactSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1920px] mx-auto w-full px-[40px] text-center">
        <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-muted-foreground">Контакты</span>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight lg:text-4xl">
          Связаться с <span className="text-accent-on-light">нами</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground lg:mb-12">
          Оставьте заявку — мы свяжемся с вами в течение 15 минут, ответим на вопросы и подскажем оптимальное решение.
        </p>

        <div className="w-full rounded-3xl border border-border bg-secondary/60 p-8 text-left backdrop-blur-xl lg:grid lg:grid-cols-2 lg:gap-16 lg:p-12">
          <div>
            <h3 className="mb-8 text-xl font-bold text-foreground">О чём мы расскажем?</h3>
            <div className="space-y-8">
              {[
                { n: "1", title: "Подберём курс", text: "Расскажем, какой формат и направление подойдут именно вам." },
                { n: "2", title: "Условия оплаты", text: "Обсудим рассрочку, скидки и индивидуальные условия." },
                { n: "3", title: "План обучения", text: "Составим персональный план с учётом вашего графика." },
              ].map((step) => (
                <div key={step.n} className="group flex cursor-default gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground transition-transform duration-200 group-hover:scale-110">
                    {step.n}
                  </span>
                  <div>
                    <h4 className="mb-1 font-bold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 w-full min-w-0 lg:mt-0">
            <div className="mb-6 space-y-4">
              <input
                type="text"
                placeholder="Имя"
                className="w-full rounded-xl border border-border bg-background px-4 py-4 text-foreground outline-none transition-all duration-200 placeholder:text-foreground/40 focus:ring-2 focus:ring-accent-on-light"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full rounded-xl border border-border bg-background px-4 py-4 text-foreground outline-none transition-all duration-200 placeholder:text-foreground/40 focus:ring-2 focus:ring-accent-on-light"
              />
            </div>
            <label className="group mb-6 flex cursor-pointer items-start gap-3">
              <input type="checkbox" className="mt-1 accent-accent-on-light" />
              <span className="text-xs text-muted-foreground transition-colors duration-200 group-hover:text-foreground/60">
                Я согласен с политикой конфиденциальности и даю согласие на обработку персональных данных.
              </span>
            </label>
            <button className="w-full rounded-button bg-foreground py-4 font-bold text-primary-foreground transition-all duration-200 hover:scale-[1.01] hover:bg-foreground/85 active:scale-[0.99]">
              Перейти к оплате
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
