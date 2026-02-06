<script>
  import NavInscricao from './NavInscricao.svelte';
</script>

<div class="inscricao-page">
  <!-- Navigation -->
  <NavInscricao />

  <!-- Hero Section -->
  <section class="hero-inscricao">
    <div class="hero-content">
      <div class="hero-left">
        <img src="/assets/paginscricao/logoinscricao.png" alt="Young Lions Logo" class="logo-inscricao" />
      </div>
      <div class="hero-right">
        <img src="/svg/paginscricao/culpadoinscricao.svg" alt="Sê Culpado" class="culpado-inscricao" />
      </div>
    </div>

    <div class="folhas-container">
      <img src="/svg/paginscricao/folhasjuntas.svg" alt="" class="folhas-juntas" />

      <!-- Título Inscrição na folha esquerda -->
      <div class="titulo-inscricao">
        <img src="/svg/paginscricao/Inscricaotitulo.svg" alt="Inscrição" class="titulo-svg" />
        <p class="titulo-subtexto">SÊ CULPADO DE<br />UMA GRANDE IDEIA</p>
        <p class="titulo-descricao">
          Escolhe o teu "partner in crime" e preenche o formulário de inscrição da dupla para os Betclic Young Lions Portugal 2026.
        </p>
        <p class="titulo-contacto">
          Em caso de dúvida, contacta-nos para <a href="mailto:younglionsportugal@mop.pt" class="email-link">younglionsportugal@mop.pt</a>
        </p>

        <!-- Passos -->
        <div class="passos-container">
          <div class="passo-box">
            <span class="passo-numero">1</span>
            <p class="passo-texto">Escolhe a tua dupla<br />e os vossos melhores trabalhos</p>
          </div>
          <div class="passo-box">
            <span class="passo-numero">2</span>
            <p class="passo-texto">Lê o regulamento e escolhe<br />as categorias em que querem participar</p>
          </div>
          <div class="passo-box">
            <span class="passo-numero">3</span>
            <p class="passo-texto">Envia a vossa inscrição<br />para ser avaliada por um júri</p>
          </div>
        </div>
      </div>

      <!-- Formulário de Inscrição -->
      <div class="form-overlay">
        <form class="inscricao-form">
          <!-- Categoria -->
          <div class="form-group">
            <label class="form-label" for="categoria">CATEGORIA DA TUA INSCRIÇÃO</label>
            <select id="categoria" class="form-select">
              <option value="" disabled selected>CATEGORIA</option>
              <option value="filme">Filme</option>
              <option value="imprensa">Imprensa/Outdoor</option>
              <option value="design">Design</option>
              <option value="digital">Digital</option>
              <option value="media">Media</option>
              <option value="pr">PR</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          <!-- Participante Nº1 -->
          <div class="form-section">
            <h3 class="section-title">PARTICIPANTE Nº1</h3>

            <div class="form-group">
              <input type="text" class="form-input" placeholder="NOME" />
            </div>

            <div class="form-row">
              <div class="form-group">
                <input type="date" class="form-input" placeholder="DATA DE NASCIMENTO" />
              </div>
              <div class="form-group">
                <input type="email" class="form-input" placeholder="EMAIL" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <input type="tel" class="form-input" placeholder="CONTACTO TELEFÓNICO" />
              </div>
              <div class="form-group">
                <input type="text" class="form-input" placeholder="FUNÇÃO / EMPRESA" />
              </div>
            </div>

            <div class="form-group">
              <label class="upload-area">
                <input type="file" class="file-input" accept=".zip,.rar" />
                <span class="upload-text">CLIQUE AQUI PARA CARREGAR O SEU CV/PORTFÓLIO + CC</span>
                <span class="upload-subtext">Formatos .ZIP ou .RAR (max. 50mb)</span>
              </label>
            </div>
          </div>

          <!-- Participante Nº2 -->
          <div class="form-section">
            <h3 class="section-title">PARTICIPANTE Nº2</h3>

            <div class="form-group">
              <input type="text" class="form-input" placeholder="NOME" />
            </div>

            <div class="form-row">
              <div class="form-group">
                <input type="date" class="form-input" placeholder="DATA DE NASCIMENTO" />
              </div>
              <div class="form-group">
                <input type="email" class="form-input" placeholder="EMAIL" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <input type="tel" class="form-input" placeholder="CONTACTO TELEFÓNICO" />
              </div>
              <div class="form-group">
                <input type="text" class="form-input" placeholder="FUNÇÃO / EMPRESA" />
              </div>
            </div>

            <div class="form-group">
              <label class="upload-area">
                <input type="file" class="file-input" accept=".zip,.rar" />
                <span class="upload-text">CLIQUE AQUI PARA CARREGAR O SEU CV/PORTFÓLIO + CC</span>
                <span class="upload-subtext">Formatos .ZIP ou .RAR (max. 50mb)</span>
              </label>
            </div>
          </div>

          <!-- Consentimento -->
          <div class="form-group consent-group">
            <label class="consent-label">
              <input type="checkbox" class="consent-checkbox" />
              <span class="consent-text">
                Lemos e concordamos com os termos estabelecidos no <a href="#regulamento" class="consent-link">regulamento</a> da categoria a que concorremos.
              </span>
            </label>
          </div>

          <!-- Botão Submit -->
          <div class="submit-container">
            <button type="submit" class="submit-btn">SUBMETER</button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
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
      <img src="/svg/paginscricao/furosbrancos.svg" alt="" class="furos-svg" />
    </div>
  </section>
