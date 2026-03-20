export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">КИМЧИ★РЕС</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Атмосфера</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ОСТРЕЕ.
              <br />
              ЯРЧЕ. <span>Вкуснее.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Аутентичная корейская кухня в самом сердце города. Домашние рецепты, огненный кимчи и атмосфера настоящего Сеула — за соседним столиком.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Забронировать стол
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/7be65789-0d9c-42b8-90fd-b580162837b2/files/4cd85489-a601-416b-be97-0c3145804e93.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="sticker">
              КИМЧИ
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #СЕУЛ_ВАЙБ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              매운맛 🌶
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * КИМЧИ КОТОРОЕ ЖЖЁТ * BULGOGI ОТ ШЕФА * ТОЛЬКО АУТЕНТИКА * ОТКРЫТЫ ДО 23:00 * ДОСТАВКА ПО ГОРОДУ * КИМЧИ КОТОРОЕ ЖЖЁТ * BULGOGI ОТ ШЕФА * ТОЛЬКО АУТЕНТИКА * ОТКРЫТЫ ДО 23:00 * ДОСТАВКА ПО ГОРОДУ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТЫ ШЕФА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/7be65789-0d9c-42b8-90fd-b580162837b2/files/4cd85489-a601-416b-be97-0c3145804e93.jpg"
                alt="Кимчи Бибимбап"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Кимчи Бибимбап</h3>
                  <span className="price">780 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Рис с маринованными овощами, яйцо пашот, домашнее кимчи и соус гочуджан — классика Сеула.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--primary)", color: "white" }}>
                Острое 🌶🌶
              </span>
              <img
                src="https://cdn.poehali.dev/projects/7be65789-0d9c-42b8-90fd-b580162837b2/files/514cd80a-3007-486a-a272-f45dc41c110e.jpg"
                alt="Тток-пок-ки"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Тток-пок-ки</h3>
                  <span className="price">620 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Рисовые клёцки в огненном соусе гочуджан с рыбными котлетками и яйцом.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/7be65789-0d9c-42b8-90fd-b580162837b2/files/27f1a310-dfd3-4380-8111-26de9d6a2e95.jpg"
                alt="Булгоги"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Булгоги из говядины</h3>
                  <span className="price">1 100 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Мраморная говядина в маринаде из груши и соевого соуса, обжаренная на углях.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">КОРЕЯ РЯДОМ.</h2>
            <p className="vibe-text">
              Мы не просто готовим корейскую еду — мы привозим сюда целую культуру. Открытая кухня, запах дымящегося гриля, соусы ручной ферментации и тёплая атмосфера, где чувствуешь себя как в уличном кафе Сеула. Приходи один или большой компанией.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div
            className="vibe-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/7be65789-0d9c-42b8-90fd-b580162837b2/files/43325a48-94f2-4f69-be3d-1ddacd9ad595.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @KIMCHI.REST
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/7be65789-0d9c-42b8-90fd-b580162837b2/files/4cd85489-a601-416b-be97-0c3145804e93.jpg"
                alt="Корейская кухня 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/7be65789-0d9c-42b8-90fd-b580162837b2/files/514cd80a-3007-486a-a272-f45dc41c110e.jpg"
                alt="Корейская кухня 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/7be65789-0d9c-42b8-90fd-b580162837b2/files/43325a48-94f2-4f69-be3d-1ddacd9ad595.jpg"
                alt="Атмосфера ресторана"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/7be65789-0d9c-42b8-90fd-b580162837b2/files/27f1a310-dfd3-4380-8111-26de9d6a2e95.jpg"
                alt="Булгоги"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">КИМЧИ★РЕС</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Аутентичная корейская кухня в твоём городе. Рецепты из Сеула, тепло домашней кухни.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Доставка
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 12:00 — 23:00</li>
            <li>Сб–Вс: 11:00 — 23:00</li>
            <li style={{ marginTop: "10px", color: "var(--primary)", fontWeight: 700 }}>
              Доставка до 22:30
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (XXX) XXX-XX-XX</li>
            <li>ул. Ваша улица, д. 1</li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Instagram
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
