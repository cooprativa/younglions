<script>
    export let label;
    export let href = '#';
    export let active = false;
</script>

<a href={href} class="nav-item" class:active>
    <svg
            viewBox="0 0 413 67"
            preserveAspectRatio="none"
            aria-hidden="true"
    >
        <path
                d="M0,20
         C20,0 60,0 80,20
         L333,20
         C353,0 393,0 413,20
         L413,67
         L0,67
         Z"
        />
    </svg>

    <span>{label}</span>
</a>

<style>
    .nav-item {
        position: relative;
        width: 180px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
    }

    svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        fill: #FFD400;
        transition: fill 0.2s ease, transform 0.15s ease;
    }

    span {
        position: relative;
        z-index: 1;
        font-weight: 600;
        color: #000;
        pointer-events: none;
    }

    .nav-item:hover svg {
        fill: #ffbf00;
        transform: translateY(1px);
    }

    .nav-item.active svg {
        fill: #ffb000;
    }
</style>
