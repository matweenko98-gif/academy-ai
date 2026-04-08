import { Check } from "lucide-react";

const PaymentSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1920px] mx-auto w-full px-[40px]">
        <h2 className="mb-10 text-3xl font-extrabold tracking-tight lg:text-4xl">
          Гибкая оплата для <span className="text-accent">любого курса</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="w-full min-w-0 rounded-2xl border border-border bg-background/70 p-10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] lg:p-12">
            <h3 className="mb-2 text-2xl font-bold text-foreground">Учись сейчас — оплачивай комфортно</h3>
            <p className="mb-8 text-muted-foreground">Рассрочка без переплат и скрытых условий.</p>
            <ul className="mb-10 space-y-4">
              {["Без первого взноса", "Срок рассрочки до 24 месяцев", "Рассрочка от банков-партнёров"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-button bg-foreground px-8 py-3.5 font-bold text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-foreground/85 active:scale-[0.98]">
                Оставить заявку
              </button>
              <button className="font-semibold text-foreground transition-colors duration-200 hover:text-accent">
                Узнать больше →
              </button>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col justify-between rounded-2xl border border-primary-foreground/5 bg-[#141414] p-10 text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] lg:p-12">
            <div>
              <h3 className="mb-2 text-xl font-bold text-primary-foreground/70">Как это выглядит</h3>
              <p className="mb-8 text-sm text-primary-foreground/40">Рассрочка на 24 месяца</p>
              <span className="text-4xl font-extrabold text-accent lg:text-5xl">от 3 000 ₽</span>
              <p className="mt-2 text-primary-foreground/50">в месяц</p>
            </div>
            <div className="mt-10 space-y-3 text-sm text-primary-foreground/40">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>3-12 месяцев</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>5-10 минут</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
