<svelte:head>
    <title>Rutger Kock | Contact</title>
</svelte:head>


<main class="grid-layout">
    
    <a href="/" class="return">&lt; /Rutger</a>

    <p class="text">
        Wil je mij helpen met een Porsche kopen?
        Een project in gedachten?
        Behoefte aan een website?
        Een auto die op de foto mag?
    </p>

    <img 
        class="img1"
        loading="lazy"
        src="/img/img1.jpg" 
        alt="Een prachtige Porsche 964 turbo in het rood met een zwart interieur."
    />
    <img 
        class="img2"
        loading="lazy"
        src="/img/img2.jpg" 
        alt="Een prachtige Porsche 930 turbo in het grijs met een zwart interieur."
    />

    <span class="arrow">------&#62;</span>


    <p class="contact">
        <a href="mailto:kock.rutger@gmail.com">kock.rutger@gmail.com</a>
        <a href="tel:(+31) 06 15471956">(+31) 06 15471956</a>
    </p>

    <h1 class="title">Contact</h1>

    <p class="copyright">© 2024</p>

</main>

<style>
    main.grid-layout {
        display: grid;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        height: 100vh;
        grid-template-columns: 1fr 2fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        padding: var(--padding-4);
        grid-template-areas: 
            "return . . ."
            "paragraph paragraph image1 image2"
            "arrow . . contact"
            "title title . copyright"
    }

    .return { grid-area: return; }
    .text { grid-area: paragraph; }
    .img1 { grid-area: image1; }
    .img2 { grid-area: image2; }
    .arrow { grid-area: arrow;}
    .contact { grid-area: contact; }
    .title { grid-area: title; }
    .copyright { grid-area: copyright; }

    h1 {
        font-size: var(--font-huge);
        padding: 0;
    }

    img {
        width: 30vh;
        aspect-ratio: 10/16;
        object-fit: cover;
        margin-right: var(--padding-2);
    }

    .text {
        display: flex;
        flex-direction: column;
        white-space: pre-line;
        display: flex;
        justify-content: end;
    }

    .contact {
        display: flex;
        flex-direction: column;
    }

    .contact a {
        margin-top: var(--padding-2);
    }
    
    .copyright {
        display: flex;
        justify-content: flex-end;
        align-items: end;
    }

    .arrow {
        padding-top: var(--padding-2);
    }

    /* Media Queries */
    @media (min-width: 768px) {
    }
</style>
