<script>
  import NavSobre from './NavSobre.svelte';
</script>

<div class="sobre-page">
  <!-- Navigation -->
    <NavSobre />

  <!-- Hero Section -->
  <section class="hero-sobre">
    <!-- Logo no canto superior esquerdo -->
    <div class="hero-logo">
      <img src="/assets/paginscricao/logoinscricao.png" alt="Young Lions Logo" class="logo-img" />
    </div>

    <!-- Pasta com texto SOBRE no centro -->
    <div class="hero-center">
      <div class="pasta-container">
        <img src="/assets/pasta.png" alt="" class="pasta-img" />
        <span class="pasta-texto">SOBRE</span>
      </div>
    </div>

    <!-- Culpado - Canto inferior direito -->
    <div class="hero-culpado">
      <img src="/svg/paginscricao/culpadoinscricao.svg" alt="Sê Culpado" class="culpado-img" />
    </div>

    <!-- Furos no fim do hero -->
    <div class="hero-furos">
      <img src="/svg/furossobre.svg" alt="" class="furos-sobre-svg" />
    </div>
  </section>

  <!-- Secção Medalha e Texto -->
  <section class="medalha-section">
    <div class="medalha-container">
      <div class="medalha-imagem">
        <img src="/assets/medalhacor.jpg" alt="Medalha Young Lions" class="medalha-img" />
      </div>
      <div class="medalha-texto">
        <div class="aspas-container">
          <img src="/svg/aspas.svg" alt="" class="aspas-svg" />
          <p class="texto-descricao">
            AS COMPETIÇÕES YOUNG LIONS, FAZEM PARTE DA SECÇÃO YOUNG DO FESTIVAL DE CRIATIVIDADE CANNES LIONS, CUJA PRIMEIRA EDIÇÃO TEVE LUGAR EM 1995. TÊM COMO MISSÃO ESTIMULAR, INSPIRAR E PROMOVER AS NOVAS GERAÇÕES DE PROFISSIONAIS DA INDÚSTRIA CRIATIVA MUNDIAL ATÉ 30 ANOS. SÃO COMPOSTAS POR SETE CATEGORIAS: IMPRENSA/OUTDOOR, DIGITAL, FILME, MEDIA, MARKETING, DESIGN E RELAÇÕES PÚBLICAS.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Secção 30 Anos -->
  <section class="anos-section">
    <div class="anos-container">
      <div class="anos-row primeira-linha">
        <span class="anos-text">30</span>
        <span class="anos-text">ANOS</span>
        <span class="anos-text">DE</span>
      </div>
      <div class="anos-row segunda-linha">
        <span class="anos-text">YOUNG</span>
        <div class="young-lion-wrapper">
          <img src="/assets/young lion.png" alt="Young Lion" class="young-lion-inline" />
        </div>
        <span class="anos-text">LIONS</span>
      </div>
      <div class="anos-row terceira-linha">
        <span class="anos-text">PORTUGAL</span>
        <div class="portugal-mini-container">
          <p class="portugal-mini">PORTUGAL PARTICIPA DESDE 1996 E TEM<br/>UM NOTÁVEL PALMARÉS: ESTAMOS NO TOP 3<br/>DOS PAÍSES MAIS PREMIADOS DO MUNDO</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Secção Tribunal Criativo -->
  <section class="tribunal-section">
    <div class="tribunal-container">
      <div class="tribunal-texto">
        <h2 class="tribunal-titulo">NESTE TRIBUNAL CRIATIVO,<br/>A CRIATIVIDADE É A LEI.</h2>
        <p class="tribunal-subtitulo">CONSULTA O NOSSO CÓDIGO DA CRIATIVIDADE!</p>
      </div>
      <div class="tribunal-botao-container">
          <a href="/assets/Codigo-da-criatividade.pdf" target="_blank" class="tribunal-link">
              <button class="tribunal-botao">CÓDIGO DA CRIATIVIDADE</button>
          </a>
      </div>
    </div>
  </section>

  <!-- Secção 220 Culpados -->
  <section class="culpados-section">
    <div class="culpados-container">
      <img src="/svg/220culpados.svg" alt="220 Culpados" class="culpados-svg" />
    </div>
    <div class="footer-extra-sobre-container">
      <img src="/assets/fundos/footerextrasobre.png" alt="" class="footer-extra-sobre-img" />
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
    /* --- FONTES --- */
    @font-face {
        font-family: 'Aber Mono';
        src: url('../fonts/Aber-Mono-Bold.woff2') format('woff2'),
        url('../fonts/Aber-Mono-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Aber Mono';
        src: url('../fonts/Aber-Mono-Regular.woff2') format('woff2'),
        url('../fonts/Aber-Mono-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Aber Mono';
        src: url('../fonts/Aber-Mono-Light.woff2') format('woff2'),
        url('../fonts/Aber-Mono-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }

    /* --- GERAL DA PÁGINA SOBRE --- */
    .sobre-page {
        width: 100%;
        min-height: 100vh;
        background-color: #ADB688;
        overflow-x: hidden;
    }

    /* Hero Section */
    .hero-sobre {
        width: 100%;
        min-height: 80vh;
        padding: 4rem 3rem 10rem;
        background-color: #ADB688;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Logo - Canto superior esquerdo */
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

    /* Centro - Pasta com texto */
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
        font-size: 15rem;
        font-weight: 700;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 10px;
    }

    /* Culpado - Canto inferior direito */
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

    /* Secção Medalha e Texto */
    .medalha-section {
        background-color: #fff;
        padding: 4rem 3rem;
        width: 100%;
    }

    .medalha-container {
        display: flex;
        border: 2px solid #2B302D;
        max-width: 1400px;
        margin: 0 auto;
    }

    .medalha-imagem {
        flex: 0 0 33.333%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .medalha-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .medalha-texto {
        flex: 0 0 66.666%;
        padding: 3rem;
        display: flex;
        align-items: center;
    }

    .aspas-container {
        position: relative;
        width: 100%;
        padding-left: 4rem;
    }

    .aspas-svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 700px;
        height: auto;
        pointer-events: none;
    }

    .texto-descricao {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.8;
        color: #333;
        text-transform: uppercase;
        letter-spacing: 0.3px;
        margin: 0;
        padding-top: 5rem;
        padding-bottom: 5rem;
        position: relative;
        z-index: 1;
    }

    /* Secção 30 Anos */
    .anos-section {
        background-color: #fff;
        padding: 4rem 3rem;
        width: 100%;
    }

    .anos-container {
        max-width: 1400px;
        margin: 0 auto;
    }

    .anos-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .anos-text {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10rem;
        font-weight: 800;
        color: #000;
        line-height: 1;
        text-transform: uppercase;
    }

    .primeira-linha { margin-bottom: 0; }
    .segunda-linha {
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0;
    }

    .young-lion-wrapper {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .young-lion-inline {
        width: 100px;
        height: auto;
    }

    .terceira-linha {
        justify-content: space-between;
        align-items: flex-end;
    }

    .portugal-mini-container {
        display: flex;
        align-items: flex-end;
        padding-bottom: 1.5rem;
        text-align: right;
    }

    .portugal-mini {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1.5rem;
        font-weight: 600;
        color: #333;
        line-height: 1.6;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin: 0;
        text-align: right;
    }

    /* Secção Tribunal Criativo */
    .tribunal-section {
        background-color: #fff;
        padding: 0 3rem 4rem;
        width: 100%;
    }

    .tribunal-container {
        display: flex;
        border: 2px solid #2B302D;
        max-width: 1400px;
        margin: 0 auto;
    }

    .tribunal-texto {
        flex: 0 0 57.14%;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-right: 2px solid #2B302D;
    }

    .tribunal-titulo {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 2.5rem;
        font-weight: 700;
        color: #000;
        line-height: 1.4;
        margin: 0 0 0.5rem 0;
        text-transform: uppercase;
    }

    .tribunal-subtitulo {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1.1rem;
        font-weight: 400;
        color: #333;
        margin: 0;
        text-transform: uppercase;
    }

    .tribunal-botao-container {
        flex: 0 0 42.86%;
        background-color: #ADB688;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3rem;
    }

    .tribunal-botao {
        background-color: #000;
        color: #fff;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        padding: 1rem 2rem;
        border: none;
        cursor: pointer;
        letter-spacing: 0.5px;
        transition: opacity 0.3s;
    }

    /* Secção 220 Culpados */
    .culpados-section {
        background-color: #fff;
        padding: 4rem 3rem;
        width: 100%;
        position: relative;
    }

    .culpados-container {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .culpados-svg {
        width: 100%;
        height: auto;
        display: block;
    }

    /* Footer Extra Image */
    .footer-extra-sobre-container {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 2rem 0 0 0;
        margin-top: 2rem;
        margin-bottom: -100px;
        margin-left: -150px;
    }

    .footer-extra-sobre-img {
        width: 100%;
        max-width: 400px;
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

    /* --- FOOTER ATUALIZADO (Versão Sobre) --- */
    .footer {
        background-color: #ADB688; /* Verde para a página Sobre */
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

    /* Ajuste específico para OMNICOM ficar menor */
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

    .f-group-right {
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

    .bootcamp-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        gap: 2rem;
    }
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

    /* Ajuste específico Produtora */
    .produtora {
        height: 40px;
        width: 150px;
    }

    .f-img2.rfm {
        height: 55px; /* Aumentado de 30px para 55px */
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

    /* --- RESPONSIVO --- */
    @media (max-width: 1024px) {
        /* Hero Adjustments */
        .pasta-texto {
            font-size: 4rem;
            letter-spacing: 8px;
        }
        .pasta-img { max-width: 500px; }
        .culpado-img { max-width: 300px; }
        .logo-img { max-width: 220px; }

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

        .f-group-left img[alt="MOP"] {
            height: 40px; /* Estava a 60px no desktop */
        }

        .pasta-container {
            margin-top: 6rem; /* Aumenta este valor se quiseres mais espaço */
        }
        .hero-sobre {
            min-height: 70vh;
            padding: 2rem;
        }
        .hero-logo {
            top: 1.5rem;
            left: 1.5rem;
        }
        .logo-img { max-width: 160px; }
        .pasta-texto {
            font-size: 3rem;
            letter-spacing: 5px;
        }
        .pasta-img { max-width: 210px; }
        .hero-culpado {
            bottom: 1.5rem;
            right: 1.5rem;
        }
        .culpado-img { max-width: 220px; }

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
        .logo-img { max-width: 120px; }
        .pasta-texto {
            font-size: 2rem;
            letter-spacing: 3px;
        }
        .pasta-img { max-width: 210px; }
        .hero-culpado {
            bottom: 1rem;
            right: 1rem;
        }
        .culpado-img { max-width: 160px; }

        .footer { padding: 2rem 1rem; }
        .footer-social {
            gap: 1rem;
            padding: 2rem 1rem 1rem;
        }
        .social-link { font-size: 0.875rem; }
    }
    @media (max-width: 768px) {

        /* Secção Medalha */
        .medalha-container {
            flex-direction: column; /* Empilha imagem e texto */
        }

        .medalha-imagem, .medalha-texto {
            flex: 0 0 100%;
        }

        .aspas-container {
            padding-left: 0; /* Remove padding lateral em mobile */
            padding-top: 2rem;
        }

        .aspas-svg {
            width: 150px; /* Reduz drasticamente o tamanho das aspas */
            top: -20px;
        }

        .texto-descricao {
            font-size: 0.9rem;
            padding-top: 2rem;
            padding-bottom: 2rem;
            line-height: 1.6;
        }

        /* Secção 30 Anos */
        .anos-text {
            font-size: 4rem; /* Reduz de 10rem para 4rem */
        }

        .anos-row {
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
        }

        .primeira-linha, .segunda-linha, .terceira-linha {
            margin-bottom: 1rem;
            text-align: center;
        }

        .young-lion-inline {
            width: 60px; /* Leão mais pequeno */
        }

        .terceira-linha {
            flex-direction: column;
            align-items: center;
        }

        .portugal-mini-container {
            text-align: center;
            padding-bottom: 0;
            margin-top: 1rem;
        }

        .portugal-mini {
            font-size: 1rem;
            text-align: center;
        }

        /* Secção Tribunal */
        .tribunal-container {
            flex-direction: column;
        }

        .tribunal-texto {
            border-right: none;
            border-bottom: 2px solid #2B302D;
            padding: 2rem;
        }

        .tribunal-titulo {
            font-size: 1.5rem;
        }

        .tribunal-botao-container {
            padding: 2rem;
        }

        /* Ajuste da imagem do rodapé que estava com margin negativa */
        .footer-extra-sobre-container {
            margin-left: 0;
            margin-bottom: -50px;
            justify-content: center;
        }

        .footer-extra-sobre-img {
            max-width: 0px;
        }
    }

    @media (max-width: 480px) {
        .anos-text {
            font-size: 2.5rem; /* Ainda mais pequeno para ecrãs mini */
        }

        .pasta-texto {
            font-size: 3rem; /* Ajuste no "SOBRE" dentro da pasta */
        }
    }
</style>

