import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  { q: "Подойдёт ли мне курс без опыта?", a: "Да, все наши курсы разработаны для начинающих. Мы ведём вас от основ до продвинутого уровня." },
  { q: "Какие форматы обучения доступны?", a: "Видеоуроки, практические задания, живые вебинары и персональная работа с куратором." },
  { q: "Что входит в стоимость курса?", a: "Все материалы, доступ к AI-лаборатории, сертификат и поддержка куратора на протяжении всего обучения." },
  { q: "Можно ли совмещать с основной работой?", a: "Конечно. Программа рассчитана на 5-10 часов в неделю, вы учитесь в своём темпе." },
  { q: "Есть ли трудоустройство?", a: "Мы помогаем с резюме, портфолио и подготовкой к собеседованиям. Партнёрские компании получают доступ к нашим выпускникам." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full">
      <div className="max-w-[1920px] mx-auto w-full px-[40px]">
        <div className="rounded-3xl bg-[#141414] px-[40px] py-14 text-primary-foreground lg:py-18">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <div>
              <span className="text-sm font-semibold text-primary-foreground/40 uppercase tracking-widest mb-3 block">FAQ</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-6">
                Ответы на <span className="text-accent">частые вопросы</span>
              </h2>
              <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                Поддержка
              </span>

              <div className="bg-[#1e1e1e] rounded-2xl p-6 mt-12 border border-primary-foreground/5 hover:border-primary-foreground/10 transition-colors duration-300">
                <p className="text-sm text-primary-foreground/60 mb-4">Остались вопросы? Мы на связи и готовы помочь в любое время.</p>
                <button className="w-full rounded-button bg-accent py-3 font-bold text-accent-foreground transition-all duration-200 hover:scale-[1.01] hover:brightness-95 active:scale-[0.99]">
                  Задать вопрос
                </button>
              </div>
            </div>

            <div>
              {faqItems.map((item, i) => (
                <div key={i} className="py-6 border-b border-primary-foreground/10">
                  <button
                    className="w-full flex justify-between items-center cursor-pointer text-left group"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-lg font-medium pr-4 group-hover:text-accent transition-colors duration-200">{item.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-button border border-primary-foreground/20 transition-all duration-200 group-hover:border-accent/50 group-hover:text-accent">
                      {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {open === i && (
                    <p className="mt-4 text-primary-foreground/60 text-sm leading-relaxed">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
