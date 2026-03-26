import { useState } from "react";
import Icon from "@/components/ui/icon";

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

interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
  date: string;
}

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

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function NavBar({ onCabinetOpen }: { onCabinetOpen: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10,10,10,0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => scrollTo("#hero")}
          className="font-display text-base font-600 tracking-tight text-white"
        >
          PAX <span className="neon-text">HISTORIA</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-body text-xs text-white/40 hover:text-white/80 transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCabinetOpen}
            className="btn-ghost px-3 py-1.5 rounded text-xs flex items-center gap-1.5"
          >
            <Icon name="User" size={13} />
            <span className="hidden sm:inline">Кабинет</span>
          </button>
          <button
            onClick={() => scrollTo("#pricing")}
            className="btn-neon px-4 py-1.5 rounded text-xs hidden sm:block"
          >
            Начать
          </button>
          <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={18} className="text-white/60" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(10,10,10,0.98)" }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => { scrollTo(l.href); setMenuOpen(false); }}
              className="font-body text-xs text-white/40 hover:text-white/80 transition-colors text-left tracking-wide"
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
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-0 scanline" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,255,170,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-14">
        <div className="tag-neon mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ffaa] animate-pulse-neon" />
          Исторические подписки
        </div>

        <h1 className="font-display font-bold leading-none mb-8 tracking-tight">
          <span
            className="block text-[clamp(4rem,12vw,9rem)] text-white/90"
            style={{ letterSpacing: "-0.03em" }}
          >
            Pax
          </span>
          <span
            className="block text-[clamp(4rem,12vw,9rem)] neon-text animate-flicker"
            style={{ letterSpacing: "-0.03em" }}
          >
            Historia
          </span>
        </h1>

        <div className="divider-neon mb-8 mx-auto" />

        <p className="font-body text-sm text-white/35 mb-12 max-w-md mx-auto leading-relaxed tracking-wide">
          Погружайтесь в глубины мировой истории с эксклюзивными материалами,
          архивными документами и лекциями ведущих историков
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => scrollTo("#pricing")} className="btn-neon px-8 py-3 rounded text-sm">
            Выбрать подписку
          </button>
          <button onClick={() => scrollTo("#faq")} className="btn-ghost px-8 py-3 rounded text-sm">
            Узнать больше
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-sm mx-auto">
          {[
            { value: "12K+", label: "Подписчиков" },
            { value: "500+", label: "Материалов" },
            { value: "6 лет", label: "На рынке" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-bold text-white/90 mb-1">{s.value}</div>
              <div className="font-body text-[10px] tracking-widest uppercase text-white/25">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={20} className="text-white/20" />
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24" style={{ background: "#0a0a0a" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="tag-neon mb-5">Тарифы</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white/90 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
            Выберите свой путь
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 flex flex-col rounded ${
                plan.popular ? "neon-border" : "card-neo"
              }`}
              style={plan.popular ? { background: "#0f0f0f" } : {}}
            >
              {plan.popular && (
                <div className="absolute -top-px left-0 right-0 h-px" style={{ background: "#00ffaa", boxShadow: "0 0 8px rgba(0,255,170,0.8)" }} />
              )}

              {plan.popular && (
                <span className="tag-neon mb-6 self-start">Популярный</span>
              )}

              <div className="mb-6">
                <div
                  className="w-8 h-8 flex items-center justify-center rounded mb-4"
                  style={{ background: plan.popular ? "rgba(0,255,170,0.1)" : "rgba(255,255,255,0.04)", border: plan.popular ? "1px solid rgba(0,255,170,0.2)" : "1px solid rgba(255,255,255,0.06)" }}
                >
                  <Icon name={plan.icon as "Shield" | "Award" | "Crown"} size={16} className={plan.popular ? "text-[#00ffaa]" : "text-white/40"} />
                </div>
                <h3 className="font-display text-xl font-bold text-white/90 mb-1">{plan.name}</h3>
                <p className="font-body text-xs text-white/30">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`font-display text-4xl font-bold ${plan.popular ? "neon-text" : "text-white/80"}`}>{plan.price}</span>
                  <span className="font-body text-sm text-white/25">₽{plan.period}</span>
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span className={`mt-0.5 flex-shrink-0 text-xs ${plan.popular ? "text-[#00ffaa]" : "text-white/25"}`}>→</span>
                    <span className="font-body text-xs text-white/50 leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded text-xs font-medium tracking-wide ${
                  plan.popular ? "btn-neon" : "btn-ghost"
                }`}
              >
                {plan.popular ? "Начать бесплатно" : "Выбрать тариф"}
              </button>
            </div>
          ))}
        </div>

        <p className="font-body text-[11px] text-white/20 mt-8 text-center tracking-wide">
          7 дней бесплатно · Отмена в любой момент · Без скрытых платежей
        </p>
      </div>
    </section>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="card-neo p-6 rounded">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={12}
              className={i < r.rating ? "text-[#00ffaa]" : "text-white/10"}
            />
          ))}
        </div>
        <span className="font-body text-[10px] text-white/20">{r.date}</span>
      </div>
      <p className="font-body text-sm text-white/55 leading-relaxed mb-6">"{r.text}"</p>
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div
          className="w-8 h-8 rounded flex items-center justify-center font-display text-xs font-bold text-black flex-shrink-0"
          style={{ background: "#00ffaa" }}
        >
          {r.avatar}
        </div>
        <div>
          <div className="font-body text-xs font-medium text-white/70">{r.name}</div>
          <div className="font-body text-[10px] text-white/25">{r.role}</div>
        </div>
      </div>
    </div>
  );
}

