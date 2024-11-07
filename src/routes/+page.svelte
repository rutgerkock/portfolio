<script>
    import Circle from '../lib/components/Circle.svelte';
    import Date from '../lib/components/Date.svelte';
    import Nav from '../lib/components/Nav.svelte';
</script>

<Nav />

<main>
    <section class="left">
        <div class="title">
            <h1>Rutger</h1>
            <p>Front-end developer & designer</p>
        </div>
    
        <p>
            Creatieve front-end developer met een passie voor nieuwe techniek en oog voor design. 
            Gespecialiseerd in dynamische, toegankelijke en geoptimaliseerde websites. 
            Verder ook enthousiast over luchtgekoelde Porsches.
        </p>
    
        <div>
            <p>Vaardigheden:</p>
            <p>
                HTML, CSS, JS, Figma, Svelte, Enhance, Photoshop, Lightroom
            </p>
        </div>
    </section>
    <Circle />
    <section class="projects" id="werk">
        <h2>Projecten</h2>
    </section>
    <section class="calender">
        <Date />
    </section>
</main>

<style>
    main {
        display: grid;
        height: 100%;
        width: 100vw;
        padding: 0 var(--padding-4);
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 2fr 1fr; 
        grid-template-areas: 
        "left ."
        "projects calender"
        "footer footer";
    }

    .title { grid-area: title; }
    .projects { grid-area: projects; }
    .calender { grid-area: calender; }

    section {
        margin-bottom: var(--padding-5);
    }

    .title p { 
        margin-top: -1.5rem; 
        letter-spacing: 0;
        font-size: var(--text-regular);
        text-decoration: underline;
    }
    .title h1 { 
        margin-left: -.77rem; 
    }

    .left {
        width: 40rem;
        display: flex;
        flex-direction: column;
        gap: var(--padding-3);
        margin-top: var(--padding-5);
    }

    .projects {
        position: relative;
        padding-left: var(--padding-2);
    }

    .projects::after, .calender::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        width: .5rem;
        background: var(--highlight);
        pointer-events: none;
        border-radius: var(--border-radius-1);
    }

    .calender {
        position: relative;
        padding-left: var(--padding-2);
        align-self: end;
    }

    @media (prefers-color-scheme: dark) {
        .projects::after, .calender::after {
            background: var(--highlight-dark);
        }
    }

</style>
