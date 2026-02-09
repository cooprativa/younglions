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
      }
  }

  // Listen for hash changes
  if (typeof window !== 'undefined') {
    handleRoute();
    window.addEventListener('hashchange', handleRoute);
  }
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
      {#each Array(5) as _, i}
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/7c2fefae1806b84f25649475425a50c858873ab4?width=456" alt="Betclic Logo" class="brand-logo" />
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
      <h2 class="section-title-large">o JÚRI</h2>
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
                        <img src="/footerimagens/mop.png" alt="MOP" class="f-img" />
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
                    <div class="f-imgs-row gap-large">
                        <img src="/footerimagens/belissimo.png" alt="Bellissimo" class="f-img" />
                        <img src="/footerimagens/nos.png" alt="NOS" class="f-img" />
                        <img src="/footerimagens/worten.png" alt="Worten" class="f-img" />
                    </div>
                </div>
            </div>

            <div class="footer-row row-3">
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

            <div class="footer-row row-4">
                <div class="f-col">
                    <span class="f-label">CAMPANHA</span>
                    <img src="/footerimagens/fernando.png" alt="Campanha" class="f-img2 start" />
                </div>
                <div class="f-col">
                    <span class="f-label">AGÊNCIA MEDIA</span>
                    <img src="/footerimagens/ipgmediabrands.png" alt="IPG" class="f-img2 start ipg-logo" />
                </div>
                <div class="f-col">
                    <span class="f-label">AGÊNCIA RP</span>
                    <img src="/footerimagens/centraldeinformacao.png" alt="Central" class="f-img2 start" />
                </div>
                <div class="f-col">
                    <span class="f-label">PRODUTORA OFICIAL</span>
                    <img src="/footerimagens/78films.png" alt="Film Brokers" class="f-img2 start" />
                </div>
                <div class="f-col right-align">
                    <span class="f-label">PARCEIRO EM ANALÍTICA E ESTUDOS DE MERCADO</span>
                    <div class="f-imgs-row">
                        <img src="/footerimagens/carma.png" alt="Carma" class="f-img2" />
                        <img src="/footerimagens/newssearch.png" alt="NewsSearch" class="f-img2" />
                    </div>
                </div>
            </div>

            <div class="footer-row row-5">
                <div class="f-group-left narrow">
                    <span class="f-label">AGÊNCIA ATIVAÇÃO</span>
                    <img src="/footerimagens/29graus.png" alt="29 Graus" class="f-img" />
                </div>

                <div class="f-group-center">
                    <span class="f-label">PARCEIROS MEDIA</span>
                    <div class="f-imgs-row gap-medium">
                        <img src="/footerimagens/+m.png" alt="M80" class="f-img" />
                        <img src="/footerimagens/mop2.png" alt="MOP" class="f-img" />
                        <img src="/footerimagens/publico.png" alt="Publico" class="f-img" />
                        <img src="/footerimagens/rtp.png" alt="RTP" class="f-img" />
                    </div>
                </div>

                <div class="f-group-right narrow">
                    <span class="f-label text-right">APOIO</span>
                    <img src="/footerimagens/sagres.png" alt="Sagres" class="f-img" />
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    padding: 2rem 4rem;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
  }

  .brand-logo {
    width: 100%;
    max-width: 228px;
    height: auto;
    margin: 0 auto;
  }

  .section-subtitle {
    font-family: 'IBM Plex Mono', monospace;
    font-size: clamp(1.25rem, 2.5vw, 2.125rem);
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 13.6px;
    margin: 0;
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

  /* Jury Coming Soon */
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

  /* Footer */
  .footer {
    background-color: #FFCD00;
    padding: 2rem 2rem 3rem;
  }

  /* --- CSS DO NOVO FOOTER CORRIGIDO E AJUSTADO --- */

  .footer-rows-container {
      max-width: 1400px;
      margin: 0 auto;
      background-color: transparent;
      border: none;
      font-family: 'IBM Plex Mono', monospace;
  }

  /* Estilo Base para cada Linha */
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

  /* --- LABELS E TEXTOS --- */
  .f-label {
      font-size: 1rem;
      font-weight: 700;
      color: #000;
      margin-bottom: 1rem;
      display: block;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      line-height: 1.2;
  }

  .text-right {
      text-align: right;
      width: 100%;
  }

  /* --- IMAGENS GERAIS --- */
  .f-img {
      height: 40px;
      width: auto;
      object-fit: contain;
      display: block;
  }

  .f-img.big-logo {
      height: 50px;
  }

  /* --- IMAGENS PEQUENAS (LINHA 4) --- */
  /* Corrigido: classe isolada e tamanho reduzido para 30px */
  .f-img2 {
      height: 30px; /* Reduzido para dar espaço */
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

  .f-imgs-row.gap-large { gap: 3rem; }
  .f-imgs-row.gap-medium { gap: 2rem; }


  /* --- GRUPOS DE POSICIONAMENTO --- */
  .f-group-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
  }

  .f-group-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
  }

  /* --- REGRAS ESPECÍFICAS POR LINHA --- */

  .row-1, .row-2 {
      align-items: flex-end;
  }

  .row-3 {
      flex-direction: column;
      align-items: flex-start;
  }

  /* Linha 4: Grid com 5 colunas */
  .row-4 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1.5fr;
      gap: 1rem;
      align-items: start;
  }

  .f-col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
  }

  .f-col.right-align {
      align-items: flex-end;
      text-align: right;
  }

  /* Garante que na direita as imagens ficam lado a lado e encostadas à direita */
  .f-col.right-align .f-imgs-row {
      justify-content: flex-end;
  }

  /* --- LINHA 5: AJUSTES PARA ESQUERDA --- */
  .row-5 {
      display: flex;
      /* Altera o justify para start para podermos controlar a posição manualmente */
      justify-content: flex-start;
      align-items: flex-end;
      gap: 4rem; /* Dá espaço entre o grupo da esquerda e o do meio */
  }

  /* O grupo do meio (Parceiros Media) agora alinha à esquerda */
  .f-group-center {
      display: flex;
      flex-direction: column;
      align-items: flex-start; /* Alinha à esquerda */
      padding: 0; /* Remove padding antigo */
  }

  /* Força o grupo da direita (Apoio) a ir para o extremo direito */
  .f-group-right.narrow {
      margin-left: auto; /* Isto empurra este elemento sozinho para a direita */
      flex: 0 0 auto;
  }

  .f-group-left.narrow {
      flex: 0 0 auto;
  }

  /* Ajuste específico para o IPG */
  .ipg-logo {
      height: 22px; /* Era 30px, reduz para 22px ou 20px conforme o gosto */
  }


  /* --- RESPONSIVO (MOBILE) --- */
  @media (max-width: 1024px) {
      .footer-row {
          flex-direction: column;
          align-items: flex-start;
          gap: 2rem;
      }

      .row-4 {
          display: flex;
          flex-direction: column;
      }

      .row-5 {
          gap: 2rem; /* Reduz gap no mobile */
      }

      .f-group-right,
      .f-col.right-align,
      .text-right,
      .f-col.right-align .f-imgs-row,
      .f-group-right.narrow {
          align-items: flex-start;
          justify-content: flex-start;
          text-align: left;
          margin-left: 0; /* Remove o auto margin no mobile */
      }
  }

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

    .section-header {
      padding: 1.5rem 2rem;
      flex-direction: column;
      align-items: flex-start;
    }

    .brands-grid {
      padding: 2rem;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {

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
