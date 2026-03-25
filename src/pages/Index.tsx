import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/0c900aa3-a2d7-48dd-bfe0-0abd6caa6085/files/2487340f-e3eb-4cd4-83e4-d9419278bf75.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const PLANS = [
  {
    name: "Легат",
    price: "490",
    period: "/мес",
    description: "Для начинающих исследователей",
    features: [
      "Доступ к базовой библиотеке",
      "2 исторических журнала в месяц",
      "Участие в вебинарах",
      "Email-поддержка",
    ],
    popular: false,
    icon: "Shield",
  },
  {
    name: "Центурион",
    price: "990",
    period: "/мес",
    description: "Для серьёзных исследователей",
    features: [
      "Полная библиотека материалов",
      "10 эксклюзивных изданий",
      "Живые лекции с историками",
      "Приоритетная поддержка",
      "Архив за 3 года",
    ],
    popular: true,
    icon: "Award",
  },
  {
    name: "Консул",
    price: "1 990",
    period: "/мес",
    description: "Для истинных знатоков",
    features: [
      "Всё из Центуриона",
      "Личный куратор-историк",
      "Доступ к редким архивам",
      "Эксклюзивные подкасты",
      "Печатные издания почтой",
      "Закрытый клуб Консулов",
    ],
    popular: false,
    icon: "Crown",
  },
];

const REVIEWS = [
  {
    name: "Александра Мельникова",
    role: "Преподаватель истории",
    text: "Pax Historia изменила мой подход к преподаванию. Материалы настолько глубокие и хорошо структурированные, что я использую их на каждом уроке.",
    rating: 5,
    avatar: "А",
  },
  {
    name: "Дмитрий Волков",
    role: "Историк-любитель",
    text: "Подписка Консул полностью оправдывает себя. Куратор помогает разбираться в сложных темах, а архивные материалы — это настоящее сокровище.",
    rating: 5,
    avatar: "Д",
  },
  {
    name: "Мария Соколова",
    role: "Студентка исторического факультета",
    text: "Начала с Легата для учёбы, перешла на Центуриона и не пожалела. Вебинары с настоящими историками — это что-то невероятное.",
    rating: 5,
    avatar: "М",
  },
];

const FAQ_ITEMS = [
  {
    q: "Как работает подписка?",
    a: "После оформления вы получаете немедленный доступ ко всем материалам своего тарифа. Подписка автоматически продлевается каждый месяц. Вы можете отменить её в любой момент в личном кабинете.",
  },
  {
    q: "Можно ли сменить тариф?",
    a: "Да, вы можете повысить или понизить тариф в любое время. При повышении — доступ открывается сразу, при понижении — изменения вступают в силу со следующего периода.",
  },
  {
    q: "Есть ли пробный период?",
    a: "Да! Для новых пользователей действует 7-дневный бесплатный пробный период на тариф Центурион. Карта не нужна.",
  },
  {
    q: "Как получить доступ к архивным материалам?",
    a: "Все архивные материалы доступны в вашем личном кабинете в разделе «Библиотека». Тариф Центурион открывает архив за 3 года, Консул — полный исторический архив.",
  },
  {
    q: "Что такое закрытый клуб Консулов?",
    a: "Это приватное сообщество подписчиков высшего тарифа, где проходят закрытые встречи с историками, обсуждения редких находок и специальные мероприятия.",
  },
];

const PAYMENT_HISTORY = [
  { date: "01.03.2025", plan: "Центурион", amount: "990 ₽", status: "Оплачено" },
  { date: "01.02.2025", plan: "Центурион", amount: "990 ₽", status: "Оплачено" },
  { date: "01.01.2025", plan: "Легат", amount: "490 ₽", status: "Оплачено" },
  { date: "01.12.2024", plan: "Легат", amount: "490 ₽", status: "Оплачено" },
];

