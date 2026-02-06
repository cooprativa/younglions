<script>
</script>

<nav class="nav">
  <div class="nav-bg">
    <img src="/svg/nav/rogerhatchelnav.svg" alt="" class="nav-svg" />
  </div>
  <div class="nav-overlay">
    <a href="#home" class="nav-home" aria-label="Home">
      <span class="sr-only">Home</span>
    </a>
    <a href="#sobre" class="nav-link link-sobre">
      <span class="nav-text">SOBRE</span>
    </a>
    <a href="#juri" class="nav-link link-juri">
      <span class="nav-text">JÚRI</span>
    </a>
    <a href="#roger" class="nav-link link-roger">
      <span class="nav-text">ROGER HATCHUEL</span>
    </a>
    <a href="#historia" class="nav-link link-historia">
      <span class="nav-text">A HISTÓRIA</span>
    </a>
    <a href="#vencedores" class="nav-link link-vencedores">
      <span class="nav-text">VENCEDORES</span>
    </a>
  </div>
</nav>

<style>
    .nav {
        position: relative;
        width: 100%;
    }

    .nav-bg {
        width: 100%;
        display: block;
    }

    .nav-svg {
        width: 100%;
        height: auto;
        display: block;
    }

    .nav-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    .nav-home {
        position: absolute;
        left: 3%;
        width: 2.5%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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

    .link-sobre {
        left: 8%;
        width: 18.3%;
    }

    .link-juri {
        left: 26%;
        width: 18.2%;
    }

    .link-roger {
        left: 44.5%;
        width: 18.3%;
    }

    .link-historia {
        left: 62.5%;
        width: 18.2%;
    }

    .link-vencedores {
        left: 81%;
        width: 22.2%;
    }

    .nav-text {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 0.9375rem;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
        white-space: nowrap;
    }

    @media (max-width: 1024px) {
        .nav-text {
            font-size: 0.8rem;
        }

        .nav-link {
            padding-left: 0.75rem;
        }
    }

    @media (max-width: 768px) {
        .nav-text {
            font-size: 0.7rem;
            letter-spacing: 0.5px;
        }

        .nav-link {
            padding-left: 0.5rem;
        }
    }

    @media (max-width: 480px) {
        .nav-text {
            font-size: 0.55rem;
            letter-spacing: 0.3px;
        }

        .nav-link {
            padding-left: 0.35rem;
        }
    }
</style>
