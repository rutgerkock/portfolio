<script>
    import Circle from '../../lib/components/Circle.svelte';
    import Nav from '../../lib/components/Nav.svelte';

    export let data;
	const { projects } = data;
</script>

<main>
    <h1>Werk</h1>
    <Circle />
    <Nav 
        link1={{ href: '/contact', name: 'Contact' }} 
        link2={{ href: '/', name: 'Home' }} 
    />
    <section>
        <ul class="werkList">
            <li>
                <p class="blah">
                    Projecten waar ik tijdens mijn opleiding aan de HvA, zelfstandig of voor een opdrachtgever aan heb gewerkt.
                </p>
            </li>
            {#each projects as project}
                <li class="list"><a href="/werk/{project.id}">{project.title}</a></li>
            {/each}
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
        z-index: 998;
    }

    h1 {
        opacity: 0;
        animation: reveal 1s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        text-align: left;
    }

    .werkList {
        margin-top: var(--padding-5);
    }

    .werkList li {
        opacity: 0;
        animation: reveal 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        font-size: var(--title-small);
        text-wrap: nowrap;
    }

    .werkList li:nth-child(1) { 
        animation-delay: 0.45s; 
        margin-bottom: var(--padding-35); 
        text-wrap: wrap;
    }
    .werkList li:nth-child(2) { animation-delay: 0.5s; }
    .werkList li:nth-child(3) { animation-delay: 0.55s; }
    .werkList li:nth-child(4) { animation-delay: 0.6s; }
    .werkList li:nth-child(5) { animation-delay: 0.65s; }
    .werkList li:nth-child(6) { animation-delay: 0.7s; }    
    
    .list a{
        position: relative;
        transition: padding-left 0.3s ease;
    }

    .list a:hover {
        padding-left: var(--padding-2);
    }

    .list a::after {
        content: '';
        position: absolute;
        bottom: var(--padding-1);
        left: var(--padding-2);
        width: calc(100% - (var(--padding-2)));
        height: 3px; 
        background-color: var(--light); 
        transform: scaleX(0); 
        transform-origin: bottom right;
        transition: transform 0.3s ease;
    }

    .list a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left; 
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

    @media (min-width: 768px) {
        .werkList a   {
            font-size: var(--title-regular);
        }

        .werkList li:nth-child(1) { 
            display: block;
        }

        .blah { 
            max-width: 33rem;
        }

    }
</style>
