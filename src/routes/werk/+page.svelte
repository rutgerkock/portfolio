<script>
    import Circle from '../../lib/components/Circle.svelte';
    import Nav from '../../lib/components/Nav.svelte';
</script>

<main class="werk">
    <h1>Werk</h1>
    <Circle />
    <Nav 
        link1={{ href: '/', name: 'Home' }} 
        link2={{ href: '/contact', name: 'Contact' }} 
    />
    <section>
        <ul class="werkList">
            <li><p>Project</p></li>
            <li><p>Project</p></li>
            <li><p>Project</p></li>
            <li><p>Project</p></li>
            <li><p>Project</p></li>
        </ul>
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

    h1 {
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

    .werkList li {
        opacity: 0;
        animation: reveal 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
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
</style>
