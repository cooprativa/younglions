<script>
  import NavSobre from './NavSobre.svelte';
  import NavVencedores from "./NavVencedores.svelte";
</script>

<div class="sobre-page">
  <!-- Navigation -->
  <NavVencedores />

  <!-- Hero Section -->
  <section class="hero-sobre">
    <!-- Logo no canto superior esquerdo -->
    <div class="hero-logo">
      <img src="/assets/paginscricao/logoinscricao.png" alt="Young Lions Logo" class="logo-img" />
    </div>

    <!-- Pasta com texto VENCEDORES no centro -->
    <div class="hero-center">
      <div class="pasta-container">
        <img src="/assets/pasta.png" alt="" class="pasta-img" />
        <span class="pasta-texto">VENCEDORES</span>
      </div>
    </div>

    <!-- Culpado - Canto inferior direito -->
    <div class="hero-culpado">
      <img src="/svg/paginscricao/culpadoinscricao.svg" alt="Se Culpado" class="culpado-img" />
    </div>

    <!-- Furos no fim do hero -->
    <div class="hero-furos">
      <img src="/svg/furossobre.svg" alt="" class="furos-sobre-svg" />
    </div>
  </section>

  <!-- Secção Vencedores Culpados -->
    <section class="vencedores-conteudo">
      <img src="/svg/vencedoresculpados.svg" alt="Vencedores Culpados" class="vencedores-culpados-svg" />
      <object data="/svg/vencedores/imprensa.svg" type="image/svg+xml" aria-label="Vencedores" class="vencedores-img"></object>
        <object data="/svg/vencedores/filme.svg" type="image/svg+xml" aria-label="Vencedores" class="vencedores-img"></object>
        <object data="/svg/vencedores/digital.svg" type="image/svg+xml" aria-label="Vencedores" class="vencedores-img"></object>
        <object data="/svg/vencedores/design.svg" type="image/svg+xml" aria-label="Vencedores" class="vencedores-img"></object>
        <object data="/svg/vencedores/media.svg" type="image/svg+xml" aria-label="Vencedores" class="vencedores-img"></object>
        <object data="/svg/vencedores/pr.svg" type="image/svg+xml" aria-label="Vencedores" class="vencedores-img"></object>
        <object data="/svg/vencedores/marketing.svg" type="image/svg+xml" aria-label="Vencedores" class="vencedores-img"></object>
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

            <div class="footer-group-right bootcamp-right">
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
                    <img src="/footerimagens/RFM.png" alt="RFM" class="f-img2 rfm" />
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

