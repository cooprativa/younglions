<script>
    import NavInscricao from './NavInscricao.svelte';

    // --- ESTADOS DO FORMULÁRIO ---
    let submitting = false;
    let statusMessage = '';
    let statusType = ''; // 'success', 'error' ou 'info'

    // Variáveis visuais para o nome do ficheiro
    let fileName1 = '';
    let fileName2 = '';

    // Ficheiros REAIS guardados temporariamente antes do envio
    let file1 = null;
    let file2 = null;

    // --- FUNÇÕES AUXILIARES ---

    // Validação Ficheiro 1
    function handleFileChange1(e) {
        const file = e.target.files[0];
        if (!file) return;

        // Limite aumentado para 10MB graças ao Cloudinary
        if (file.size > 10 * 1024 * 1024) {
            alert("O ficheiro é demasiado grande (Máx 10MB). Por favor comprime o PDF.");
            e.target.value = '';
            fileName1 = '';
            file1 = null;
            return;
        }

        fileName1 = file.name;
        file1 = file; // Guardamos o ficheiro real
    }

    // Validação Ficheiro 2
    function handleFileChange2(e) {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 10 * 1024 * 1024) {
            alert("O ficheiro é demasiado grande (Máx 10MB). Por favor comprime o PDF.");
            e.target.value = '';
            fileName2 = '';
            file2 = null;
            return;
        }

        fileName2 = file.name;
        file2 = file; // Guardamos o ficheiro real
    }

    // --- UPLOAD PARA O CLOUDINARY ---
    const uploadParaCloudinary = async (ficheiro) => {
        if (!ficheiro) return null;

        const formData = new FormData();
        formData.append('file', ficheiro);

        // ⚠️ ATENÇÃO: METE AQUI O NOME DO TEU PRESET DO CLOUDINARY!
        formData.append('upload_preset', 'young-lions-cv');

        try {
            const resposta = await fetch('https://api.cloudinary.com/v1_1/ddgycgfiv/auto/upload', {
                method: 'POST',
                body: formData
            });
            const dados = await resposta.json();
            return dados.secure_url; // Devolve o link final
        } catch (erro) {
            console.error("Erro no upload para o Cloudinary:", erro);
            return null;
        }
    };


    // --- ENVIO DO FORMULÁRIO ---
    async function handleSubmit(e) {

        if (!file1 || !file2) {
            alert("Por favor anexa os portfólios dos dois participantes antes de enviar.");
            submitting = false; // Importante para desbloquear o botão
            return;
        }
        submitting = true;
        statusMessage = 'A carregar ficheiros e a enviar inscrição...';
        statusType = 'info';

        try {
            // 1. Enviar ficheiros para a Cloud e receber os links
            const link_p1 = await uploadParaCloudinary(file1);
            const link_p2 = await uploadParaCloudinary(file2);

            const formData = new FormData(e.target);

            // 2. Prepara o objeto JSON (agora com os Links do Cloudinary)
            const payload = {
                categoria: formData.get('categoria'),
                p1_nome: formData.get('p1_nome'),
                p1_nascimento: formData.get('p1_nascimento'),
                p1_email: formData.get('p1_email'),
                p1_telefone: formData.get('p1_telefone'),
                p1_funcao: formData.get('p1_funcao'),
                p1_ficheiro_url: link_p1, // Vai o Link

                p2_nome: formData.get('p2_nome'),
                p2_nascimento: formData.get('p2_nascimento'),
                p2_email: formData.get('p2_email'),
                p2_telefone: formData.get('p2_telefone'),
                p2_funcao: formData.get('p2_funcao'),
                p2_ficheiro_url: link_p2, // Vai o Link

                termos_aceites: formData.get('termos_aceites') === 'on'
            };

            // 3. Envia para a tua API (api/enviar.js)
            const response = await fetch('/api/enviar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const text = await response.text();
            if (!response.ok) throw new Error(text);

            // SUCESSO
            statusMessage = 'Inscrição enviada com sucesso! Boa sorte.';
            statusType = 'success';
            e.target.reset();
            fileName1 = ''; fileName2 = '';
            file1 = null; file2 = null;

            setTimeout(() => { statusMessage = ''; }, 5000);

        } catch (error) {
            console.error(error);
            statusMessage = 'Erro ao enviar. Tenta novamente.';
            statusType = 'error';
        } finally {
            submitting = false;
        }
    }
</script>

<div class="inscricao-page">
    <NavInscricao />

    {#if statusMessage}
        <div class="status-box {statusType}">
            {statusMessage}
        </div>
    {/if}

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

            <div class="titulo-inscricao">
                <img src="/svg/paginscricao/Inscricaotitulo.svg" alt="Inscrição" class="titulo-svg" />
                <p class="titulo-subtexto">SÊ CULPADO DE<br />UMA GRANDE IDEIA</p>
                <p class="titulo-descricao">
                    Escolhe o teu "partner in crime" e preenche o formulário de inscrição da dupla para os Betclic Young Lions Portugal 2026.
                </p>
                <p class="titulo-contacto">
                    Em caso de dúvida, contacta-nos para <a href="mailto:younglionsportugal@mop.pt" class="email-link">younglionsportugal@mop.pt</a>
                </p>

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

            <div class="form-overlay">
                <form class="inscricao-form" on:submit|preventDefault={handleSubmit}>

                    <div class="form-group">
                        <label class="form-label" for="categoria">CATEGORIA DA TUA INSCRIÇÃO</label>
                        <select id="categoria" name="categoria" class="form-select" required>
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

                    <div class="form-section">
                        <h3 class="section-title">PARTICIPANTE Nº1</h3>
                        <div class="form-group">
                            <input type="text" name="p1_nome" class="form-input" placeholder="NOME" required />
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <input type="text" name="p1_nascimento" class="form-input" placeholder="DATA DE NASCIMENTO" on:focus={(e) => (e.currentTarget.type = 'date')} on:blur={(e) => { if (!e.currentTarget.value) e.currentTarget.type = 'text'; }} required />
                            </div>
                            <div class="form-group">
                                <input type="email" name="p1_email" class="form-input" placeholder="EMAIL" required />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <input type="tel" name="p1_telefone" class="form-input" placeholder="CONTACTO TELEFÓNICO" required />
                            </div>
                            <div class="form-group">
                                <input type="text" name="p1_funcao" class="form-input" placeholder="FUNÇÃO / EMPRESA" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="upload-area {fileName1 ? 'file-selected' : ''}">
                                <input type="file" name="p1_ficheiro" class="file-input" accept=".zip,.rar,.pdf" on:change={handleFileChange1}/>
                                {#if fileName1}
                                    <span class="upload-text" style="color: #000; font-weight: 700;">FICHEIRO:</span>
                                    <span class="upload-subtext">{fileName1}</span>
                                {:else}
                                    <span class="upload-text">CLICA AQUI PARA CARREGAR O TEU CV/PORTFÓLIO + CC</span>
                                    <span class="upload-subtext">Formatos .ZIP ou .RAR (Max 10MB)</span>
                                {/if}
                            </label>
                        </div>
                    </div>

                    <div class="form-section">
                        <h3 class="section-title">PARTICIPANTE Nº2</h3>
                        <div class="form-group">
                            <input type="text" name="p2_nome" class="form-input" placeholder="NOME" required />
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <input type="text" name="p2_nascimento" class="form-input" placeholder="DATA DE NASCIMENTO" on:focus={(e) => (e.currentTarget.type = 'date')} on:blur={(e) => { if (!e.currentTarget.value) e.currentTarget.type = 'text'; }} required />
                            </div>
                            <div class="form-group">
                                <input type="email" name="p2_email" class="form-input" placeholder="EMAIL" required />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <input type="tel" name="p2_telefone" class="form-input" placeholder="CONTACTO TELEFÓNICO" required />
                            </div>
                            <div class="form-group">
                                <input type="text" name="p2_funcao" class="form-input" placeholder="FUNÇÃO / EMPRESA" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="upload-area {fileName2 ? 'file-selected' : ''}">
                                <input type="file" name="p2_ficheiro" class="file-input" accept=".zip,.rar,.pdf" on:change={handleFileChange2}/>
                                {#if fileName2}
                                    <span class="upload-text" style="color: #000; font-weight: 700;">FICHEIRO:</span>
                                    <span class="upload-subtext">{fileName2}</span>
                                {:else}
                                    <span class="upload-text">CLICA AQUI PARA CARREGAR O TEU CV/PORTFÓLIO + CC</span>
                                    <span class="upload-subtext">Formatos .ZIP ou .RAR (Max 10MB)</span>
                                {/if}
                            </label>
                        </div>
                    </div>

                    <div class="form-group consent-group">
                        <label class="consent-label">
                            <input type="checkbox" name="termos_aceites" class="consent-checkbox" required />
                            <span class="consent-text">
                        Lemos e concordamos com os termos estabelecidos no <a href="/assets/REGULAMENTO%20GERAL%20YLP%202026.pdf" class="consent-link">regulamento</a>.
                    </span>
                        </label>
                    </div>

                    <div class="submit-container">
                        <button type="submit" class="submit-btn" disabled={submitting}>
                            {submitting ? 'A ENVIAR...' : 'SUBMETER'}
                        </button>
                    </div>
                </form>
            </div>
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
                    <img src="/footerimagens/ProdutoraOficial.png" alt="Film Brokers" class="f-img2 start" />
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

    <section class="furos-bottom-section">
        <div class="furos-container">
            <img src="/svg/paginscricao/furosbrancos.svg" alt="" class="furos-svg" />
        </div>
    </section>
</div>

<style>
    /* --- CSS DA NOTIFICAÇÃO FLUTUANTE (TOAST) --- */
    .status-box {
        position: fixed;
        top: 100px; /* Ajusta conforme altura do teu menu */
        right: 20px;
        z-index: 9999;

        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-family: 'IBM Plex Mono', monospace;
        font-weight: 700;
        font-size: 0.9rem;

        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease-out;
        max-width: 350px;
        background-color: #fff;
    }

    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    .status-box.success {
        background-color: #d4edda;
        color: #155724;
        border-left: 5px solid #28a745;
    }

    .status-box.error {
        background-color: #f8d7da;
        color: #721c24;
        border-left: 5px solid #dc3545;
    }

    .status-box.info {
        background-color: #cce5ff;
        color: #004085;
        border-left: 5px solid #004085;
    }

    /* --- ESTILOS GERAIS DA PÁGINA --- */
    .inscricao-page { width: 100%; min-height: 100vh; background-color: #FFCD00; overflow-x: hidden; font-family: 'IBM Plex Mono', monospace; }

    .hero-inscricao { width: 100%; padding: 4rem 2rem; background-color: #FFCD00; overflow: visible; }
    .hero-content { display: flex; justify-content: space-between; align-items: center; max-width: 1400px; margin: 0 auto; gap: 2rem; padding: 0 2rem; }
    .hero-left { flex: 0 0 auto; display: flex; justify-content: flex-start; align-items: center; }
    .hero-right { flex: 0 0 auto; display: flex; justify-content: flex-end; align-items: center; }
    .logo-inscricao { width: 100%; max-width: 250px; height: auto; display: block; }
    .culpado-inscricao { width: 100%; max-width: 300px; height: auto; display: block; }

    .folhas-container { display: flex; justify-content: flex-start; align-items: flex-end; margin-left: -40px; margin-top: 3rem; margin-right: 5rem; overflow: visible; position: relative; }
    .folhas-juntas { width: calc(100% + 40px); max-width: none; height: auto; display: block; }

    .titulo-inscricao { position: absolute; top: 10%; left: 12%; width: 35%; max-width: 320px; z-index: 10; }
    .titulo-svg { width: 100%; height: auto; display: block; }
    .titulo-subtexto { font-family: 'IBM Plex Mono', monospace; font-size: 1.1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #000; margin-top: 3.2rem; line-height: 1.4; }
    .titulo-descricao { font-family: 'IBM Plex Mono', monospace; font-size: 0.85rem; font-weight: 400; color: #000; margin-top: 1.5rem; line-height: 1.6; text-transform: uppercase; }
    .titulo-contacto { font-family: 'IBM Plex Mono', monospace; font-size: 0.85rem; font-weight: 400; color: #000; margin-top: 1rem; line-height: 1.6; text-transform: uppercase; }
    .email-link { color: #D5B32A; text-decoration: none; font-weight: 600; }
    .email-link:hover { text-decoration: underline; }

    .passos-container { display: flex; flex-direction: column; gap: 2rem; margin-top: 1.5rem; }
    .passo-box { display: flex; align-items: center; gap: 1rem; padding: 0.75rem 1rem; border: 2px solid #0A1214; background-color: transparent; }
    .passo-numero { font-family: 'IBM Plex Mono', monospace; font-size: 4.5rem; font-weight: 700; color: #0A1214; line-height: 1; }
    .passo-texto { font-family: 'IBM Plex Mono', monospace; font-size: 0.65rem; font-weight: 400; color: #0A1214; line-height: 1.4; text-transform: uppercase; margin: 0; }

    .form-overlay { position: absolute; top: 5%; right: 2%; width: 52%; max-width: 650px; height: auto; padding: 2rem; z-index: 10; }
    .inscricao-form { display: flex; flex-direction: column; gap: 12px; }
    .form-label { display: block; font-family: 'IBM Plex Mono', monospace; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #000; margin-bottom: 6px; }
    .section-title { font-family: 'IBM Plex Mono', monospace; font-size: 0.8rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; color: #000; margin: 0 0 4px 0; padding-top: 4px; }
    .form-section { display: flex; flex-direction: column; gap: 10px; padding-top: 4px; }
    .form-group { display: flex; flex-direction: column; }
    .form-row { display: flex; gap: 10px; }
    .form-row .form-group { flex: 1; }

    .form-input, .form-select { width: 100%; height: 56px; padding: 16px 18px; background-color: #E7E3D5; border: none; border-radius: 8px; font-family: 'IBM Plex Mono', monospace; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #000; outline: none; transition: outline 0.2s; box-sizing: border-box; }
    .form-input::placeholder { color: #000; opacity: 1; font-weight: 600; }
    .form-input:focus, .form-select:focus { outline: 1px solid rgba(0, 0, 0, 0.3); }
    .form-select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000' d='M6 8L1 3h10z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px; cursor: pointer; }

    .upload-area { display: flex; flex-direction: column; justify-content: center; align-items: flex-start; width: 100%; min-height: 70px; background-color: #E7E3D5; border: 1.5px dashed rgba(0, 0, 0, 0.4); border-radius: 8px; cursor: pointer; text-align: left; padding: 14px 16px; box-sizing: border-box; transition: border-color 0.2s; }
    .upload-area:hover { border-color: rgba(0, 0, 0, 0.6); }
    .file-input { display: none; }
    .upload-text { font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.3px; color: #000; margin-bottom: 2px; }
    .upload-subtext { font-family: 'IBM Plex Mono', monospace; font-size: 0.65rem; font-weight: 400; color: #555; }

    .consent-group { margin-top: 6px; }
    .consent-label { display: flex; align-items: flex-start; gap: 10px; cursor: pointer; }
    .consent-checkbox { width: 16px; height: 16px; margin-top: 2px; accent-color: #000; cursor: pointer; flex-shrink: 0; border: 1px solid #000; }
    .consent-text { font-family: 'IBM Plex Mono', monospace; font-size: 0.65rem; font-weight: 400; color: #000; line-height: 1.5; }
    .consent-link { color: #000; text-decoration: underline; }

    .submit-container { display: flex; justify-content: flex-end; margin-top: 12px; }
    .submit-btn { width: auto; height: 48px; padding: 0 2rem; background-color: #000; color: #fff; border: none; border-radius: 4px; font-family: 'IBM Plex Mono', monospace; font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; transition: background-color 0.3s; }
    .submit-btn:hover { background-color: #2B302D; }
    .submit-btn:disabled { background-color: #777; cursor: not-allowed; }

    .furos-bottom-section { background-color: #FFCD00; padding: 0; width: 100%; }
    .furos-container { width: 100%; max-width: 800px; margin: 0 auto; display: flex; justify-content: center; align-items: center; padding: 2rem 4rem; }
    .furos-svg { width: 100%; height: auto; display: block; }

    /* FOOTER */
    .footer { background-color: #EBEBEB; padding: 2rem 2rem 3rem; position: relative; font-family: 'IBM Plex Mono', monospace; }
    .footer-rows-container { max-width: 1400px; margin: 0 auto; background-color: transparent; border: none; }
    .footer-row { width: 100%; border: 2px solid #000; margin-bottom: 1.5rem; background-color: transparent; padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: flex-start; }
    .footer-row:last-child { margin-bottom: 0; border-bottom: 2px solid #000; }

    .f-label { font-size: 1rem; font-weight: 700; color: #000; margin-bottom: 2rem; display: block; text-transform: uppercase; letter-spacing: 0.5px; line-height: 1.2; }

    .text-right { text-align: right; width: 100%; }
    .f-img { height: 40px; width: auto; object-fit: contain; display: block; }
    .f-img.big-logo { height: 50px; }
    .f-img2 { height: 30px; width: auto; object-fit: contain; display: block; }
    .small-logo { height: 20px !important; width: auto; }
    .f-img.single-logo { width: 70%; max-width: 700px; height: auto; object-fit: contain; display: block; margin-top: 1rem; }

    .f-img2.rfm { height: 55px; position: relative; top: -5px; } /* Ajuste RFM */

    .f-imgs-row { display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap; }
    .f-imgs-row.gap-medium { gap: 2rem; }
    .f-group-left { display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
    .f-group-left img[alt="MOP"] { height: 60px; width: auto; }
    .f-group-right { display: flex; flex-direction: column; align-items: flex-end; text-align: right; }

    .row-2 .f-group-left .f-label { display: block; margin-top: 0; line-height: 1.2; padding-top: 0; margin-bottom: 4.5rem; }
    .row-1, .row-2 { align-items: flex-end; }
    .row-3 { display: flex; justify-content: space-between; align-items: flex-start; }
    .partners-left { max-width: 100%; }
    .partners-left .f-img { transform: scale(0.8); transform-origin: left center; }
    .bootcamp-right { display: flex; flex-direction: column; align-items: flex-end; text-align: right; gap: 2rem; }
    .bootcamp-right .f-label { margin: 0; }

    .row-4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr; gap: 1rem; align-items: start; }
    .f-col { display: flex; flex-direction: column; align-items: flex-start; }
    .f-col.right-align { align-items: flex-end; text-align: right; }
    .f-img2.end { align-self: flex-end; height: 40px; }

    .row-5 { display: flex; justify-content: space-between; align-items: flex-end; gap: 2rem; }
    .force-right { margin-left: auto; display: flex; flex-direction: column; align-items: flex-end; text-align: right; }
    .right-aligned-imgs { justify-content: flex-end; }

    .footer-social { display: flex; gap: 2rem; flex-wrap: wrap; justify-content: space-between; padding: 3rem 4rem 1rem; max-width: 1200px; margin: 0 auto; }
    .social-link { color: #000; text-decoration: none; font-family: 'IBM Plex Mono', monospace; font-size: 1.125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; transition: opacity 0.3s; position: relative; }
    .social-link:hover { opacity: 0.7; }
    .social-link::before { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background-color: #000; transition: width 0.3s; }
    .social-link:hover::before { width: 100%; }

    /* RESPONSIVO */
    @media screen and (max-width: 1024px) {
        .f-group-left img[alt="MOP"] { height: 40px; }
        .folhas-juntas { display: none; }
        .folhas-container { display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding: 0 20px; gap: 40px; margin: 0 auto; width: 100%; }
        .form-overlay, .titulo-inscricao { position: relative; width: 100%; top: auto; left: auto; right: auto; transform: none; }
        .titulo-inscricao { text-align: center; max-width: 700px; padding-right: 0; margin-top: 2rem; }
        .titulo-svg { margin: 0 auto 20px auto; width: 80%; max-width: 400px; }
        .titulo-descricao, .titulo-contacto { margin-left: auto; margin-right: auto; }
        .passos-container { align-items: center; display: flex; flex-direction: column; margin-top: 30px; width: 100%; }
        .passo-box { width: 100%; max-width: 450px; border: 2px solid #000; padding: 10px; border-radius: 0; margin-bottom: 10px; }
        .hero-content { padding: 20px; flex-wrap: wrap; gap: 20px; justify-content: center; }
        .hero-left, .hero-right { justify-content: center; }
        .form-overlay { max-width: 600px; margin: 0 auto; padding: 0; }
        .titulo-subtexto { display: block; }
        .form-row { display: flex; flex-wrap: wrap; gap: 15px; }
        .form-row .form-group { flex: 1 1 45%; min-width: 250px; }
        .footer-row { flex-direction: column; align-items: flex-start; gap: 2rem; }
        .row-4 { display: flex; flex-direction: column; }
        .row-5 { flex-direction: column; align-items: flex-start; }
        .f-group-right, .f-col.right-align, .text-right, .force-right, .right-aligned-imgs { align-items: flex-start !important; justify-content: flex-start !important; text-align: left !important; margin-left: 0; }
        .f-img2.end { align-self: flex-start; }

        /* Ajuste do Toast em mobile */
        .status-box { top: auto; bottom: 20px; right: 20px; left: 20px; width: auto; max-width: none; text-align: center; border-left: none; border-bottom: 5px solid; }
    }

    @media (max-width: 480px) {
        .hero-inscricao { padding: 2rem 1rem; }
        .logo-inscricao { max-width: 140px; }
        .culpado-inscricao { max-width: 180px; }
        .form-overlay { padding: 1rem; }
        .form-input, .form-select { height: 42px; padding: 10px 12px; font-size: 0.7rem; }
        .section-title { font-size: 0.75rem; }
        .upload-area { height: 70px; }
        .upload-text { font-size: 0.6rem; }
        .upload-subtext { font-size: 0.55rem; }
        .consent-text { font-size: 0.65rem; }
        .submit-btn { height: 44px; font-size: 0.75rem; }
        .footer { padding: 2rem 1rem; }
        .footer-social { gap: 1rem; padding: 2rem 1rem 1rem; }
        .social-link { font-size: 0.875rem; }
    }
</style>