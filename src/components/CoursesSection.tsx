import { ArrowRight } from "lucide-react";

const courses = [
  {
    tag: "С нуля",
    title: "Вайбкодинг",
    description: "Создание IT-продуктов без кода и навыков программирования с помощью ИИ.",
    duration: "12 месяцев",
    lessons: "4 курса 2026",
    price: "49 000 ₽",
  },
  {
    tag: "С нуля",
    title: "Промптинжиниринг",
    description: "Запись и отправка промптов для получения максимально точных ответов от ИИ.",
    duration: "10 месяцев",
    lessons: "3 курса 2026",
    price: "35 000 ₽",
  },
  {
    tag: "С нуля",
    title: "ИИ для руководителя",
    description: "Эффективное управление командой и проектами с помощью инструментов ИИ.",
    duration: "6 месяцев",
    lessons: "2 курса 2025",
    price: "42 000 ₽",
  },
];

const CoursesSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1920px] mx-auto w-full px-[40px]">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-12">
          <div>
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3 block">Направления</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight max-w-lg">
              Выбирай направление и начни <span className="text-accent">карьеру в ИИ</span>
            </h2>
          </div>
          <button className="text-base font-bold text-foreground border-b-2 border-foreground pb-1 hover:border-accent hover:text-accent transition-all duration-200 whitespace-nowrap">
            Смотреть все курсы
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group flex w-full min-w-0 flex-col justify-between rounded-2xl border border-border bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] lg:p-8"
            >
              <div>
                <span className="inline-block bg-accent/15 text-foreground px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  {course.tag}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span>{course.duration}</span>
                  <span>·</span>
                  <span>{course.lessons}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-5 border-t border-border">
                <span className="text-2xl font-extrabold text-foreground">{course.price}</span>
                <button className="flex h-10 w-10 items-center justify-center rounded-button bg-accent transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_16px_rgba(163,230,53,0.3)]">
                  <ArrowRight className="w-5 h-5 text-accent-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
