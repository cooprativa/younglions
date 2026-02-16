<script>
  import Nav from './lib/Nav.svelte';
  import Inscricao from './lib/Inscricao.svelte';
  import Sobre from './lib/Sobre.svelte';
  import RogerHatchuel from './lib/RogerHatchuel.svelte';
  import Historia from './lib/Historia.svelte';

  let currentPage = 'home';

  // Check URL hash for routing
  function handleRoute() {
      const hash = window.location.hash.slice(1);

      if (hash === 'inscricao' || hash === 'inscrever') {
          currentPage = 'inscricao';
      } else if (hash === 'sobre') {
          currentPage = 'sobre';
      } else if (hash === 'roger' || hash === 'rogerhatchuel') {
          currentPage = 'roger';
      } else if (hash === 'historia') {
          currentPage = 'historia';
      } else {
          currentPage = 'home';

          if (hash === 'juri') {
              // setTimeout(..., 100) dá tempo ao navegador para renderizar o HTML da Home
              setTimeout(() => {
                  const element = document.getElementById('juri');
                  if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                  }
              }, 100);
          } else {
              // Se for só Home normal, vai para o topo
              window.scrollTo(0, 0);
          }
      }
  }

  // Listen for hash changes
  if (typeof window !== 'undefined') {
    handleRoute();
    window.addEventListener('hashchange', handleRoute);
  }

  if (typeof window !== 'undefined') {
      // Executar no load inicial
      onMount(() => {
          handleRoute();
      });
      window.addEventListener('hashchange', handleRoute);
  }

  import { onMount, tick } from 'svelte';

  let countdown = 'Carregando...';

  // Data alvo do countdown (exemplo aleatório: 09 de março de 2026, 23:59)
  const targetDate = new Date('2026-03-09T23:59:00');

  function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
          countdown = 'O prazo terminou!';
          return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countdown = `${days}d ${hours.toString().padStart(2, '0')}h ${minutes
          .toString()
          .padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  }

  let interval;

  onMount(() => {
      updateCountdown();
      interval = setInterval(updateCountdown, 1000);

      return () => clearInterval(interval);
  });

  const marcas = [
      {
          src: '/assets/img.png',
          alt: 'Marcas Cumplices'
      }
  ];
</script>

{#if currentPage === 'inscricao'}
  <Inscricao />
{:else if currentPage === 'sobre'}
  <Sobre />
{:else if currentPage === 'roger'}
  <RogerHatchuel />
{:else if currentPage === 'historia'}
    <Historia />
{:else}
<div class="app">
  <!-- Navigation -->
  <Nav />

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <img src="/svg/herocompleto.svg" alt="Young Lions 2026" class="hero-complete" />
    </div>

      <div class="hero-countdown">
          Inscreve-te até {countdown}
      </div>

    <a href="#inscricao" class="cta-tab">
      <img src="/assets/fundos/img.png" alt="" class="cta-tab-bg" />
      <span class="cta-tab-text">INSCREVE-TE</span>
    </a>
  </section>

  <!-- Partner Brands Section -->
  <section class="brands-section">
    <div class="section-header">
      <h2 class="section-title">MARCAS CÚMPLICES</h2>
      <p class="section-subtitle">PROCESSO:2026</p>
    </div>
      <div class="brands-grid">
          {#each marcas as marca, i}
              <img
                      src={marca.src}
                      alt={marca.alt}
                      class="brand-logo {i === 1 ? 'brand-group' : ''}"
              />
          {/each}
      </div>
  </section>

  <!-- Statistics Section -->
  <section class="stats-section">
    <div class="stats-svg-container">
      <img src="/svg/O nosso cadastro.svg" alt="O nosso cadastro - 220 participantes, 6 Ouro, 2 Prata, 8 Bronze" class="stats-svg" />
    </div>
    <div class="furos-container">
      <img src="/svg/furos.svg" alt="" class="furos-svg" />
    </div>
  </section>

  <!-- Jury Section -->
  <section class="jury-section" id="juri">
    <div class="section-header">
      <h2 class="section-title-large">O JÚRI</h2>
    </div>

    <div class="jury-coming-soon">
      <p class="coming-soon-text">EM BREVE SABEREMOS QUEM SÃO OS JURADOS</p>
    </div>

    <div class="footer-extra-container">
      <img src="/assets/fundos/Footerextra.png" alt="" class="footer-extra-img" />
    </div>
  </section>

    <footer class="footer">

        <div class="footer-rows-container">

            <div class="footer-row row-1">
                <div class="f-group-left">
                    <span class="f-label">ORGANIZAÇÃO</span>
                    <div class="f-imgs-row">
                        <img src="/footerimagens/mop.png" alt="MOP" class="f-img img1" />
                    </div>
                </div>
                <div class="f-group-right">
                    <span class="f-label text-right">NAMING SPONSOR</span>
                    <img src="/footerimagens/betclic.png" alt="Betclic" class="f-img big-logo" />
                </div>
            </div>

            <div class="footer-row row-2">
                <div class="f-group-left">
                    <span class="f-label">APOIO INSTITUCIONAL</span>
                    <img src="/footerimagens/turismoportugal.png" alt="Turismo de Portugal" class="f-img" />
                </div>
                <div class="f-group-right">
                    <span class="f-label text-right">PATROCINADORES</span>
                    <img src="/footerimagens/patrocinadores.png" alt="Patrocinadores" class="f-img single-logo" />
                </div>
            </div>

            <div class="footer-row row-3">
                <div class="f-group-left partners-left">
                    <span class="f-label">PARCEIROS INSTITUCIONAIS</span>
                    <div class="f-imgs-row gap-medium">
                        <img src="/footerimagens/apame.png" alt="Apeme" class="f-img" />
                        <img src="/footerimagens/apan2.png" alt="Apan" class="f-img" />
                        <img src="/footerimagens/apap.png" alt="APAP" class="f-img" />
                        <img src="/footerimagens/apce.png" alt="APCE" class="f-img" />
                        <img src="/footerimagens/apecom.png" alt="Apecom" class="f-img" />
                        <img src="/footerimagens/ccp.png" alt="Clube Criatividade" class="f-img" />
                    </div>
                </div>

                <div class="f-group-right bootcamp-right">
                    <span class="f-label">Bootcamp Host</span>
                    <img src="/footerimagens/IADE.png" alt="IADE" class="f-img" />
                </div>
            </div>

            <div class="footer-row row-4">
                <div class="f-col">
                    <span class="f-label">CAMPANHA</span>
                    <img src="/footerimagens/fernando.png" alt="Campanha" class="f-img2 start" />
                </div>

                <div class="f-col">
                    <span class="f-label">AGÊNCIA MEDIA</span>
                    <img src="/footerimagens/OMNICOM.png" alt="OMNICOM" class="f-img2 start small-logo" />
                </div>

                <div class="f-col">
                    <span class="f-label">AGÊNCIA RP</span>
                    <img src="/footerimagens/centraldeinformacao.png" alt="Central" class="f-img2 start" />
                </div>

                <div class="f-col">
                    <span class="f-label">PRODUTORA OFICIAL</span>
                    <img src="/footerimagens/ProdutoraOficial.png" alt="Film Brokers" class="f-img2 start produtora" />
                </div>

                <div class="f-col right-align">
                    <span class="f-label text-right">PARCEIRO WEB</span>
                    <img src="/footerimagens/cooprativa.png" alt="Cooprativa" class="f-img2 end" />
                </div>
            </div>

            <div class="footer-row row-5">
                <div class="f-group-left">
                    <span class="f-label">PARCEIRO EM ANALÍTICA E ESTUDOS DE MERCADO</span>
                    <div class="f-imgs-row">
                        <img src="/footerimagens/carma.png" alt="Carma" class="f-img2" />
                        <img src="/footerimagens/newssearch.png" alt="NewsSearch" class="f-img2" />
                    </div>
                </div>

                <div class="f-group-right force-right">
                    <span class="f-label text-right">PARCEIROS MEDIA</span>
                    <div class="f-imgs-row gap-medium right-aligned-imgs">
                        <img src="/footerimagens/+m.png" alt="M80" class="f-img2" />
                        <img src="/footerimagens/mop2.png" alt="MOP" class="f-img2" />
                        <img src="/footerimagens/publico.png" alt="Publico" class="f-img2" />
                        <img src="/footerimagens/RFM.png" alt="RFM" class="f-img2" />
                        <img src="/footerimagens/rtp.png" alt="RTP" class="f-img2" />
                    </div>
                </div>
            </div>

        </div>

        <div class="footer-social">
            <a href="https://www.facebook.com/YoungLionsPortugal/?locale=pt_PT" target="_blank" class="social-link">FACEBOOK</a>
            <a href="https://www.instagram.com/younglionspt/" target="_blank" class="social-link">INSTAGRAM</a>
            <a href="https://www.linkedin.com/company/younglionsportugal/?originalSubdomain=pt" target="_blank" class="social-link">LINKEDIN</a>
            <a href="https://www.tiktok.com/@younglionsportugal" target="_blank" class="social-link">TIKTOK</a>
            <a href="https://www.canneslions.com/" target="_blank" class="social-link">CANNES LIONS</a>
        </div>
    </footer>

  <!-- Bottom Furos Section -->
  <section class="furos-bottom-section">
    <div class="furos-container">
      <img src="/svg/furos.svg" alt="" class="furos-svg" />
    </div>
  </section>
</div>
{/if}

<style>
    :global(*) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :global(html, body) {
        margin: 0;
        padding: 0;
        width: 100%;
        overflow-x: hidden;
        background-color: #FFCD00;
        font-family: 'IBM Plex Mono', monospace;
    }

    .app {
        min-height: 100vh;
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
    }

    /* Hero Section */
    .hero {
        width: 100%;
        padding: 6rem 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #FFCD00;
        overflow: hidden;
    }

    .hero-content {
        width: 100%;
        max-width: 900px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;
        margin-bottom: 6rem;
    }

    .hero-complete {
        width: 100%;
        height: auto;
        display: block;
    }

    /* CTA Tab - Aba de transição */
    .cta-tab {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 350px;
        text-decoration: none;
        cursor: pointer;
        transition: transform 0.3s;
        align-self: flex-end;
        margin-right: 5%;
        margin-bottom: -25px;
        z-index: 10;
    }

    .cta-tab:hover {
        transform: scale(1.02);
    }

    .cta-tab-bg {
        width: 100%;
        height: auto;
        display: block;
    }

    .cta-tab-text {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #000;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1.25rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        white-space: nowrap;
    }

    /* Statistics Section */
    .stats-section {
        background-color: #EBEBEB;
        padding: 4rem 3rem;
        width: 100%;
        position: relative;
    }

    .stats-svg-container {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .stats-svg {
        width: 100%;
        height: auto;
        display: block;
    }

    /* Furos Container */
    .furos-container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 4rem;
    }

    .furos-svg {
        width: 100%;
        height: auto;
        display: block;
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

    /* Brands Section */
    .brands-section {
        background-color: #EBEBEB;
        width: 100%;
        padding: 4rem 2rem;
    }

    .brands-section .section-header {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
    }

    .brands-grid {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 4rem;
        max-width: 1400px;
        margin: 0 auto;
    }

    .brand-logo {
        width: 100%;
        max-width: 1200px;
        height: auto;
        display: block;
    }

    .section-subtitle {
        font-family: 'IBM Plex Mono', monospace;
        font-size: clamp(1.25rem, 2.5vw, 2.125rem);
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 13.6px;
        margin: 0;
    }

    .hero-countdown {
        margin-top: -1.5rem;
        margin-bottom: 5rem;
        font-family: 'Aber Mono', monospace;
        font-weight: 700;
        font-size: 2rem;
        color: #ffffff;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    /* Jury Section */
    .jury-section {
        background-color: #EBEBEB;
        padding: 4rem 2rem;
    }

    .jury-section .section-header {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
    }

    .jury-coming-soon {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4rem 2rem;
    }

    .coming-soon-text {
        font-family: 'IBM Plex Mono', monospace;
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 2px;
        color: #000;
    }

    /* Footer Extra Image */
    .footer-extra-container {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 2rem 0 0 0;
        margin-top: 2rem;
        margin-bottom: -95px;
        margin-left: -150px;
    }

    .footer-extra-img {
        width: 100%;
        max-width: 400px;
        height: auto;
        display: block;
    }

    /* Footer Main Styles */
    .footer {
        background-color: #FFCD00;
        padding: 2rem 2rem 3rem;
    }

    .footer-rows-container {
        max-width: 1400px;
        margin: 0 auto;
        background-color: transparent;
        border: none;
        font-family: 'IBM Plex Mono', monospace;
    }

    .footer-row {
        width: 100%;
        border: 2px solid #000;
        margin-bottom: 1.5rem;
        background-color: transparent;
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .footer-row:last-child {
        margin-bottom: 0;
        border-bottom: 2px solid #000;
    }

    .f-label {
        font-size: 1rem;
        font-weight: 700;
        color: #000;
        margin-bottom: 2rem;
        display: block;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        line-height: 1.2;
    }

    .text-right {
        text-align: right;
        width: 100%;
    }

    .f-img {
        height: 40px;
        width: auto;
        object-fit: contain;
        display: block;
    }

    .f-img.big-logo {
        height: 50px;
    }

    .f-img2 {
        height: 30px;
        width: auto;
        object-fit: contain;
        display: block;
    }

    .f-imgs-row {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        flex-wrap: wrap;
    }

    .f-img.single-logo {
        width: 70%;
        max-width: 700px;
        height: auto;
        object-fit: contain;
        display: block;
        margin-top: 1rem;
    }

    .f-imgs-row.gap-medium { gap: 2rem; }

    /* Footer Groups */
    .f-group-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }

    .f-group-left img[alt="MOP"] {
        height: 60px;
        width: auto;
    }

    .f-group-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
    }

    /* Specific Row Adjustments */
    .row-2 .f-group-left .f-label {
        display: block;
        margin-top: 0;
        line-height: 1.2;
        padding-top: 0;
        margin-bottom: 4.5rem;
    }

    .row-1, .row-2 {
        align-items: flex-end;
    }

    .row-3 {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .partners-left {
        max-width: 100%;
    }

    .partners-left .f-img {
        transform: scale(0.8);
        transform-origin: left center;
    }

    .bootcamp-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        gap: 2rem;
    }

    .bootcamp-right .f-label {
        margin: 0;
    }

    /* --- NOVA LINHA 4 (Grid 5 colunas) --- */
    .row-4 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr; /* 5 colunas iguais */
        gap: 1rem;
        align-items: start;
    }

    .f-col {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    /* Coluna da Cooprativa (direita) */
    .f-col.right-align {
        align-items: flex-end;
        text-align: right;
    }

    /* Garante que a imagem Cooprativa encosta à direita */
    .f-img2.end { align-self: flex-end; height: 40px;}

    .produtora {
        height: 40px;
        width: 150px;
    }

    /* Ajuste OMNICOM */
    .small-logo {
        height: 20px !important;
        width: auto;
    }

    /* --- NOVA LINHA 5 (Flex Space-Between) --- */
    .row-5 {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 2rem;
    }

    /* Grupo da direita colado ao extremo direito */
    .force-right {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
    }

    .right-aligned-imgs {
        justify-content: flex-end;
    }

    /* Footer Social */
    .footer-social {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 3rem 4rem 1rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .social-link {
        color: #000;
        text-decoration: none;
        font-family: 'IBM Plex Mono', monospace;
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

    /* Furos Bottom Section */
    .furos-bottom-section {
        background-color: #EBEBEB;
        padding: 0rem 0;
        width: 100%;
    }

    .furos-bottom-section .furos-container {
        max-width: 800px;
        padding: 2rem 4rem;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {


        .brands-section {
            padding-bottom: 1rem; /* Era 4rem */
        }

        /* 2. Reduzir padding da secção Estatísticas */
        .stats-section {
            padding: 1rem 1.5rem; /* Reduzido de 4rem para 1rem */
        }

        /* 3. Colar os furos à imagem das estatísticas */
        .stats-section .furos-container {
            padding-top: 3rem;
            padding-bottom: 0rem;
            margin-bottom: -25px;
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

        /* Footer Mobile Adjustments */
        .footer-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
        }

        /* Transforma a grid da linha 4 em coluna única */
        .row-4 {
            display: flex;
            flex-direction: column;
        }

        .row-5 {
            flex-direction: column;
            align-items: flex-start;
        }

        /* Reseta alinhamentos à direita para a esquerda no mobile */
        .f-group-right,
        .f-col.right-align,
        .text-right,
        .force-right,
        .right-aligned-imgs {
            align-items: flex-start !important;
            justify-content: flex-start !important;
            text-align: left !important;
            margin-left: 0;
        }

        .f-img2.end {
            align-self: flex-start;
        }
    }

    @media (max-width: 768px) {

        .f-group-left img[alt="MOP"] {
            height: 40px; /* Estava a 60px no desktop */
        }


        .hero-content {
            margin-bottom: 3rem;
        }

        .cta-tab {
            max-width: 280px;
            margin-right: 3%;
            margin-bottom: -30px;
        }

        .cta-tab-text {
            font-size: 1.1rem;
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

        .footer-social {
            gap: 1.5rem;
            justify-content: center;
            padding: 2rem 2rem 1rem;
        }

        .social-link {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {

        .cta-tab-text {
            font-size: 0.9rem;
            letter-spacing: 1px;

            /* ADICIONA ISTO: */
            top: calc(45% - 2px); /* Sobe exatamente 2px em relação à posição original */
        }

        .hero {
            padding: 2rem 0 0 0;
        }

        .hero-content {
            margin-bottom: 2rem;
        }

        .cta-tab {
            max-width: 220px;
            margin-right: 2%;
            margin-bottom: -25px;
        }

        .cta-tab-text {
            font-size: 0.9rem;
            letter-spacing: 1px;
        }

        .footer {
            padding: 2rem 1rem;
        }

        .footer-social {
            gap: 1rem;
            padding: 2rem 1rem 1rem;
        }

        .social-link {
            font-size: 0.875rem;
        }
    }
</style>
