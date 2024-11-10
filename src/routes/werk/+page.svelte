<script>
    import Circle from '../../lib/components/Circle.svelte';
    import Nav from '../../lib/components/Nav.svelte';
    import Item from '$lib/components/Item.svelte';
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
            <Item title={"Project 1"}/>
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
        mask-image: linear-gradient(to bottom, black 80%, transparent);
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
