<script>
    import Circle from '../../lib/components/Circle.svelte';
    import Nav from '../../lib/components/Nav.svelte';
</script>

<main class="werk">
    <h1 class="title">Werk</h1>
    <Circle />
    <Nav 
        link1={{ href: '/', name: 'Home' }} 
        link2={{ href: '/contact', name: 'Contact' }} 
    />
    <section>
        <ul class="werkList">
            <li>
                <button popovertarget="my-popover-1">
                    <p>Project</p>
                </button>
            </li>
            <li><p>Project</p></li>
            <li><p>Project</p></li>
            <li><p>Project</p></li>
            <li><p>Project</p></li>
        </ul>
        <button popovertarget="my-popover-1">
        <div popover id="my-popover-1">
            <p>Bieb in Bloei</p>
            <p>De Buurtcampus is een dynamische, laagdrempelige plek waar iedereen zich 
                welkom en uitgenodigd voelt om kennis op te doen, te ontwikkelen en te delen. 
                Op het platform Bieb in Bloei krijgen deze projecten een gezicht.
            </p>
            <img src="./bieb-in-bloei-1.png" alt="Bieb in bloei afbeelding 2">
            <img src="./bieb-in-bloei-2.png" alt="Bieb in bloei afbeelding 2">
        </div>
        </button>
    </section>
</main>

<style>
    main {
        padding: var(--padding-2);
        flex-direction: column; 
        background-color: var(--highlight);
    }

    section {
        position: relative;
        z-index: 998;
    }

    button {
        border: none;
        background-color: transparent;
        text-align: left;
    }

    .title {
        opacity: 0;
        animation: reveal 1s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        text-align: left;
    }

    .werkList {
        margin-top: var(--padding-5);
        height: 60vh;
        overflow-y: scroll;
    }

    p {
        font-size: var(--title-regular);
        line-height: 1;
    }

    div {
        background-color: var(--highlight);
        border: none;
        padding: var(--padding-2);
        width: 100vw;
        max-height: 100vh;
        overflow-y: auto;
        opacity: 0;
        transform: translateX(2-0px);
        animation: popoverReveal 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    }

    div p:first-of-type {
        font-size: var(--title-regular);
    }

    div p {
        font-size: var(--text-big);
        padding-top: var(--padding-3);
        padding-bottom: var(--padding-2);
    }

    div img {
        width: 100%;
    }

    .werkList li {
        opacity: 0;
        animation: reveal 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        position: relative;
    }

    .werkList li:nth-child(1) {animation-delay: 0.45s;}
    .werkList li:nth-child(2) {animation-delay: 0.50s;}
    .werkList li:nth-child(3) {animation-delay: 0.55s;}
    .werkList li:nth-child(4) {animation-delay: 0.60s;}
    .werkList li:nth-child(5) {animation-delay: 0.65s;}

    @keyframes reveal {
        0% {
            opacity: 0;
            letter-spacing: -0.5em;
            margin-right: 200%;
        }
        80% {
            opacity: 1;
            letter-spacing: 0;
            margin-right: 0;
        }
        100% {
            opacity: 1;
            letter-spacing: 0;
            margin-right: 0;
        }
    }

    @keyframes popoverReveal {
        0% {
            opacity: 0;
            transform: translateX(-20px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media (min-width: 768px) {
        div {
            background-color: var(--highlight);
            border: none;
            padding: var(--padding-2);
            width: 40vw;
            min-width: 30rem;
            margin-left: 20rem;
        }
    }
</style>
