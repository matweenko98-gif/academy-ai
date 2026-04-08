import { ArrowLeft, ArrowRight } from "lucide-react";

const filters = ["Менторство", "Разбор работ", "Шаблоны", "Чек-листы"];

const teachers = [
  {
    initials: "ЕГ",
    name: "Евгений Гнедчик",
    role: "FULL-STACK / AI-BUILDER",
    description:
      "Собирает веб-продукты и AI-сервисы. Фокус: быстрые прототипы, автоматизация и вайбкодинг.",
    specialty: "LLM-МЕТОДОЛОГИЯ",
    color: "bg-accent",
  },
  {
    initials: "АП",
    name: "Анна Петрова",
    role: "LLM / PROMPT ENGINEER",
    description:
      "Показывает, как получать стабильное качество от моделей: шаблоны, проверки, цепочки, системное мышление.",
    specialty: "ВНЕДРЕНИЕ В КОМПАНИИ",
    color: "bg-cyan-400",
  },
  {
    initials: "ДК",
    name: "Дмитрий Козлов",
    role: "AI ДЛЯ БИЗНЕСА (STRATEGY)",
    description:
      "Помогает внедрять ИИ в процессы: от выбора кейсов до метрик эффективности и запуска пилотов.",
    specialty: "СТРАТЕГИЯ ВНЕДРЕНИЯ",
    color: "bg-accent",
  },
];

const TeachersSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1920px] mx-auto w-full px-[40px]">
        <div className="rounded-3xl bg-[#111] px-[40px] py-14 lg:py-20">
          {/* Header */}
          <div className="mb-10 lg:mb-12">
            <span className="inline-block bg-[#2a2a2a] text-gray-300 text-xs font-semibold uppercase tracking-widest rounded-full px-3.5 py-1 mb-5">
              Команда
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-5 max-w-2xl">
              Преподаватели-практики, которые работают с <span className="text-accent">ИИ каждый день</span>
            </h2>
            <p className="text-base text-gray-400 max-w-xl mb-8 leading-relaxed">
              Мы объясняем сложное простыми шагами: сценарий → практика →
              результат. Без воды и «магии»
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2.5">
              {filters.map((filter, i) => (
                <button
                  key={filter}
                  className={`rounded-button px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                    i === 0
                      ? "bg-[#2a2a2a] text-white border border-gray-600"
                      : "bg-[#1A1A1A] text-gray-400 border border-[#2a2a2a] hover:text-gray-200 hover:border-gray-500 hover:bg-[#222]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Teacher cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {teachers.map((t) => (
              <div
                key={t.name}
                className="flex w-full min-w-0 flex-col rounded-2xl border border-[#262626] bg-[#1A1A1A] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#363636] hover:shadow-[0_12px_40px_rgba(163,230,53,0.04)]"
              >
                <div
                  className={`w-14 h-14 rounded-full ${t.color} flex items-center justify-center font-bold text-foreground text-base mb-6`}
                >
                  {t.initials}
                </div>

                <span className="block text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                  {t.role}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{t.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                  {t.description}
                </p>

                <span className="self-start inline-block px-3.5 py-1 rounded-full border border-accent/40 text-accent text-xs font-semibold uppercase tracking-wider hover:bg-accent/10 transition-colors duration-200">
                  {t.specialty}
                </span>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-3 mt-10 lg:mt-14">
            <button
              aria-label="Назад"
              className="flex h-10 w-10 items-center justify-center rounded-button border border-[#2a2a2a] bg-[#1A1A1A] text-gray-400 transition-all duration-200 hover:border-gray-500 hover:bg-[#222] hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 mx-2">
              <span className="w-6 h-2 rounded-full bg-accent" />
              <span className="w-2 h-2 rounded-full bg-gray-600" />
              <span className="w-2 h-2 rounded-full bg-gray-600" />
              <span className="w-2 h-2 rounded-full bg-gray-600" />
            </div>

            <button
              aria-label="Вперед"
              className="flex h-10 w-10 items-center justify-center rounded-button border border-[#2a2a2a] bg-[#1A1A1A] text-gray-400 transition-all duration-200 hover:border-gray-500 hover:bg-[#222] hover:text-white"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
