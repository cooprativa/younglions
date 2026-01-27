<script>
  let juryMembers = [
    { category: 'FILME', name: 'Fernando Silva', company: 'uzina', role: 'presidente júri', color: '#FFD700' },
    { category: 'Imprensa/outdoor', name: 'Fernando Silva', company: 'uzina', role: 'presidente júri', color: '#90EE90' },
    { category: 'DESIGN', name: 'Fernando Silva', company: 'uzina', role: 'presidente júri', color: '#FFA07A' },
    { category: 'DIGITAL', name: 'Fernando Silva', company: 'uzina', role: 'presidente júri', color: '#87CEEB' },
    { category: 'MEDIA', name: 'Fernando Silva', company: 'uzina', role: 'presidente júri', color: '#FFD700' },
    { category: 'PR', name: 'Fernando Silva', company: 'uzina', role: 'presidente júri', color: '#FF69B4' },
    { category: 'MARKETING', name: 'Fernando Silva', company: 'uzina', role: 'presidente júri', color: '#87CEEB' }
  ];
</script>

<div class="app">
  <!-- Navigation -->
  <nav class="nav">
    <a href="#" class="nav-home">
      <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 0L0 8.5V20H7V13H12V20H19V8.5L9.5 0Z" fill="black"/>
      </svg>
    </a>
    <a href="#sobre" class="nav-link">SOBRE</a>
    <a href="#juri" class="nav-link">JÚRI</a>
    <a href="#roger" class="nav-link">ROGER HATCHUEL</a>
    <a href="#historia" class="nav-link">A HISTÓRIA</a>
    <a href="#vencedores" class="nav-link">VENCEDORES</a>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <img src="https://api.builder.io/api/v1/image/assets/TEMP/846a1ec083d772ed133b654c19a2cfd030de6aeb?width=460" alt="Betclic Logo" class="hero-logo" />
      
      <div class="hero-text">
        <h1 class="hero-title">
          <span class="title-line-1">YOUN<span class="lion-icon">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/bbedcc2ba9451a3c8b56c5a082e44ed5a695a442?width=182" alt="Lion" class="lion-img" />
          </span>G</span>
          <span class="title-line-2">LIONS</span>
        </h1>
        <div class="hero-year">
          <span>20</span>
          <span>26</span>
        </div>
      </div>

      <div class="hero-badge">
        <div class="badge-content">
          <p class="badge-year">30 anos</p>
          <p class="badge-tagline">Sê culpado<br/>de uma<br/>grande ideia</p>
          <span class="badge-culpado">Culpado</span>
        </div>
      </div>
    </div>

    <button class="cta-button">INSCREVE-TE</button>
  </section>

  <!-- Partner Brands Section -->
  <section class="brands-section">
    <div class="section-header">
      <h2 class="section-title">MARCAS CÚMPLICES</h2>
      <p class="section-subtitle">PROCESSO:2026</p>
    </div>
    <div class="brands-grid">
      {#each Array(5) as _, i}
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/7c2fefae1806b84f25649475425a50c858873ab4?width=456" alt="Betclic Logo" class="brand-logo" />
      {/each}
    </div>
  </section>

  <!-- Statistics Section -->
  <section class="stats-section">
    <div class="section-header">
      <h2 class="section-title">O nosso cadastro</h2>
      <p class="section-subtitle">220 participantes</p>
    </div>

    <div class="stats-content">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">6</div>
          <div class="stat-label">OURO</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">2</div>
          <div class="stat-label">PRATA</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">8</div>
          <div class="stat-label">BRONZE</div>
        </div>
      </div>
      <span class="culpados-text">Culpados</span>
    </div>

    <div class="stats-footer">
      <p class="stats-description">
        Este ano celebramos 30 anos de Young Lions Portugal!<br/>
        A nossa primeira participação foi em 1996 e atualmente<br/>
        estamos no top 3 dos países mais premiados.
      </p>
      <button class="btn-secondary">SABE MAIS</button>
    </div>
  </section>

  <!-- Jury Section -->
  <section class="jury-section" id="juri">
    <div class="section-header">
      <h2 class="section-title-large">o JÚRI</h2>
    </div>

    <div class="jury-grid">
      {#each juryMembers as member}
        <div class="jury-card">
          <div class="jury-image" style="border-top-color: {member.color}">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/6a74f647a45700c2ee8f3dac3ab4e472c318483f?width=426" alt={member.name} class="jury-photo" />
            <span class="jury-category">{member.category}</span>
          </div>
          <div class="jury-info">
            <p class="jury-role">{member.role}</p>
            <h3 class="jury-name">{member.name}</h3>
            <p class="jury-company">{member.company}</p>
            <button class="btn-jury">Conhece o júri</button>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-container">
      <!-- Main Sponsors -->
      <div class="footer-section">
        <div class="footer-section-header">
          <h3 class="footer-section-title">PROMOTOR</h3>
          <span class="footer-section-label">MARCA OFICIAL</span>
        </div>
        <div class="footer-logos main-sponsors">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/7f4e795860c1a52df4972df71e0b778c08175c3b?width=296" alt="Betclic" class="footer-logo-lg" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/846a1ec083d772ed133b654c19a2cfd030de6aeb?width=460" alt="Partner" class="footer-logo-lg" />
        </div>
      </div>

      <!-- Official Partners -->
      <div class="footer-section">
        <div class="footer-section-header">
          <h3 class="footer-section-title">PARCEIRO OFICIAL</h3>
          <span class="footer-section-label">PRÉMIO DE PARTICIPAÇÃO</span>
        </div>
        <div class="footer-logos official-partners">
          <div class="footer-logo-placeholder">Hallinan</div>
          <div class="footer-logo-placeholder">NOS</div>
          <div class="footer-logo-placeholder">Vodafone</div>
        </div>
      </div>

      <!-- Creative Partnerships -->
      <div class="footer-section">
        <div class="footer-section-header">
          <h3 class="footer-section-title">PARCEIROS CRIATIVOS</h3>
        </div>
        <div class="footer-logos creative-partners">
          <div class="footer-logo-placeholder">Aperf</div>
          <div class="footer-logo-placeholder">Good</div>
          <div class="footer-logo-placeholder">Brandia</div>
          <div class="footer-logo-placeholder">Central</div>
        </div>
      </div>

      <!-- Collaborators -->
      <div class="footer-section">
        <div class="footer-section-header">
          <h3 class="footer-section-title">COLAB</h3>
        </div>
        <div class="footer-logos collaborators">
          <div class="footer-logo-placeholder">SMAC</div>
          <div class="footer-logo-placeholder">MEIOS & MEDIA</div>
          <div class="footer-logo-placeholder">MARKETEER</div>
          <div class="footer-logo-placeholder">BRIEFING</div>
        </div>
      </div>

      <!-- Support -->
      <div class="footer-section">
        <div class="footer-section-header">
          <h3 class="footer-section-title">ENGAJADORES</h3>
        </div>
        <div class="footer-logos supporters">
          <div class="footer-logo-placeholder">DMBB</div>
          <div class="footer-logo-placeholder">G+</div>
          <div class="footer-logo-placeholder">Coral</div>
          <div class="footer-logo-placeholder">Criativar</div>
        </div>
      </div>

      <!-- Bottom brands -->
      <div class="footer-section">
        <div class="footer-logos bottom-brands">
          <div class="footer-logo-placeholder">29</div>
          <div class="footer-logo-placeholder">Plano B</div>
          <div class="footer-logo-placeholder">Good</div>
          <div class="footer-logo-placeholder">Jump</div>
          <div class="footer-logo-placeholder">Vox</div>
          <div class="footer-logo-placeholder">UCI</div>
        </div>
      </div>

      <!-- Social Media Links -->
      <div class="footer-social">
        <a href="#" class="social-link">FACEBOOK</a>
        <a href="#" class="social-link">INSTAGRAM</a>
        <a href="#" class="social-link">LINKEDIN</a>
        <a href="#" class="social-link">TIKTOK</a>
        <a href="#" class="social-link">CANVA</a>
        <a href="#" class="social-link">LIONS</a>
      </div>
    </div>
  </footer>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #FFCD00;
    font-family: 'IBM Plex Mono', monospace;
  }

  .app {
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }

  /* Navigation */
  .nav {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem 4rem;
    background-color: #FFCD00;
  }

  .nav-home {
    display: flex;
    align-items: center;
  }

  .nav-link {
    color: #000;
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 0.164px;
    text-transform: uppercase;
    transition: opacity 0.3s;
  }

  .nav-link:hover {
    opacity: 0.7;
  }

  /* Hero Section */
  .hero {
    position: relative;
    padding: 4rem 2rem;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFCD00;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 1400px;
    width: 100%;
  }

  .hero-logo {
    width: 230px;
    height: auto;
  }

  .hero-text {
    text-align: center;
  }

  .hero-title {
    font-family: 'Space Mono', monospace;
    font-size: clamp(4rem, 15vw, 14rem);
    font-weight: 700;
    line-height: 1;
    color: #EBEBEB;
    margin: 0;
    letter-spacing: 0.22px;
    text-transform: uppercase;
  }

  .title-line-1,
  .title-line-2 {
    display: block;
  }

  .lion-icon {
    display: inline-block;
    position: relative;
  }

  .lion-img {
    width: clamp(40px, 6vw, 91px);
    height: auto;
    vertical-align: middle;
  }

  .hero-year {
    display: flex;
    gap: 2rem;
    justify-content: center;
    font-family: 'Space Mono', monospace;
    font-size: clamp(3rem, 6vw, 6rem);
    font-weight: 400;
    color: #EBEBEB;
    margin-top: 1rem;
  }

  .hero-badge {
    position: relative;
    width: clamp(280px, 40vw, 517px);
    height: auto;
    aspect-ratio: 517/719;
    background-image: url('https://api.builder.io/api/v1/image/assets/TEMP/ed1bfb06f7c7260b51c9bc1e0430f9292b42a86d?width=1034');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .badge-content {
    text-align: center;
    color: #EBEBEB;
    padding: 3rem 2rem;
  }

  .badge-year {
    font-family: 'Space Mono', monospace;
    font-size: clamp(2.5rem, 5vw, 5.5rem);
    font-weight: 300;
    letter-spacing: 1.81px;
    margin: 0 0 2rem 0;
  }

  .badge-tagline {
    font-family: 'Space Mono', monospace;
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 700;
    letter-spacing: 9.256px;
    line-height: 1.5;
    color: #F8F3E0;
    margin: 0;
  }

  .badge-culpado {
    font-family: cursive;
    font-size: clamp(2.5rem, 5vw, 5rem);
    position: absolute;
    bottom: 20%;
    transform: rotate(-47deg);
    color: #272727;
    font-style: italic;
  }

  .cta-button {
    margin-top: 3rem;
    padding: 1rem 2rem;
    background-color: transparent;
    border: 2px solid #000;
    color: #000;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
  }

  .cta-button:hover {
    background-color: #000;
    color: #FFCD00;
  }

  /* Sections Common Styles */
  section {
    padding: 4rem 2rem;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
    padding: 2rem 4rem;
    border: 2px solid #2B302D;
  }

  .section-title {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
  }

  .section-title-large {
    font-size: clamp(2.5rem, 5vw, 4.7rem);
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
  }

  .section-subtitle {
    font-size: clamp(1.25rem, 2.5vw, 2.125rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 13.6px;
    margin: 0;
  }

  /* Brands Section */
  .brands-section {
    background-color: #EBEBEB;
  }

  .brands-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    padding: 2rem 4rem;
    align-items: center;
  }

  .brand-logo {
    width: 100%;
    max-width: 228px;
    height: auto;
    margin: 0 auto;
  }

  /* Statistics Section */
  .stats-section {
    background-color: #EBEBEB;
  }

  .stats-content {
    position: relative;
    padding: 3rem 2rem;
    border: 2px solid #2B302D;
    margin-bottom: 2rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    text-align: center;
  }

  .stat-item {
    padding: 2rem;
  }

  .stat-number {
    font-size: clamp(8rem, 20vw, 28.5rem);
    font-weight: 700;
    line-height: 1;
    color: #000;
  }

  .stat-label {
    font-size: clamp(2rem, 4vw, 4.9rem);
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 1rem;
  }

  .culpados-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-21deg);
    font-family: cursive;
    font-size: clamp(4rem, 12vw, 15rem);
    color: #FFCD00;
    font-style: italic;
    pointer-events: none;
    z-index: 1;
  }

  .stats-footer {
    background-color: #FFCD00;
    padding: 3rem 2rem;
    text-align: center;
    border: 2px solid #2B302D;
    border-top: none;
  }

  .stats-description {
    font-size: clamp(1rem, 1.5vw, 1.375rem);
    font-weight: 500;
    line-height: 1.5;
    text-transform: uppercase;
    margin: 0 0 2rem 0;
  }

  .btn-secondary {
    padding: 0.875rem 2rem;
    background-color: #0A1214;
    color: #EBEBEB;
    border: none;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1.5625rem;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
  }

  .btn-secondary:hover {
    background-color: #2B302D;
  }

  /* Jury Section */
  .jury-section {
    background-color: #EBEBEB;
  }

  .jury-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .jury-card {
    background-color: #fff;
    border: 2px solid #000;
    overflow: hidden;
  }

  .jury-image {
    position: relative;
    width: 100%;
    aspect-ratio: 327/397;
    border-top: 8px solid;
    overflow: hidden;
  }

  .jury-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .jury-category {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .jury-info {
    padding: 1.5rem;
    background-color: #fff;
    border-top: 2px solid #000;
  }

  .jury-role {
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 0.5rem 0;
  }

  .jury-name {
    font-size: 1.5625rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 0.5rem 0;
  }

  .jury-company {
    font-size: 1.25rem;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 0 1rem 0;
  }

  .btn-jury {
    width: 100%;
    padding: 0.75rem;
    background-color: #000;
    color: #fff;
    border: none;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.9375rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.593px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .btn-jury:hover {
    background-color: #2B302D;
  }

  /* Footer */
  .footer {
    background-color: #EBEBEB;
    padding: 4rem 2rem;
  }

  .footer-container {
    max-width: 1400px;
    margin: 0 auto;
  }

  .footer-section {
    padding: 2rem 0;
    border-bottom: 2px solid #2B302D;
  }

  .footer-section:last-of-type {
    border-bottom: none;
  }

  .footer-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .footer-section-title {
    font-size: clamp(1.25rem, 2vw, 1.75rem);
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 0.5px;
  }

  .footer-section-label {
    font-size: clamp(1rem, 1.5vw, 1.375rem);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .footer-logos {
    display: grid;
    gap: 3rem 2rem;
    align-items: center;
    justify-items: center;
  }

  .main-sponsors {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 4rem;
  }

  .official-partners {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  .creative-partners {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .collaborators {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  .supporters {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  .bottom-brands {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 2rem;
  }

  .footer-logo-lg {
    width: 100%;
    max-width: 200px;
    height: auto;
  }

  .footer-logo-placeholder {
    padding: 1.5rem 2rem;
    background-color: #fff;
    border: 2px solid #2B302D;
    text-align: center;
    font-weight: 700;
    font-size: 1.125rem;
    text-transform: uppercase;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .footer-social {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 3rem 0 1rem;
  }

  .social-link {
    color: #000;
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: opacity 0.3s;
    position: relative;
  }

  .social-link:hover {
    opacity: 0.7;
  }

  .social-link::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #000;
    transition: width 0.3s;
  }

  .social-link:hover::before {
    width: 100%;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .nav {
      padding: 1rem 2rem;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .nav-link {
      font-size: 1rem;
    }

    .section-header {
      padding: 1.5rem 2rem;
      flex-direction: column;
      align-items: flex-start;
    }

    .brands-grid {
      padding: 2rem;
      gap: 2rem;
    }

    .jury-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .nav {
      justify-content: center;
      padding: 1rem;
    }

    .nav-link {
      font-size: 0.875rem;
    }

    .hero {
      padding: 2rem 1rem;
    }

    .section-header {
      padding: 1rem;
    }

    .section-subtitle {
      letter-spacing: 5px;
    }

    .brands-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      padding: 1rem;
      gap: 1.5rem;
    }

    .stats-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .jury-grid {
      grid-template-columns: 1fr;
      padding: 1rem;
      gap: 2rem;
    }

    .stats-footer {
      padding: 2rem 1rem;
    }
  }

  @media (max-width: 480px) {
    .nav {
      gap: 0.5rem;
    }

    .nav-link {
      font-size: 0.75rem;
      padding: 0.25rem;
    }

    .hero-year {
      gap: 1rem;
    }

    .cta-button {
      font-size: 1.5rem;
      padding: 0.75rem 1.5rem;
    }
  }
</style>
