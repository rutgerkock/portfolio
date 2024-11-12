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
        <ul>
            {#each project.images as image}
                <li><img src={image} alt={project.title + " afbeelding"} /></li>
            {/each}        
        </ul>
    </section>

</main>

<style>
    main {
        flex-direction: column;
        padding: var(--padding-2);
        overflow-y: auto;
        padding-bottom: var(--padding-5);
    }

    h1 {
        opacity: 0;
        text-align: left;
        animation: reveal 1s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        text-wrap: nowrap;
    }
    
    section {
        margin-top: var(--padding-5);
        max-height: 70vh;
        overflow: scroll;
    }

    section p {
        opacity: 0;
        text-wrap: wrap;
        animation: reveal 1s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: var(--padding-2);
        padding-top: var(--padding-2);
    }

    ul li {
        position: relative;
        max-width: 30rem;
    }

    ul li img {
        opacity: 0;
        width: 100%;
        height: 100%;
        animation: reveal 1s 0.6s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    }

    @keyframes reveal {
        0% {
            opacity: 0;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }

    @media (min-width: 768px) {
        section p {
            opacity: 0;
            text-wrap: wrap;
            animation: reveal 1s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
            max-width: 50rem;
            font-size: var(--title-small);
            line-height: .9;
        }

        main {
            overflow-y: hidden;
            padding-bottom: 0;
        }

        ul {
            flex-direction: row;
        }
    }
</style>
