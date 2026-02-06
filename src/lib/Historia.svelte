<script>
    import NavHistoria from './NavHistoria.svelte';
    import { onMount } from 'svelte';

    // Dados da Timeline baseados na imagem
    const timelineData = [
        {
            year: '1996',
            title: 'A ESTREIA',
            text: 'O ano de fundação da presença portuguesa. Sob o nome "Young Hot Dogs", Portugal estreou-se internacionalmente com a dupla Susana Sequeira e João Madeira da Nova Publicidade. Em solo nacional, a primeira vitória sorriu a João Coutinho e Tiago Guedes, da Ogilvy & Mather, marcando o início de um legado de excelência criativa jovem.',
            image: '/imagenshistoria/Imagem1.jpg',
            caption: 'A Juventude contra a droga'
        },
        {
            year: '1998',
            title: 'O 1º OURO',
            text: 'Um marco histórico para a publicidade nacional. Apenas dois anos após a estreia, Portugal conquista o primeiro Ouro. A dupla Diogo Anahory e José Bomtempo (TBWA/EPG) superou a concorrência global com o icónico trabalho "Cicatriz" para a Children\'s Lifeline.',
            image: '/imagenshistoria/Imagem2.jpg',
            caption: 'Children‘s Lifeline_ Medalha de OURO'
        },
        {
            year: '1999',
            title: 'BICAMPEÕES',
            text: 'A confirmação do talento luso com o segundo Ouro consecutivo. Sandro Porto e Liliana Dantas (FCB/MKT) garantiram a vitória com o trabalho "AIDS RESEARCH" para a amfAR. O júri internacional destacou a simplicidade brilhante e a interatividade da ideia.',
            image: '/imagenshistoria/Imagem3.jpg',
            caption: 'Fundação Americana contra a Sida_ Medalha de OURO'
        },
        {
            year: '2004',
            title: 'OURO EM CYBER',
            text: 'A revolução digital chega ao pódio. A tripla Claudio Lima, Daniel Pereira e Leonardo Pereira (FCB) conquistou o primeiro Ouro na categoria Cyber. Numa altura em que o digital começava a dominar, venceram com um banner inovador sobre HIV/AIDS.',
            image: '/imagenshistoria/Imagem4.jpg',
            caption: 'Global Business Coalition on HIV/AIDS\n' +
                '-Medalha de\n' +
                'OURO\n' +
                'Daniel Prado,Cláudio Lima e Leonardo Pereira no\n' +
                'palco do “Palais des Festivals\n' +
                '”'
        },
        {
            year: '2006',
            title: 'FILME',
            text: 'Uma década de Young Lions Portugal. A competição evolui com a introdução da categoria de Filme e a autonomização da categoria Cyber. Para celebrar os 10 anos de participação, a delegação portuguesa cresceu, levando 6 criativos a Cannes.',
            image: null,
            caption: ''
        },
        {
            year: '2009',
            title: 'MEDIA',
            text: 'O ano da expansão para o planeamento de meios com o lançamento da categoria Media. A delegação nacional atingiu os 8 elementos e foi um ano de glória transversal: Portugal trouxe para casa a Medalha de Ouro na competição de Imprensa e a Medalha de Prata em Cyber.',
            image: '/imagenshistoria/Imagem5.jpg',
            caption: 'Nuno Teixeira, Fred Bosh, José Bomtempo, Zélia Morais\n' +
                'e Clara Tehrani ( da esquerda para a direita )em\n' +
                'Cannes, após vitória do Ouro em Imprensa (Nuno\n' +
                'Teixeira e Clara Tehrani) e Prata em Cyber (Fred Bosh\n' +
                'e Zélia Morais)'
        },
        {
            year: '2010',
            title: 'MARKETERS',
            text: 'O festival abre portas ao lado do cliente. A estreia da categoria Young Marketers permitiu que Bruno Rio e Tiago Talone (Unicer) fossem os primeiros representantes de marcas portuguesas. Com esta adição, Portugal passou a levar uma comitiva de 10 jovens profissionais.',
            image: '/imagenshistoria/Imagem6.jpg',
            caption: 'Bruno Rio e Tiago Talone'
        },
        {
            year: '2011',
            title: 'BRONZE CYBER',
            text: 'O regresso aos prémios na vertente digital. A dupla Maria João Amparo e Rita Bernardo, da FullSix, conquistou a Medalha de Bronze na categoria Cyber. O desafio proposto pelo "The Planet Earth Institute" foi superado com distinção.',
            image: '/imagenshistoria/Imagem7.jpg',
            caption: 'Medalha de Bronze_ Young Cyber'
        },
        {
            year: '2012',
            title: 'DESIGN & OURO',
            text: 'Estreia da categoria Design e um ano dourado para os Marketers. Afonso Ferreira e Francisca Oliveira conquistaram o primeiro Ouro de sempre para Portugal em Marketing. O ano fechou com chave de ouro com Joaquim Costa e Ricardo Ferreira a garantirem o Bronze em Media.',
            image: '/imagenshistoria/Imagem8.jpg',
            caption: 'Afonso Ferreira e Francisca Oliveira com o CEO do\n' +
                'festival Philip Thomas no palco do “Palais des\n' +
                'Festivals”'
        },
        {
            year: '2014',
            title: 'PR & RECORDE',
            text: 'A família Young Lions atinge a sua maior dimensão. Com a abertura da categoria de Relações Públicas (PR), estreada por Ana Rita Delgado e Ana Margarida Rosário, a delegação nacional bateu o recorde histórico com 14 jovens profissionais a representar as cores nacionais.',
            image: '/imagenshistoria/Imagem9.jpg',
            caption: 'Ana Rita Delgado e a Ana Margarida Rosário'
        },
        {
            year: '2016',
            title: 'BRONZE DESIGN',
            text: 'O design português volta a brilhar. A dupla Maria Bessa e Rui Simões, da agência NOSSA, conquistou a Medalha de Bronze na categoria Design. O trabalho respondeu de forma exímia ao desafio lançado pelas Nações Unidas sobre o tema "Global Goals Health".',
            image: '/imagenshistoria/Imagem10.jpg',
            caption: 'Rui Simões e Maria Bessa'
        },
        {
            year: '2017',
            title: 'DUPLO BRONZE',
            text: 'Um ano de dupla celebração. Portugal regressou de Cannes com duas Medalhas de Bronze na bagagem, demonstrando talento tanto nas agências como nos clientes: Inês Coelho e Elsa Rodrigues (Fuel) brilharam em Design, enquanto José Pedro Silva e Mário Alves (Unicer) subiram ao pódio em Marketing.',
            multiData: [
                {
                    src: '/imagenshistoria/Imagem12.jpg',
                    caption: 'José Pedro Silva e Mário Alves (Bronze em Marketing)'
                },
                {
                    src: '/imagenshistoria/Imagem11.jpg',
                    caption: 'Inês Coelho e Elsa Rodrigues (Bronze em Design)'
                }
            ]
        },
        {
            year: '2018',
            title: 'OURO & PRATA',
            text: 'Uma das melhores performances de sempre. Portugal somou duas medalhas de peso: Rita Almeida e Diogo Vasques (Worten/Montepio) trouxeram o Ouro na categoria de Marketing, enquanto Cláudio Soares e Patrícia Coelho (JWT/Big Fish) garantiram a Prata em Design.',
            multiData: [
                {
                    src: '/imagenshistoria/Imagem13.jpg',
                    caption: 'Rita Almeida e Diogo Vasques'
                },
                {
                    src: '/imagenshistoria/Imagem17.jpg',
                    caption: 'Cláudio Soares e Patrícia Cordeiro'
                }
            ]
        },
        {
            year: '2021',
            title: 'BRONZE MEDIA',
            text: 'Resiliência em tempos de pandemia. Numa edição atípica realizada totalmente online, a criatividade portuguesa não baixou os braços. A dupla Andreia Esteves e Ema Pimenta destacou-se internacionalmente, conquistando a Medalha de Bronze na categoria de Media.',
            image: '/imagenshistoria/Imagem14.jpg',
            caption: 'Ema Pimenta e Andreia Esteves'
        },
        {
            year: '2023',
            title: 'BRONZE IMPRENSA',
            text: 'O regresso às origens. Portugal voltou a ser premiado na categoria fundadora do festival, Imprensa. A dupla Maria Branco e Carlota Real demonstrou que o meio impresso continua vivo e impactante, garantindo a Medalha de Bronze para Portugal.',
            image: '/imagenshistoria/Imagem15.jpg',
            caption: 'Maria Branco e Carlota Real'
        },
        {
            year: '2024',
            title: 'BRONZE DIGITAL',
            text: 'O sucesso na era digital. Tomás Almeida e João Chicau conquistaram o Bronze na categoria Digital. A comitiva portuguesa mostrou uma consistência notável, alcançando ainda Shortlists nas categorias de Filme (Francisco Machado) e Design (David Canaes e Francisco Roque do Vale).',
            image: '/imagenshistoria/Imagem16.jpg',
            caption: 'João Chicau e Francisco Roque do Vale'
        }
    ];

    let activeYear = timelineData[0].year;

    function scrollToYear(year) {
        const element = document.getElementById(`year-${year}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    let observer;
    onMount(() => {
        const options = {
            root: document.querySelector('.timeline-scroll-area'),
            rootMargin: '-10% 0px -80% 0px', // Ajuste fino para detetar o ano no topo
            threshold: 0
        };

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeYear = entry.target.getAttribute('data-year');
                }
            });
        }, options);

        timelineData.forEach(item => {
            const el = document.getElementById(`year-${item.year}`);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    });
</script>

<div class="historia-page">
    <NavHistoria />

    <section class="hero-historia">
        <div class="hero-logo">
            <img src="/assets/paginscricao/logoinscricao.png" alt="Young Lions Logo" class="logo-img" />
        </div>

        <div class="hero-center">
            <div class="pasta-container">
                <img src="/assets/pasta.png" alt="" class="pasta-img" />
                <span class="pasta-texto">A HISTÓRIA</span>
            </div>
        </div>

        <div class="hero-culpado">
            <img src="/svg/paginscricao/culpadoinscricao.svg" alt="Sê Culpado" class="culpado-img" />
        </div>

        <div class="hero-furos">
            <img src="/svg/furossobre.svg" alt="" class="furos-sobre-svg" />
        </div>
    </section>

    <section class="intro-culpados">
        <div class="intro-container">
            <img src="/svg/culpados.svg" alt="Culpados" class="culpados-svg" />

            <p class="intro-text">
                Ao longo de 30 anos construímos um longo cadastro na defesa da criatividade.<br>
                Conhece os pontos altos ao longo do processo.
            </p>
        </div>
    </section>

    <section class="timeline-section">
        <div class="timeline-clean-container">

            <div class="timeline-nav hide-scrollbar">
                <div class="nav-track">
                    <div class="vertical-line"></div>

                    {#each timelineData as item}
                        <button
                                class="nav-year {activeYear === item.year ? 'active' : ''}"
                                on:click={() => scrollToYear(item.year)}
                        >
                            {item.year}
                            <div class="diamond"></div>
                        </button>
                    {/each}
                </div>
            </div>

            <div class="timeline-scroll-area hide-scrollbar">
                {#each timelineData as item}
                    <div class="year-block" id="year-{item.year}" data-year={item.year}>

                        <div class="year-header-clean">
                            <span class="giant-year">{item.year}</span>
                            <span class="giant-dash">- {item.title} -</span>
                        </div>

                        <div class="year-body-clean">
                            <div class="year-text-area">
                                <h3 class="clean-subtitle">{item.text.split('.')[0]}.</h3> <p class="clean-desc">{item.text}</p>
                            </div>

                            {#if item.image || item.multiData}
                                <div class="year-img-area">

                                    {#if item.multiData}
                                        <div class="multi-image-stack">
                                            {#each item.multiData as media}
                                                <div class="single-media-block">
                                                    <img src={media.src} alt={item.title} class="clean-img" />
                                                    <p class="clean-caption">{media.caption}</p>
                                                </div>
                                            {/each}
                                        </div>
                                    {:else}
                                        <img src={item.image} alt={item.title} class="clean-img" />
                                        <p class="clean-caption">{item.caption}</p>
                                    {/if}

                                </div>
                            {/if}
                        </div>

                    </div>
                {/each}
            </div>

        </div>

    </section>

    <div class="footer-extra-sobre-container">
        <img src="/assets/fundos/footerextrahistoria.png" alt="" class="footer-extra-sobre-img" />
    </div>

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

    /* Alterado para o novo fundo rosa */
    .historia-page {
        width: 100%;
        min-height: 100vh;
        background-color: #D60A4D;
        overflow-x: hidden;
    }

    /* Hero Section */
    .hero-historia {
        width: 100%;
        min-height: 80vh;
        padding: 4rem 3rem 10rem;
        background-color: #D60A4D; /* Fundo rosa */
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
        font-size: 10rem; /* Reduzido de 15rem para caber "HISTÓRIA" */
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

    /* Secção Intro Culpados */
    .intro-culpados {
        background-color: #fff; /* Fundo branco */
        padding: 6rem 3rem; /* Espaçamento generoso */
        width: 100%;
    }

    .intro-container {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center; /* Centra tudo horizontalmente */
        text-align: center;
    }

    .culpados-svg {
        width: 100%;
        max-width: 600px; /* Ajusta este valor se quiseres a imagem maior/menor */
        height: auto;
        display: block;
        margin-bottom: -8rem; /* Espaço entre a imagem e o texto */
    }

    .intro-text {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1.5rem; /* Tamanho legível */
        font-weight: 500; /* Peso pedido */
        color: #000;
        line-height: 1.4;
        max-width: 1200px; /* Limita a largura do texto para leitura confortável */
        text-transform: uppercase;
    }

    /* Responsivo */
    @media (max-width: 768px) {
        .intro-culpados {
            padding: 4rem 2rem;
        }

        .intro-text {
            font-size: 1.125rem;
        }

        .culpados-svg {
            max-width: 100%;
        }
    }

    .timeline-section {
        background-color: #FFF; /* Fundo cinzento muito claro, quase branco, como na imagem */
        padding: 0 3rem 6rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .timeline-clean-container {
        width: 100%;
        max-width: 1300px;
        height: 700px; /* Altura fixa para permitir scroll */
        display: flex;
        position: relative;
        /* Sem border em volta, conforme pedido "clean" */
    }

    /* CLASSE MÁGICA PARA ESCONDER SCROLLBARS */
    .hide-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    .hide-scrollbar::-webkit-scrollbar {
        display: none; /* Chrome, Safari and Opera */
    }

    /* --- Coluna Esquerda: Navegação --- */
    .timeline-nav {
        width: 150px;
        padding-top: 5rem; /* Espaço no topo para alinhar com o título */
        position: relative;
        overflow-y: auto; /* Permite scroll se a lista for longa */
        flex-shrink: 0;
    }

    .nav-track {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end; /* Alinha números à direita, perto da linha */
        padding-right: 20px; /* Espaço entre números e linha */
    }

    /* A Linha Vertical */
    .vertical-line {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0; /* Encostada à direita do container nav */
        width: 1px;
        background-color: #888; /* Linha fina cinzenta */
    }

    .nav-year {
        background: none;
        border: none;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 0.9rem;
        font-weight: 700;
        color: #000;
        padding: 0.5rem 0;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: all 0.3s;
        opacity: 1; /* Todos visíveis a preto */
        position: relative;
        width: 100%;
        text-align: right;
    }

    .nav-year:hover {
        opacity: 0.7;
    }

    /* Losango Vermelho */
    .diamond {
        position: absolute;
        right: -26px; /* Ajuste para ficar EM CIMA da linha vertical (padding-right 20 + largura metade do losango) */
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        width: 11px;
        height: 11px;
        background-color: #D60A4D; /* Rosa/Vermelho */
        opacity: 0; /* Invisível por defeito */
        transition: opacity 0.3s;
    }

    /* Estado Ativo */
    .nav-year.active .diamond {
        opacity: 1;
    }

    /* --- Coluna Direita: Conteúdo --- */
    .timeline-scroll-area {
        flex: 1;
        overflow-y: scroll; /* Scroll funcional */
        scroll-behavior: smooth;
        padding-left: 4rem; /* Afasta da linha vertical */
        padding-top: 2rem;
    }

    .year-block {
        min-height: 450px; /* Reduzi de 700px para 450px */
        padding-bottom: 4rem; /* Espaço no fim de cada bloco antes do próximo */
        margin-bottom: 0; /* Removi margem extra */
        display: flex;
        flex-direction: column;
        justify-content: center; /* Tenta manter o conteúdo centrado no bloco */
    }

    .year-header-clean {
        display: flex;
        align-items: center;
        margin-bottom: 3rem;
    }

    .giant-year {
        font-family: 'Aber Mono', monospace;
        font-size: 8rem; /* Tamanho gigante */
        font-weight: 700;
        color: #D60A4D; /* Rosa */
        line-height: 0.8;
    }

    .giant-dash {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1.5rem;
        font-weight: 700;
        color: #000;
        margin-left: 1rem;
        text-transform: uppercase;
        margin-top: 1rem; /* Pequeno ajuste visual */
    }

    .year-body-clean {
        display: flex;
        gap: 3rem;
        align-items: center;
    }

    .year-text-area {
        flex: 1;
    }

    .clean-subtitle {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        line-height: 1.3;
    }

    .clean-desc {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1rem;
        line-height: 1.6;
        color: #333;
    }
    /* Contentor da pilha vertical */
    .multi-image-stack {
        display: flex;
        flex-direction: column; /* Garante que ficam uma em cima da outra */
        gap: 2rem; /* Espaço generoso entre o primeiro bloco (img+legenda) e o segundo */
        width: 100%;
    }

    /* Bloco individual que agrupa uma imagem e a sua legenda */
    .single-media-block {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    /* Ajuste fino para a legenda dentro do bloco não ficar muito longe da imagem */
    .single-media-block .clean-caption {
        margin-top: 0.5rem;
        margin-bottom: 0;
    }

    .year-img-area {
        /* flex: 0 0 400px;  <-- VALOR ANTIGO */
        flex: 0 0 320px; /* <-- NOVO VALOR MENOR: Ajusta a largura da coluna da imagem */
        max-width: 320px; /* Garante que não cresce mais que isso */
    }

    .clean-img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 2px;
    }

    .clean-caption {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 0.8rem;
        text-align: center;
        color: #000;
        margin-top: 0.5rem;
    }

    /* Responsivo */
    @media (max-width: 1024px) {
        .giant-year { font-size: 6rem; }
        .year-body-clean { flex-direction: column; }
        .year-img-area { flex: 1; width: 100%; }
    }

    @media (max-width: 768px) {
        .timeline-clean-container { height: auto; flex-direction: column; }
        .timeline-nav {
            width: 100%;
            height: 60px;
            overflow-x: auto;
            overflow-y: hidden;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc;
            padding: 0 1rem;
            margin-bottom: 2rem;
        }
        .nav-track { flex-direction: row; align-items: center; padding: 0; height: 100%; }
        .vertical-line { display: none; } /* Remove linha vertical no mobile */
        .nav-year { width: auto; margin: 0 1.5rem 0 0; padding: 0; text-align: center; }
        .diamond { display: none; } /* Remove losango no mobile, usa cor de texto */
        .nav-year.active { color: #D60A4D; text-decoration: underline; }

        .timeline-scroll-area { padding-left: 0; padding-top: 0; overflow-y: visible; }
        .year-block { min-height: auto; margin-bottom: 4rem; border-bottom: 1px solid #eee; padding-bottom: 2rem; }
    }

    .footer-extra-sobre-container {
        display: flex;
        justify-content: center; /* Centra horizontalmente */
        align-items: flex-end;
        width: 100%;

        /* Espaçamento */
        padding-top: 4rem;    /* Afasta da timeline em cima */

        margin-bottom: 0rem;  /* Afasta do footer em baixo (SEM VALORES NEGATIVOS) */

        background-color: transparent; /* Garante que não tapa nada */
        position: relative;
        z-index: 10;
    }

    .footer-extra-sobre-img {
        width: 100%;
        max-width: 400px; /* Tamanho da imagem */
        height: auto;
        display: block;
        margin-top: 100px;
    }

    /* Footer */
    .footer {
        background-color: #D60A4D; /* Fundo rosa para combinar */
        padding: 2rem 2rem 3rem;
        position: relative;
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
    }

    @media (max-width: 768px) {
        .hero-historia {
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
            max-width: 380px;
        }

        .hero-culpado {
            bottom: 1.5rem;
            right: 1.5rem;
        }

        .culpado-img {
            max-width: 220px;
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
        .hero-historia {
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
            font-size: 2rem;
            letter-spacing: 3px;
        }

        .pasta-img {
            max-width: 280px;
        }

        .hero-culpado {
            bottom: 1rem;
            right: 1rem;
        }

        .culpado-img {
            max-width: 160px;
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