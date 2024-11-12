<script>
    export let data;
    const { project } = data;
    import Nav from '../../../lib/components/Nav.svelte';
</script>

<main>
    <h1>{project.title}</h1>
    <Nav 
        link1={{ href: '/werk', name: 'Werk' }} 
        link2={{ href: '/', name: 'Home' }} 
    />
    <section>
        <p>{project.description}</p>
    </section>

</main>

<style>
    main {
        flex-direction: column;
        padding: var(--padding-2);
    }

    h1 {
        opacity: 0;
        text-align: left;
        animation: reveal 1s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        text-wrap: nowrap;
    }
    
    section {
        padding-top: var(--padding-5);
    }

    section p {
        opacity: 0;
        text-wrap: nowrap;
        animation: reveal 1s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
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