<style>
  @font-face {
    font-family: 'Aber Mono';
    src: url('../fonts/Aber-Mono-Bold.woff2') format('woff2'),
      url('../fonts/Aber-Mono-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  .sobre-page {
    width: 100%;
    min-height: 100vh;
    background-color: #9562e5;
    overflow-x: hidden;
  }

  .hero-sobre {
    width: 100%;
    min-height: 80vh;
    padding: 4rem 3rem 10rem;
    background-color: #9562e5;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-logo {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }

  .logo-img {
    width: 100%;
    max-width: 280px;
    height: auto;
    display: block;
  }

  .hero-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pasta-container {
    margin-top: 50px;
    margin-bottom: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pasta-img {
    width: 100%;
    max-width: 600px;
    height: auto;
    display: block;
  }

  .pasta-texto {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Aber Mono', monospace;
    font-size: 12rem;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  .hero-culpado {
    position: absolute;
    bottom: 8rem;
    right: 3px;
  }

  .culpado-img {
    width: 100%;
    max-width: 360px;
    height: auto;
  }

  .hero-furos {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
  }

  .furos-sobre-svg {
    width: 100%;
    max-width: 1000px;
    height: auto;
    display: block;
    margin-bottom: 50px;
  }

  .vencedores-conteudo {
    width: 100%;
    background-color: #fff;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  .vencedores-culpados-svg {
    width: 100%;
    max-width: 1100px;
    height: auto;
    display: block;
  }

  .vencedores-img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* Furos Bottom Section */
  .furos-bottom-section {
    background-color: #EBEBEB;
    padding: 0rem 0;
    width: 100%;
  }

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

  /* --- FOOTER --- */
  .footer {
    background-color: #9562e5; /* Roxo para a página Vencedores */
    padding: 2rem 2rem 3rem;
    position: relative;
    font-family: 'IBM Plex Mono', monospace;
  }

  .footer-rows-container {
    max-width: 1400px;
    margin: 0 auto;
    background-color: transparent;
    border: none;
  }

  /* Estilo Base da Linha */
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

  /* Labels */
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

  /* Imagens Gerais */
  .f-img {
    height: 40px;
    width: auto;
    object-fit: contain;
    display: block;
  }

  .f-img.big-logo { height: 50px; }

  /* Imagens Pequenas (Row 4 e 5) */
  .f-img2 {
    height: 30px;
    width: auto;
    object-fit: contain;
    display: block;
  }

  .small-logo {
    height: 20px !important;
    width: auto;
  }

  .f-img.single-logo {
    width: 70%;
    max-width: 700px;
    height: auto;
    object-fit: contain;
    display: block;
    margin-top: 1rem;
  }

  .f-imgs-row {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .f-imgs-row.gap-medium { gap: 2rem; }

  /* Grupos */
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

  .f-group-right, .bootcamp-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
  }

  /* Regras Específicas Row 1, 2, 3 */
  .row-2 .f-group-left .f-label {
    display: block;
    margin-top: 0;
    line-height: 1.2;
    padding-top: 0;
    margin-bottom: 4.5rem;
  }

  .row-1, .row-2 { align-items: flex-end; }

  .row-3 {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .partners-left { max-width: 100%; }
  .partners-left .f-img {
    transform: scale(0.8);
    transform-origin: left center;
  }

  .bootcamp-right { gap: 2rem; }
  .bootcamp-right .f-label { margin: 0; }

  /* --- ROW 4: GRID 5 COLUNAS --- */
  .row-4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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

  .f-img2.end { align-self: flex-end; height: 40px;}

  .produtora {
    height: 40px;
    width: 150px;
  }

  .f-img2.rfm {
    height: 55px;
  }

  /* --- ROW 5: Flex Space Between --- */
  .row-5 {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
  }

  .force-right {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
  }

  .right-aligned-imgs { justify-content: flex-end; }

  /* Redes Sociais */
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

  .social-link:hover { opacity: 0.7; }

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
  .social-link:hover::before { width: 100%; }

  @media (max-width: 1024px) {
    .pasta-texto {
      font-size: 4rem;
      letter-spacing: 8px;
    }

    .pasta-img {
      max-width: 500px;
    }

    .culpado-img {
      max-width: 300px;
    }

    .logo-img {
      max-width: 220px;
    }

    /* Footer Mobile Adjustments */
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
      flex-direction: column;
      align-items: flex-start;
    }

    /* Reset right alignments to left */
    .f-group-right,
    .bootcamp-right,
    .f-col.right-align,
    .text-right,
    .force-right,
    .right-aligned-imgs {
      align-items: flex-start !important;
      justify-content: flex-start !important;
      text-align: left !important;
      margin-left: 0;
    }
    .f-img2.end { align-self: flex-start; }
  }

  @media (max-width: 768px) {
    .pasta-container {
      margin-top: 6rem;
    }

    .hero-sobre {
      min-height: 70vh;
      padding: 2rem;
    }

    .hero-logo {
      top: 1.5rem;
      left: 1.5rem;
    }

    .logo-img {
      max-width: 160px;
    }

    .pasta-texto {
      font-size: 3rem;
      letter-spacing: 5px;
    }

    .pasta-img {
      max-width: 210px;
    }

    .hero-culpado {
      bottom: 1.5rem;
      right: 1.5rem;
    }

    .culpado-img {
      max-width: 220px;
    }

    .furos-sobre-svg {
      margin-bottom: 10px;
    }

    .f-group-left img[alt="MOP"] {
      height: 40px;
    }

    .footer-social {
      gap: 1.5rem;
      justify-content: center;
      padding: 2rem 2rem 1rem;
    }
    .social-link { font-size: 1rem; }
  }

  @media (max-width: 480px) {
    .hero-sobre {
      min-height: 60vh;
      padding: 1.5rem;
    }

    .hero-logo {
      top: 1rem;
      left: 1rem;
    }

    .logo-img {
      max-width: 120px;
    }

    .pasta-texto {
      font-size: 3rem;
    }

    .pasta-img {
      max-width: 210px;
    }

    .hero-culpado {
      bottom: 1rem;
      right: 1rem;
    }

    .culpado-img {
      max-width: 160px;
    }

    .hero-furos {
      bottom: -15px;
    }

    .furos-sobre-svg {
      margin-bottom: 0px;
    }

    .footer { padding: 2rem 1rem; }
    .footer-social {
      gap: 1rem;
      padding: 2rem 1rem 1rem;
    }
    .social-link { font-size: 0.875rem; }
  }
</style>
