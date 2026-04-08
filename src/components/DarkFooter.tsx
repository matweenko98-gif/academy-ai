const DarkFooter = () => {
  return (
    <footer className="w-full rounded-t-3xl bg-[#0A0A0A] text-primary-foreground">
      <div className="max-w-[1920px] mx-auto w-full px-[40px] py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xl font-bold text-accent">AI</span>
              <span className="text-xl font-bold text-primary-foreground">Академия</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/50">
              Образовательная платформа для тех, кто хочет освоить инструменты искусственного интеллекта и начать применять их в работе.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-primary-foreground">Обучение</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50">
              <li><a href="#" className="transition-colors duration-200 hover:text-accent">Все курсы</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-accent">Направления</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-accent">Расписание</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-accent">Преподаватели</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-primary-foreground">Компания</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50">
              <li><a href="#" className="transition-colors duration-200 hover:text-accent">О нас</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-accent">Блог</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-accent">Отзывы</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-accent">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-primary-foreground">Контакты</h4>
            <p className="mb-2 text-sm text-primary-foreground/50">+7 (800) 555-35-35</p>
            <p className="mb-6 text-sm text-primary-foreground/50">info@iiacademy.ru</p>
            <div className="flex gap-3">
              <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-primary-foreground/10 text-xs font-bold text-primary-foreground/60 transition-all duration-200 hover:bg-accent/20 hover:text-accent">TG</span>
              <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-primary-foreground/10 text-xs font-bold text-primary-foreground/60 transition-all duration-200 hover:bg-accent/20 hover:text-accent">VK</span>
              <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-primary-foreground/10 text-xs font-bold text-primary-foreground/60 transition-all duration-200 hover:bg-accent/20 hover:text-accent">YT</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/30 lg:mt-16 md:flex-row">
          <span>© 2026 ИИ Академия. Все права защищены.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors duration-200 hover:text-accent/70">Политика конфиденциальности</a>
            <a href="#" className="transition-colors duration-200 hover:text-accent/70">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DarkFooter;
