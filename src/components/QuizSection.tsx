import { Briefcase, Code, FileText, Lightbulb, Settings, Cpu, BarChart3, Layers } from "lucide-react";

const cards = [
  { icon: Code, title: "Создание IT-продуктов без кода", text: "Узнай, как создавать сервисы и приложения без единой строчки кода.", link: "Смотреть курс →" },
  { icon: FileText, title: "Управление текстом и рутиной", text: "Автоматизируй отчёты, тексты и документооборот с помощью ИИ.", link: "Смотреть курс →" },
  { icon: Lightbulb, title: "Управление командой", text: "Используй ИИ для управления задачами, KPI и коммуникацией.", link: "Смотреть курс →" },
  { icon: Settings, title: "Кастомные решения", text: "Создавай собственные ИИ-решения для бизнеса без привлечения разработчиков.", link: "Смотреть курс →" },
  { icon: Cpu, title: "Внедрение ИИ в бизнес", text: "Для руководителей, кто хочет масштабировать бизнес с помощью ИИ.", link: "Смотреть курс →" },
  { icon: BarChart3, title: "Автоматизация процессов", text: "Оптимизация рутинных задач и бизнес-процессов через инструменты ИИ.", link: "Смотреть курс →" },
  { icon: Layers, title: "Фриланс с ИИ", text: "Выходи на фриланс быстрее, создавая продукты с помощью нейросетей.", link: "Смотреть курс →" },
];

const QuizSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1920px] mx-auto w-full px-[40px]">
        <div className="mb-10 lg:mb-12">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3 block">Категории</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight mb-4 max-w-2xl">
            Выбирай под свою задачу: где <span className="text-accent">ИИ нужен</span> тебе прямо сейчас
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
            Не важно, кем ты работаешь. Выбери направление, и мы поможем тебе найти работу, забрать все
            деньги и стать делать то, что раньше требовало команду специалистов.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex min-h-[280px] w-full min-w-0 flex-col justify-between rounded-2xl border border-foreground bg-foreground p-8 text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]">
            <div>
              <Briefcase className="w-6 h-6 mb-4 text-primary-foreground/60" />
              <h3 className="text-xl font-bold mb-3">Не знаешь, за что хвататься?</h3>
              <p className="text-sm text-primary-foreground/60">
                Ответь на 5 вопросов — мы подскажем, какой курс подойдёт именно тебе.
              </p>
            </div>
            <button className="mt-8 self-start rounded-button bg-accent px-8 py-3 text-base font-bold text-accent-foreground transition-all duration-200 hover:scale-[1.02] hover:brightness-95 active:scale-[0.98]">
              Подобрать курс
            </button>
          </div>

          {cards.map((card) => (
            <div
              key={card.title}
              className="group flex min-h-[220px] w-full min-w-0 flex-col justify-between rounded-2xl border border-border bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <div>
                <card.icon className="w-5 h-5 text-muted-foreground mb-4" />
                <h3 className="text-base font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.text}</p>
              </div>
              <a href="#" className="text-sm font-semibold text-foreground mt-4 group-hover:text-accent transition-colors duration-200">
                {card.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