function NavBar({ onCabinetOpen }: { onCabinetOpen: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(201,168,76,0.15)]"
      style={{ background: "rgba(13,11,8,0.92)", backdropFilter: "blur(16px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("#hero")}>
          <span className="font-display text-xl font-bold gold-text tracking-widest">PAX HISTORIA</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-body text-xs tracking-widest uppercase text-[#C4A96A] hover:text-[#F5D78E] transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onCabinetOpen}
            className="btn-outline-gold px-4 py-2 rounded text-xs flex items-center gap-2"
          >
            <Icon name="User" size={14} />
            <span className="hidden sm:inline">Кабинет</span>
          </button>
          <button className="btn-gold px-4 py-2 rounded text-xs hidden sm:block">
            Начать
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} className="text-[#C9A84C]" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden border-t border-[rgba(201,168,76,0.15)] px-6 py-4 flex flex-col gap-4"
          style={{ background: "rgba(13,11,8,0.98)" }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-body text-xs tracking-widest uppercase text-[#C4A96A] hover:text-[#F5D78E] transition-colors text-left"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 20%, #0D0B08 80%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.3)] mb-8"
          style={{ background: "rgba(201,168,76,0.05)" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
          <span className="font-body text-xs tracking-[0.2em] uppercase text-[#C9A84C]">
            Исторические подписки
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-bold leading-none mb-6">
          <span className="gold-text">Pax</span>
          <br />
          <span className="text-[#E8D5A3]">Historia</span>
        </h1>

        <div className="divider-gold mb-8" />

        <p className="font-display text-xl md:text-2xl italic text-[#C4A96A] mb-4 font-light">
          «Historia est magistra vitae»
        </p>
        <p className="font-body text-sm md:text-base text-[#8B7355] mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
          Погружайтесь в глубины мировой истории с эксклюзивными материалами,
          архивными документами и лекциями ведущих историков планеты
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollTo("#pricing")} className="btn-gold px-8 py-4 rounded-sm text-sm">
            Выбрать подписку
          </button>
          <button onClick={() => scrollTo("#reviews")} className="btn-outline-gold px-8 py-4 rounded-sm text-sm">
            Узнать больше
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "12 000+", label: "Подписчиков" },
            { value: "500+", label: "Материалов" },
            { value: "6 лет", label: "На рынке" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold gold-text">{s.value}</div>
              <div className="font-body text-xs tracking-widest uppercase text-[#6B5B3E] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-[#C9A84C] opacity-50" />
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4">Тарифные планы</p>
          <h2 className="font-display text-5xl font-bold text-[#E8D5A3] mb-4">Выберите свой путь</h2>
          <div className="divider-gold mb-6" />
          <p className="font-body text-sm text-[#6B5B3E] max-w-lg mx-auto">
            Каждый тариф — это врата в новый уровень исторического познания
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-sm p-8 flex flex-col ${
                plan.popular
                  ? "border border-[#C9A84C] shadow-[0_0_40px_rgba(201,168,76,0.2)]"
                  : "card-historia"
              }`}
              style={
                plan.popular
                  ? { background: "linear-gradient(145deg, #251C0A 0%, #1E1608 100%)" }
                  : {}
              }
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="btn-gold px-4 py-1 rounded-full text-[10px]">Популярный</span>
                </div>
              )}

              <div className="mb-6">
                <div className="w-10 h-10 rounded-sm border border-[rgba(201,168,76,0.3)] flex items-center justify-center mb-4">
                  <Icon name={plan.icon as "Shield" | "Award" | "Crown"} size={18} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#E8D5A3] mb-1">{plan.name}</h3>
                <p className="font-body text-xs text-[#6B5B3E]">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold gold-text">{plan.price}</span>
                  <span className="font-body text-sm text-[#6B5B3E]">₽{plan.period}</span>
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Icon name="Check" size={14} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    <span className="font-body text-xs text-[#C4A96A] leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-sm text-xs ${plan.popular ? "btn-gold" : "btn-outline-gold"}`}>
                {plan.popular ? "Начать бесплатно" : "Выбрать тариф"}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-xs text-[#4A3E2A] mt-8">
          7 дней бесплатно для новых пользователей · Отмена в любой момент · Без скрытых платежей
        </p>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="py-24" style={{ background: "#0D0B08" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4">Отзывы</p>
          <h2 className="font-display text-5xl font-bold text-[#E8D5A3] mb-4">Что говорят историки</h2>
          <div className="divider-gold" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="card-historia rounded-sm p-8">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
                ))}
              </div>
              <p className="font-display text-base italic text-[#C4A96A] leading-relaxed mb-8 font-light">
                «{r.text}»
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(201,168,76,0.15)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-bold text-[#0D0B08]"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #F5D78E)" }}
                >
                  {r.avatar}
                </div>
                <div>
                  <div className="font-body text-xs font-semibold text-[#E8D5A3]">{r.name}</div>
                  <div className="font-body text-xs text-[#6B5B3E]">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 section-alt">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4">Вопросы и ответы</p>
          <h2 className="font-display text-5xl font-bold text-[#E8D5A3] mb-4">FAQ</h2>
          <div className="divider-gold" />
        </div>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="card-historia rounded-sm overflow-hidden">
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-body text-sm text-[#E8D5A3] pr-4">{item.q}</span>
                <Icon
                  name={open === i ? "ChevronUp" : "ChevronDown"}
                  size={16}
                  className="text-[#C9A84C] flex-shrink-0 transition-transform duration-200"
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 border-t border-[rgba(201,168,76,0.1)]">
                  <p className="font-body text-sm text-[#8B7355] leading-relaxed pt-4">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacts" className="py-24" style={{ background: "#0D0B08" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4">Связаться</p>
          <h2 className="font-display text-5xl font-bold text-[#E8D5A3] mb-4">Контакты</h2>
          <div className="divider-gold" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: "Mail", label: "Email", value: "info@paxhistoria.ru" },
              { icon: "MessageCircle", label: "Telegram", value: "@paxhistoria" },
              { icon: "Clock", label: "Поддержка", value: "Пн–Пт, 9:00–18:00 МСК" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm border border-[rgba(201,168,76,0.3)] flex items-center justify-center flex-shrink-0">
                  <Icon name={c.icon as "Mail" | "MessageCircle" | "Clock"} size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <div className="font-body text-xs text-[#6B5B3E] uppercase tracking-widest mb-1">{c.label}</div>
                  <div className="font-body text-sm text-[#E8D5A3]">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-historia rounded-sm p-8">
            {sent ? (
              <div className="text-center py-8">
                <Icon name="CheckCircle" size={40} className="text-[#C9A84C] mx-auto mb-4" />
                <p className="font-display text-xl text-[#E8D5A3]">Сообщение отправлено!</p>
                <p className="font-body text-sm text-[#6B5B3E] mt-2">Мы ответим в течение 24 часов</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="font-body text-xs text-[#6B5B3E] uppercase tracking-widest block mb-2">Имя</label>
                  <input
                    className="w-full bg-[#130F08] border border-[rgba(201,168,76,0.2)] rounded-sm px-4 py-3 font-body text-sm text-[#E8D5A3] focus:outline-none focus:border-[#C9A84C] transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-[#6B5B3E] uppercase tracking-widest block mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#130F08] border border-[rgba(201,168,76,0.2)] rounded-sm px-4 py-3 font-body text-sm text-[#E8D5A3] focus:outline-none focus:border-[#C9A84C] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-[#6B5B3E] uppercase tracking-widest block mb-2">Сообщение</label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#130F08] border border-[rgba(201,168,76,0.2)] rounded-sm px-4 py-3 font-body text-sm text-[#E8D5A3] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                    placeholder="Ваш вопрос..."
                  />
                </div>
                <button onClick={() => setSent(true)} className="btn-gold w-full py-3 rounded-sm text-xs">
                  Отправить сообщение
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Cabinet({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<"sub" | "payments">("sub");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
    >
      <div
        className="w-full max-w-2xl rounded-sm border border-[rgba(201,168,76,0.3)] overflow-hidden"
        style={{ background: "#13100A", maxHeight: "90vh", overflowY: "auto" }}
      >
        <div className="flex items-center justify-between px-8 py-5 border-b border-[rgba(201,168,76,0.15)]">
          <div>
            <h2 className="font-display text-2xl text-[#E8D5A3]">Личный кабинет</h2>
            <p className="font-body text-xs text-[#6B5B3E] mt-0.5">Александра Мельникова</p>
          </div>
          <button onClick={onClose} className="text-[#6B5B3E] hover:text-[#C9A84C] transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="px-8 py-4 border-b border-[rgba(201,168,76,0.1)] flex gap-6">
          {(["sub", "payments"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-body text-xs tracking-widest uppercase pb-2 border-b transition-all ${
                tab === t
                  ? "text-[#C9A84C] border-[#C9A84C]"
                  : "text-[#6B5B3E] border-transparent hover:text-[#C4A96A]"
              }`}
            >
              {t === "sub" ? "Подписка" : "История платежей"}
            </button>
          ))}
        </div>

        <div className="p-8">
          {tab === "sub" && (
            <div>
              <div className="card-historia rounded-sm p-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-body text-xs text-[#6B5B3E] uppercase tracking-widest mb-1">Текущий тариф</p>
                    <h3 className="font-display text-3xl font-bold gold-text">Центурион</h3>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-body uppercase tracking-widest"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      color: "#C9A84C",
                      border: "1px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    Активна
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[rgba(201,168,76,0.1)]">
                  <div>
                    <p className="font-body text-xs text-[#6B5B3E] mb-1">Следующее списание</p>
                    <p className="font-body text-sm text-[#E8D5A3]">01 апреля 2025</p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#6B5B3E] mb-1">Сумма</p>
                    <p className="font-body text-sm text-[#E8D5A3]">990 ₽/мес</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-body text-xs text-[#6B5B3E] uppercase tracking-widest mb-4">Включено в тариф</h4>
                {PLANS[1].features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <Icon name="Check" size={14} className="text-[#C9A84C]" />
                    <span className="font-body text-xs text-[#C4A96A]">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-8">
                <button className="btn-gold flex-1 py-3 rounded-sm text-xs">Повысить тариф</button>
                <button className="btn-outline-gold flex-1 py-3 rounded-sm text-xs">Управление</button>
              </div>
            </div>
          )}

          {tab === "payments" && (
            <div>
              <div className="space-y-2">
                {PAYMENT_HISTORY.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-sm border border-[rgba(201,168,76,0.1)]"
                    style={{ background: "rgba(201,168,76,0.03)" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-sm border border-[rgba(201,168,76,0.2)] flex items-center justify-center">
                        <Icon name="Receipt" size={14} className="text-[#C9A84C]" />
                      </div>
                      <div>
                        <p className="font-body text-xs font-medium text-[#E8D5A3]">{p.plan}</p>
                        <p className="font-body text-xs text-[#6B5B3E]">{p.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-body text-sm text-[#E8D5A3]">{p.amount}</p>
                      <span className="text-[10px] font-body text-[#C9A84C]">{p.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 p-4 rounded-sm border border-[rgba(201,168,76,0.15)]"
                style={{ background: "rgba(201,168,76,0.04)" }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-[#6B5B3E]">Всего потрачено</span>
                  <span className="font-display text-lg font-bold gold-text">2 960 ₽</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[rgba(201,168,76,0.1)]" style={{ background: "#080604" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl font-bold gold-text tracking-widest">PAX HISTORIA</div>
          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-body text-xs text-[#4A3E2A] hover:text-[#C9A84C] transition-colors tracking-widest uppercase"
              >
                {l.label}
              </button>
            ))}
          </div>
          <p className="font-body text-xs text-[#2E2416]">© 2025 Pax Historia</p>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  const [cabinetOpen, setCabinetOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#0D0B08" }}>
      <NavBar onCabinetOpen={() => setCabinetOpen(true)} />
      <HeroSection />
      <PricingSection />
      <ReviewsSection />
      <FaqSection />
      <ContactsSection />
      <Footer />
      {cabinetOpen && <Cabinet onClose={() => setCabinetOpen(false)} />}
    </div>
  );
}