function ReviewForm({ onSubmit }: { onSubmit: (r: Review) => void }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hovered, setHovered] = useState(0);
  const [done, setDone] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !text.trim()) return;
    onSubmit({
      name: name.trim(),
      role: role.trim() || "Подписчик",
      text: text.trim(),
      rating,
      avatar: name.trim()[0].toUpperCase(),
      date: new Date().toLocaleDateString("ru-RU", { day: "2-digit", month: "long", year: "numeric" }),
    });
    setDone(true);
  };

  if (done) {
    return (
      <div className="card-neo p-6 rounded flex flex-col items-center justify-center text-center min-h-[240px]">
        <Icon name="CheckCircle" size={28} className="text-[#00ffaa] mb-3" />
        <p className="font-display text-lg text-white/80 mb-1">Спасибо!</p>
        <p className="font-body text-xs text-white/25">Ваш опыт поможет другим</p>
      </div>
    );
  }

  return (
    <div className="card-neo p-6 rounded" style={{ border: "1px solid rgba(0,255,170,0.12)" }}>
      <p className="font-body text-[10px] tracking-widest uppercase text-white/30 mb-5">Ваш отзыв</p>

      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <button
            key={i}
            onMouseEnter={() => setHovered(i + 1)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setRating(i + 1)}
            className="transition-transform hover:scale-110"
          >
            <Icon
              name="Star"
              size={20}
              className={`transition-colors ${i < (hovered || rating) ? "text-[#00ffaa]" : "text-white/10"}`}
            />
          </button>
        ))}
      </div>

      <div className="space-y-2.5">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-neo"
          placeholder="Ваше имя *"
        />
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="input-neo"
          placeholder="Кто вы (необязательно)"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          className="input-neo resize-none"
          placeholder="Расскажите о своём опыте... *"
        />
        <button
          onClick={handleSubmit}
          disabled={!name.trim() || !text.trim()}
          className="btn-neon w-full py-3 rounded text-xs disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Опубликовать
        </button>
      </div>
    </div>
  );
}

