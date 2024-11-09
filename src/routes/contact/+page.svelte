<script>
    import Circle from '../../lib/components/Circle.svelte';
    import Nav from '../../lib/components/Nav.svelte';
</script>

<main class="contact">
    <h1>Contact</h1>
    <Circle />
    <Nav 
        link1={{ href: '/', name: 'Home' }} 
        link2={{ href: '/werk', name: 'Werk' }} 
    />
    <section>
        <ul class="contactList">
            <li>
                <p class="blah">
                    Creatieve front-end developer met een passie voor nieuwe techniek en oog voor design.
                </p>
                <p class="blah">
                    Gespecialiseerd in dynamische, toegankelijke en geoptimaliseerde websites.
                </p>
                <p class="blah">
                    Verder ook enthousiast over luchtgekoelde Porsches.
                </p>
            </li>
            <li><a href="mailto:kock.rutger@gmail.com" target="_blank">kock.rutger@gmail.com</a></li>
            <li><a href="tel:+31 06 15471956" target="_blank">(+31) 06 15471956</a></li>
            <li><a href="https://www.linkedin.com/in/rutger-kock-4069b2337" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/rutgerkock" target="_blank">GitHub</a></li>
            <li><a href="https://www.google.com/maps/dir/?api=1&destination=utrecht" target="_blank">Utrecht, NL</a></li>
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

    .contactList {
        margin-top: var(--padding-5);
    }

    .contactList li {
        opacity: 0;
        animation: reveal 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        font-size: var(--title-small);
        text-wrap: nowrap;
    }

    .contactList li:nth-child(1) { 
        animation-delay: 0.45s; 
        margin-bottom: var(--padding-35); 
        display: none;
    }
    .contactList li:nth-child(2) { animation-delay: 0.5s; }
    .contactList li:nth-child(3) { animation-delay: 0.55s; }
    .contactList li:nth-child(4) { animation-delay: 0.6s; }
    .contactList li:nth-child(5) { animation-delay: 0.65s; }
    .contactList li:nth-child(6) { animation-delay: 0.7s; }

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
        .contactList li:nth-child(1) { 
            display: block;
        }

        .blah { 
            max-width: 33rem;
            text-wrap: nowrap;
        }
        
        .contactList a   {
            font-size: var(--title-regular);
        }

    }
</style>
