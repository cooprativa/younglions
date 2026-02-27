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
        <img src="/svg/nav/inscricaonav.svg" alt="" class="nav-svg" />
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
            <span class="sr-only">Home</span>
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
    /* --- CSS EXISTENTE (DESKTOP) --- */
    .nav {
        position: relative;
        width: 100%;
        background: transparent;
        line-height: 0;
        overflow: visible;
    }

    .nav-bg {
        width: 100%;
        display: block;
        line-height: 0;
    }

    .nav-svg {
        width: 80%;
        height: auto;
        display: block;
        margin: 0 auto;
        transform: translateX(-10vw);
    }

    .nav-overlay {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(calc(-25% - 8vw));
        width: 75%;
        height: 100%;
        display: flex;
        align-items: center;
        line-height: normal;
    }

    .nav-home {
        position: absolute;
        left: -310px;
        top: 0;
        width: 3%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;
    }

    /* ESCONDE O TEXTO "HOME" NO PC */
    .mobile-only {
        display: none;
    }

    .nav-link {
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 0.8rem;
        color: #000;
        text-decoration: none;
    }

    .nav-text {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        white-space: nowrap;
    }

    .white { color: #000000; }

    .link-sobre { left: -21%; width: 20%; }
    .link-juri { left: 2%; width: 20%; }
    .link-historia { left: 26%; width: 20%; }
    .link-roger { left: 50%; width: 20%; }
    .link-inscreve {
        padding-top: 5px;
        left: 73%;
        width: 10%;
        text-align: center;
    }

    .hamburger { display: none; }

    .sr-only {
        position: absolute;
        width: 1px; height: 1px; padding: 0; margin: -1px;
        overflow: hidden; clip: rect(0 0 0 0); border: 0;
    }

    /* --- MOBILE --- */
    @media (max-width: 850px) {
        .nav { height: 70px; }
        .nav-bg { display: none; }

        .hamburger {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 28px;
            height: 20px;
            background: transparent;
            border: none;
            z-index: 101;
            position: absolute;
            right: 20px;
            top: 25px;
        }

        .hamburger span {
            width: 100%;
            height: 2px;
            background: #000;
            transition: 0.3s;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .nav-overlay {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background-color: #ffffff;
            flex-direction: column;
            justify-content: center;
            transform: none;
            left: auto;
            transition: 0.4s ease-in-out;
            z-index: 100;
        }

        .nav-overlay.active { right: 0; }

        /* AJUSTE DO LINK HOME PARA APARECER NA LISTA */
        .nav-home {
            position: relative;
            left: auto;
            top: auto;
            width: auto;
            height: auto;
            margin-bottom: 20px; /* Espaço para o próximo link */
        }

        .mobile-only {
            display: inline-block; /* Revela o texto HOME */
            font-size: 22px;
        }

        .nav-link {
            position: relative;
            left: auto !important;
            width: auto !important;
            height: auto;
            margin: 20px 0;
            transform: none;
            padding-left: 0;
        }

        .nav-text { font-size: 22px; color: #000 !important; }

        .nav-text.white {
            border: 2px solid #000;
            padding: 10px 20px;
            border-radius: 4px;
        }
    }
</style>