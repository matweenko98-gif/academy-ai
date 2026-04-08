import { Star } from "lucide-react";

const reviews = [
  { initial: "А", text: "Я начала курс по вайбкодингу с нуля. Через месяц уже создала свой первый мини-сервис. Очень понятная подача материала, кураторы всегда на связи.", name: "Анна Смирнова" },
  { initial: "М", text: "Курс по промптинжинирингу полностью изменил мой подход к работе. Теперь делаю за час то, на что раньше уходил целый день. Рекомендую всем!", name: "Максим Петров" },
  { initial: "Е", text: "Как руководитель, я искала способ интегрировать ИИ в нашу компанию. Этот курс дал мне конкретные инструменты и пошаговый план внедрения.", name: "Екатерина Волкова" },
];

const ReviewsSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1920px] mx-auto w-full px-[40px]">
        <div className="mb-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-8">
            Люди приходят за навыком — уходят с <span className="text-accent-on-light">результатом</span>
          </h2>
          <div className="flex flex-col items-center gap-2 mb-4">
            <span className="text-6xl font-extrabold text-foreground">5.0</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent-on-light text-accent-on-light" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">На основе 100+ отзывов</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="w-full min-w-0 rounded-2xl border border-border bg-background/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <span className="text-2xl font-bold text-accent-on-light mb-4 block">{r.initial}</span>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">{r.text}</p>
              <span className="font-bold text-sm text-foreground">{r.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-button bg-foreground px-8 py-3.5 font-bold text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-foreground/85 active:scale-[0.98]">
            Все отзывы
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