</div>

<style>
  .inscricao-page {
    width: 100%;
    min-height: 100vh;
    background-color: #FFCD00;
    overflow-x: hidden;
  }

  /* Hero Section */
  .hero-inscricao {
    width: 100%;
    padding: 4rem 2rem;
    background-color: #FFCD00;
    overflow: visible;
  }

  .hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    gap: 2rem;
    padding: 0 2rem;
  }

  .hero-left {
    flex: 0 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .hero-right {
    flex: 0 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .logo-inscricao {
    width: 100%;
    max-width: 250px;
    height: auto;
    display: block;
  }

  .culpado-inscricao {
    width: 100%;
    max-width: 300px;
    height: auto;
    display: block;
  }

  /* Folhas Container */
  .folhas-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-left: -40px;
    margin-top: 3rem;
    margin-right: 5rem;
    overflow: visible;
    position: relative;
  }

  .folhas-juntas {
    width: calc(100% + 40px);
    max-width: none;
    height: auto;
    display: block;
  }

  /* Título Inscrição - Folha Esquerda */
  .titulo-inscricao {
    position: absolute;
    top: 10%;
    left: 12%;
    width: 35%;
    max-width: 320px;
    z-index: 10;
  }

  .titulo-svg {
    width: 100%;
    height: auto;
    display: block;
  }

  .titulo-subtexto {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #000;
    margin-top: 3.2rem;
    line-height: 1.4;
  }

  .titulo-descricao {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.85rem;
    font-weight: 400;
    color: #000;
    margin-top: 1.5rem;
    line-height: 1.6;
      text-transform: uppercase;
  }

  .titulo-contacto {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.85rem;
    font-weight: 400;
    color: #000;
    margin-top: 1rem;
    line-height: 1.6;
      text-transform: uppercase;
  }

  .email-link {
    color: #D5B32A;
    text-decoration: none;
    font-weight: 600;
  }

  .email-link:hover {
    text-decoration: underline;
  }

  /* Passos */
  .passos-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .passo-box {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    border: 2px solid #0A1214;
    background-color: transparent;
  }

  .passo-numero {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 4.5rem;
    font-weight: 700;
    color: #0A1214;
    line-height: 1;
  }

  .passo-texto {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.65rem;
    font-weight: 400;
    color: #0A1214;
    line-height: 1.4;
    text-transform: uppercase;
    margin: 0;
  }

  /* Form Overlay - Posicionado sobre a folha direita */
  .form-overlay {
    position: absolute;
    top: 5%;
    right: 2%;
    width: 52%;
    max-width: 650px;
    height: auto;
    padding: 2rem;
    z-index: 10;
  }

  /* Formulário */
  .inscricao-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* Labels */
  .form-label {
    display: block;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #000;
    margin-bottom: 6px;
  }

  /* Títulos de Secção */
  .section-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #000;
    margin: 0 0 4px 0;
    padding-top: 4px;
  }

  /* Form Section */
  .form-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 4px;
  }

  /* Form Group */
  .form-group {
    display: flex;
    flex-direction: column;
  }

  /* Form Row - 2 colunas */
  .form-row {
    display: flex;
    gap: 10px;
  }

  .form-row .form-group {
    flex: 1;
  }

  /* Inputs, Selects */
  .form-input,
  .form-select {
    width: 100%;
    height: 56px;
    padding: 16px 18px;
    background-color: #E7E3D5;
    border: none;
    border-radius: 8px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #000;
    outline: none;
    transition: outline 0.2s;
    box-sizing: border-box;
  }

  .form-input::placeholder {
    color: #000;
    opacity: 1;
    font-weight: 600;
  }

  .form-input:focus,
  .form-select:focus {
    outline: 1px solid rgba(0, 0, 0, 0.3);
  }

  /* Select */
  .form-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;
    cursor: pointer;
  }

  /* Upload Area */
  .upload-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    min-height: 70px;
    background-color: #E7E3D5;
    border: 1.5px dashed rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    cursor: pointer;
    text-align: left;
    padding: 14px 16px;
    box-sizing: border-box;
    transition: border-color 0.2s;
  }

  .upload-area:hover {
    border-color: rgba(0, 0, 0, 0.6);
  }

  .file-input {
    display: none;
  }

  .upload-text {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    color: #000;
    margin-bottom: 2px;
  }

  .upload-subtext {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.65rem;
    font-weight: 400;
    color: #555;
  }

  /* Consent */
  .consent-group {
    margin-top: 6px;
  }

  .consent-label {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
  }

  .consent-checkbox {
    width: 16px;
    height: 16px;
    margin-top: 2px;
    accent-color: #000;
    cursor: pointer;
    flex-shrink: 0;
    border: 1px solid #000;
  }

  .consent-text {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.65rem;
    font-weight: 400;
    color: #000;
    line-height: 1.5;
  }

  .consent-link {
    color: #000;
    text-decoration: underline;
  }

  /* Submit Button */
  .submit-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
  }

  .submit-btn {
    width: auto;
    height: 48px;
    padding: 0 2rem;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .submit-btn:hover {
    background-color: #2B302D;
  }

  /* Footer */
  .footer {
    background-color: #EBEBEB;
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
    background-color: #FFCD00;
    padding: 0;
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

  /* Responsive */
  @media (max-width: 1200px) {
    .form-overlay {
      width: 45%;
      max-width: 480px;
      padding: 1.5rem;
      right: 3%;
    }

    .form-input,
    .form-select {
      height: 44px;
      font-size: 0.75rem;
    }

    .upload-area {
      height: 80px;
    }

    .upload-text {
      font-size: 0.65rem;
    }
  }

  @media (max-width: 992px) {
    .form-overlay {
      position: relative;
      top: auto;
      right: auto;
      width: 100%;
      max-width: 600px;
      margin: 2rem auto 0;
      padding: 2rem;
      background-color: #FBF6E3;
      border-radius: 8px;
    }

    .folhas-container {
      flex-direction: column;
      align-items: center;
      margin-left: 0;
      margin-right: 0;
    }

    .folhas-juntas {
      width: 100%;
      max-width: 800px;
    }
  }

  @media (max-width: 768px) {
    .hero-content {
      flex-direction: column;
      gap: 2rem;
    }

    .hero-left,
    .hero-right {
      justify-content: center;
    }

    .logo-inscricao {
      max-width: 180px;
    }

    .culpado-inscricao {
      max-width: 220px;
    }

    .form-overlay {
      padding: 1.5rem;
    }

    .form-row {
      flex-direction: column;
      gap: 16px;
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
    .hero-inscricao {
      padding: 2rem 1rem;
    }

    .logo-inscricao {
      max-width: 140px;
    }

    .culpado-inscricao {
      max-width: 180px;
    }

    .form-overlay {
      padding: 1rem;
    }

    .form-input,
    .form-select {
      height: 42px;
      padding: 10px 12px;
      font-size: 0.7rem;
    }

    .section-title {
      font-size: 0.75rem;
    }

    .upload-area {
      height: 70px;
    }

    .upload-text {
      font-size: 0.6rem;
    }

    .upload-subtext {
      font-size: 0.55rem;
    }

    .consent-text {
      font-size: 0.65rem;
    }

    .submit-btn {
      height: 44px;
      font-size: 0.75rem;
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

