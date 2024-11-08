<script>
    import Circle from '../lib/components/Circle.svelte';
    import Date from '../lib/components/Date.svelte';
    import Nav from '../lib/components/Nav.svelte';
    import Project from '../lib/components/Project.svelte';
    import Footer from '../lib/components/Footer.svelte';
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
        <ul>
            <Project 
                title="Project 1" 
                location="Location 1" 
                date="01/20" 
                link="#/1" 
            />
            <Project 
                title="Project 2" 
                location="Location 2" 
                date="02/20" 
                link="#/2" 
            />
            <Project 
                title="Project 3" 
                location="Location 3" 
                date="03/20" 
                link="#/3" 
            />
            <Project 
                title="Project 4" 
                location="Location 4" 
                date="01/20" 
                link="#/4" 
            />
            <Project 
                title="Project 5" 
                location="Location 5" 
                date="05/20" 
                link="#/5" 
            />
            <Project 
                title="Project 6" 
                location="Location 6" 
                date="06/20" 
                link="#/6" 
            />
            <Project 
                title="Project 7" 
                location="Location 7" 
                date="07/20" 
                link="#/7" 
            />
            <Project 
                title="Project 8" 
                location="Location 8" 
                date="08/20" 
                link="#/8" 
            />
            <Project 
                title="Project 9" 
                location="Location 9" 
                date="09/20" 
                link="#/9" 
            />
            <Project 
                title="Project 10" 
                location="Location 10" 
                date="10/20" 
                link="#/10" 
            />
        </ul>        
    </section>
    <section class="calender">
        <h2><Date formatType="monthYear"/></h2>
    </section>

    <section class="contact" id="contact">
        <h2>Contact</h2>
        <div>
            <p>Een project in gedachte?</p>
            <p>Behoefte aan een website?</p>
            <p>Een auto die op de foto mag?</p>
        </div>
        <ul>
            <li><a href="mailto:kock.rutger@gmail.com">kock.rutger@gmail.com</a></li>
            <li><a href="tel:(+31) 06 15471956">(+31) 06 15471956</a></li>
            <li><a href="LinkedIn">LinkedIn</a></li>
        </ul>
    </section>
    <Footer />
</main>

<style>
main {
        display: grid;
        height: 100%;
        width: 100vw;
        background-image: url(./footer_normal.svg);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 100% 25rem;
        padding: 0 var(--padding-4);
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr; 
        grid-template-areas: 
        "left ."
        "projects calender"
        "footer contact"
    }

    .title { grid-area: title; }
    .projects { grid-area: projects; }
    .calender { grid-area: calender; }
    .contact { grid-area: contact; }

    section {
        margin-bottom: var(--padding-5);
    }

    .title p { 
        margin-top: -2rem; 
        letter-spacing: 0;
        font-size: var(--text-regular);
        position: relative;
        width: min-content;
        text-wrap: nowrap;
    }

    .title p::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 1px;
        width: 100%;
        height: 1px;
        background-color: var(--background-dark);
        animation: grow var(--transition-600) forwards;
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
        width: 40rem;
        padding-bottom: var(--padding-1);
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

    .projects h2 {
        margin-bottom: var(--padding-1);
    }

    .calender {
        position: relative;
        padding-left: var(--padding-2);
        align-self: end;
    }

    .contact {
        position: relative;
        padding-left: var(--padding-2);
        align-self: end;
        margin-bottom: var(--padding-3);
    }

    .contact::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        width: .5rem;
        background: var(--background);
        pointer-events: none;
        border-radius: var(--border-radius-1);
    }
    
    .contact a, .contact p, .contact {
        color: var(--text-dark);
    }

    .contact a {
        letter-spacing: 1px;
		line-height: 1.6rem;
		font-weight: var(--light);
		font-size: var(--text-big);
    }

    .contact h2 {
        margin-bottom: var(--padding-2);
        color: var(--background);
    }

    .contact p:last-of-type {
        margin-bottom: var(--padding-3);
    }

    .contact ul li{
        text-decoration: underline;
        padding-bottom: var(--padding-2);
        font-style: italic;
    }

    @keyframes grow {
        0% {
            width: 0;
        }

        100% {
            width: 100;
        }
    }

    @media (prefers-color-scheme: dark) {
        .projects::after, .calender::after {
            background: var(--highlight-dark);
        }

        .title p::after {
            background-color: var(--background);
        }

        .contact::after {
            background: var(--background-dark);
        }

        .contact a, .contact p, .contact {
            color: var(--text);
        }

        .contact h2 {
            color: var(--background-dark);
        }

        main {
            background-image: url(./footer.svg);
        }
    }
</style>
