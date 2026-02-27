<script>
    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        }
    }

    function closeMenu() {
        isOpen = false;
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'auto';
        }
    }
</script>

<nav class="nav">
    <div class="nav-bg">
        <img src="/svg/nav/historia.svg" alt="" class="nav-svg" />
    </div>

    <button
            class="hamburger"
            class:open={isOpen}
            on:click={toggleMenu}
            aria-label="Menu"
    >
        <span></span>
        <span></span>
        <span></span>
    </button>

    <div class="nav-overlay" class:active={isOpen}>
        <a href="#home" class="nav-home" aria-label="Home" on:click={closeMenu}>
            <span class="nav-text mobile-only">HOME</span>
        </a>

        <a href="#sobre" class="nav-link link-sobre" on:click={closeMenu}>
            <span class="nav-text">SOBRE</span>
        </a>
        <a href="#juri" class="nav-link link-juri" on:click={closeMenu}>
            <span class="nav-text">JÚRI</span>
        </a>
        <a href="#historia" class="nav-link link-historia" on:click={closeMenu}>
            <span class="nav-text">A HISTÓRIA</span>
        </a>
        <a href="#roger" class="nav-link link-roger" on:click={closeMenu}>
            <span class="nav-text">ROGER HATCHUEL</span>
        </a>

        <a href="#inscricao" class="nav-link link-inscreve" on:click={closeMenu}>
            <span class="nav-text white">INSCREVE-TE</span>
        </a>
    </div>
</nav>

<style>
    /* --- ESTRUTURA GERAL --- */
    .nav {
        position: relative;
        width: 100%;
        background: transparent;
        line-height: 0;
        z-index: 50; /* Garante que a nav está acima do conteúdo */
    }

    .nav-bg {
        width: 100%;
        line-height: 0;
    }

    .nav-svg {
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
    }

    .hamburger { display: none; } /* Desktop: escondido */

    .nav-text {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        white-space: nowrap;
        color: #000;
    }

    .white { color: #fff; }
    .mobile-only { display: none; }

    /* --- DESKTOP (POSICIONAMENTO SOBRE O SVG) --- */
    @media (min-width: 851px) {
        .nav-overlay {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-51%);
            width: 92%;
            height: 100%;
            display: flex;
            align-items: center;
            background: transparent;
        }

        .nav-home {
            position: absolute;
            left: 0; top: 5%;
            width: 7%; height: 100%;
            z-index: 5;
        }

        .nav-link {
            position: absolute;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transform: translateY(-15%);
        }

        .link-sobre { left: -1%; width: 17%; }
        .link-juri { left: 18%; width: 17%; }
        .link-historia { left: 40%; width: 17%; }
        .link-roger { left: 61%; width: 17%; }
        .link-inscreve { left: 78%; width: 20%; }
    }

    /* --- MOBILE (< 850px) --- */
    @media (max-width: 850px) {
        .nav { height: 70px; }
        .nav-bg { display: none; }

        /* Hambúrguer Visível */
        .hamburger {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 28px;
            height: 20px;
            background: transparent;
            border: none;
            z-index: 200; /* Acima do menu aberto */
            position: absolute;
            right: 20px;
            top: 25px;
            cursor: pointer;
            padding: 0;
        }

        .hamburger span { width: 100%; height: 2px; background: #000; transition: 0.3s; }

        /* Animação do X */
        .hamburger.open span:nth-child(1) { transform: translateY(9px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

        /* --- MENU FULLSCREEN --- */
        .nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #ffffff;
            z-index: 100;

            /* FLEXBOX PARA CENTRAR ITENS */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;

            /* LÓGICA DE ESCONDER (O SEGREDO ESTÁ AQUI) */
            transform: translateX(100%); /* Move 100% para a direita (fora do ecrã) */
            transition: transform 0.4s ease-in-out;
            visibility: hidden; /* Para não ser clicável quando escondido */
        }

        /* QUANDO ABERTO */
        .nav-overlay.active {
            transform: translateX(0); /* Traz de volta para o centro */
            visibility: visible;
        }

        /* Reset dos Links para Mobile */
        .nav-link, .nav-home {
            position: relative;
            transform: none;
            width: auto;
            height: auto;
            left: auto; top: auto;
            text-decoration: none;
            display: block;
        }

        .mobile-only { display: inline-block; }

        .nav-text {
            font-size: 24px; /* Letra maior no telemóvel */
        }

        .nav-text.white {
            background: #000;
            color: #fff;
            padding: 10px 30px;
            border-radius: 4px;
        }
    }
</style>