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
        <p>Aan deze pagina wordt nog gewerkt</p>
        <img src="https://media.giphy.com/media/Mah9dFWo1WZX0WM62Q/giphy.gif?cid=790b7611w4ti3n6ziqy94np56t8lwkqnpk27b0rrb7aakzh3&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Construction gif" class="construction-gif" />
    </section>
</main>

<style>
    main {
        padding: var(--padding-2);
        flex-direction: column; 
        background-color: var(--highlight);
    }

    h1 {
        text-align: left;
        opacity: 0;
        animation: reveal 1s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    }

    p {
        margin-top: var(--padding-5);
        opacity: 0;
        animation: reveal 1s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        text-wrap: nowrap;
    }

    section {
        position: relative;
        overflow: hidden;
        z-index: 998;
    }

    img {
        max-width: 60vw;
        margin-top: var(--padding-2);
        opacity: 0;
        animation: reveal 1s .4s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    }

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