function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const addReview = (r: Review) => setReviews((prev) => [r, ...prev]);

  return (
    <section id="reviews" className="py-24" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="tag-neon mb-5">Отзывы</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white/90 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
            Что говорят подписчики
          </h2>
        </div>

        {reviews.length === 0 ? (
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            <div className="card-neo p-6 rounded flex flex-col items-center justify-center text-center min-h-[240px]">
              <Icon name="MessageSquare" size={24} className="text-white/10 mb-3" />
              <p className="font-body text-sm text-white/20">Пока нет отзывов</p>
              <p className="font-body text-xs text-white/12 mt-1">Станьте первым</p>
            </div>
            <ReviewForm onSubmit={addReview} />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <ReviewCard key={i} r={r} />
            ))}
            <ReviewForm onSubmit={addReview} />
          </div>
        )}
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-16">
          <div className="tag-neon mb-5">FAQ</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white/90 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
            Вопросы и ответы
          </h2>
        </div>

        <div className="space-y-1">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <button
                className="w-full py-5 flex items-center justify-between text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-body text-sm text-white/60 group-hover:text-white/80 transition-colors pr-6">{item.q}</span>
                <Icon
                  name={open === i ? "Minus" : "Plus"}
                  size={14}
                  className={`flex-shrink-0 transition-colors ${open === i ? "text-[#00ffaa]" : "text-white/25"}`}
                />
              </button>
              {open === i && (
                <div className="pb-5">
                  <p className="font-body text-sm text-white/35 leading-relaxed">{item.a}</p>
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
    <section id="contacts" className="py-24" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="tag-neon mb-5">Контакты</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white/90 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
            Связаться с нами
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: "Mail", label: "Email", value: "info@paxhistoria.ru" },
              { icon: "MessageCircle", label: "Telegram", value: "@paxhistoria" },
              { icon: "Clock", label: "Поддержка", value: "Пн–Пт, 9:00–18:00 МСК" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div
                  className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,255,170,0.06)", border: "1px solid rgba(0,255,170,0.12)" }}
                >
                  <Icon name={c.icon as "Mail" | "MessageCircle" | "Clock"} size={15} className="text-[#00ffaa]" />
                </div>
                <div>
                  <div className="font-body text-[10px] text-white/25 uppercase tracking-widest mb-0.5">{c.label}</div>
                  <div className="font-body text-sm text-white/65">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            {sent ? (
              <div className="card-neo p-8 rounded text-center">
                <Icon name="CheckCircle" size={32} className="text-[#00ffaa] mx-auto mb-4" />
                <p className="font-display text-xl text-white/80 mb-1">Отправлено</p>
                <p className="font-body text-sm text-white/25">Ответим в течение 24 часов</p>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <label className="font-body text-[10px] text-white/25 uppercase tracking-widest block mb-2">Имя</label>
                  <input className="input-neo" placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="font-body text-[10px] text-white/25 uppercase tracking-widest block mb-2">Email</label>
                  <input type="email" className="input-neo" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="font-body text-[10px] text-white/25 uppercase tracking-widest block mb-2">Сообщение</label>
                  <textarea rows={4} className="input-neo resize-none" placeholder="Ваш вопрос..." />
                </div>
                <button onClick={() => setSent(true)} className="btn-neon w-full py-3 rounded text-xs">
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
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
    >
      <div
        className="w-full max-w-xl rounded overflow-hidden"
        style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)", maxHeight: "88vh", overflowY: "auto" }}
      >
        <div
          className="flex items-center justify-between px-7 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div>
            <h2 className="font-display text-xl text-white/85">Личный кабинет</h2>
            <p className="font-body text-xs text-white/25 mt-0.5">Александра Мельникова</p>
          </div>
          <button onClick={onClose} className="text-white/25 hover:text-white/60 transition-colors">
            <Icon name="X" size={18} />
          </button>
        </div>

        <div
          className="px-7 py-3 flex gap-6"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          {(["sub", "payments"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-body text-xs tracking-wide pb-2 border-b transition-all ${
                tab === t
                  ? "text-[#00ffaa] border-[#00ffaa]"
                  : "text-white/25 border-transparent hover:text-white/45"
              }`}
            >
              {t === "sub" ? "Подписка" : "История платежей"}
            </button>
          ))}
        </div>

        <div className="p-7">
          {tab === "sub" && (
            <div>
              <div className="card-neo p-5 rounded mb-6" style={{ border: "1px solid rgba(0,255,170,0.12)" }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-body text-[10px] text-white/25 uppercase tracking-widest mb-1">Текущий тариф</p>
                    <h3 className="font-display text-2xl font-bold neon-text">Центурион</h3>
                  </div>
                  <span
                    className="px-2.5 py-1 rounded text-[10px] font-body uppercase tracking-widest"
                    style={{ background: "rgba(0,255,170,0.08)", color: "#00ffaa", border: "1px solid rgba(0,255,170,0.2)" }}
                  >
                    Активна
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div>
                    <p className="font-body text-[10px] text-white/25 mb-1">Следующее списание</p>
                    <p className="font-body text-sm text-white/65">01 апреля 2025</p>
                  </div>
                  <div>
                    <p className="font-body text-[10px] text-white/25 mb-1">Сумма</p>
                    <p className="font-body text-sm text-white/65">990 ₽/мес</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 mb-7">
                <p className="font-body text-[10px] text-white/20 uppercase tracking-widest">Включено в тариф</p>
                {PLANS[1].features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span className="text-[#00ffaa] text-xs">→</span>
                    <span className="font-body text-xs text-white/45">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <button className="btn-neon flex-1 py-2.5 rounded text-xs">Повысить тариф</button>
                <button className="btn-ghost flex-1 py-2.5 rounded text-xs">Управление</button>
              </div>
            </div>
          )}

          {tab === "payments" && (
            <div>
              <div className="space-y-1.5">
                {PAYMENT_HISTORY.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(0,255,170,0.06)", border: "1px solid rgba(0,255,170,0.1)" }}
                      >
                        <Icon name="Receipt" size={12} className="text-[#00ffaa]" />
                      </div>
                      <div>
                        <p className="font-body text-xs font-medium text-white/65">{p.plan}</p>
                        <p className="font-body text-[10px] text-white/25">{p.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-body text-sm text-white/65">{p.amount}</p>
                      <span className="text-[10px] font-body text-[#00ffaa]">{p.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-5 p-4 rounded flex items-center justify-between"
                style={{ background: "rgba(0,255,170,0.04)", border: "1px solid rgba(0,255,170,0.1)" }}
              >
                <span className="font-body text-xs text-white/30">Всего потрачено</span>
                <span className="font-display text-lg font-bold neon-text">2 960 ₽</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-10" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-base font-bold tracking-tight">
            PAX <span className="neon-text">HISTORIA</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-body text-[11px] text-white/20 hover:text-white/50 transition-colors tracking-wide"
              >
                {l.label}
              </button>
            ))}
          </div>
          <p className="font-body text-[11px] text-white/15">© 2025 Pax Historia</p>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  const [cabinetOpen, setCabinetOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
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
