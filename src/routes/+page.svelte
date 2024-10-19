<script>
    import Weather from '$lib/components/weather.svelte';
    import Time from '$lib/components/time.svelte';
</script>



<main>
    <section class="left_section">
        <div class="title_section">
            <p>Kock</p>
            <h1>Rutger</h1>
        </div>

        <p class="description">
            Front-end developer & designer in 
            Utrecht, Nederland.
            Daarnaast fotografeer ik graag Porsches.
        </p>

        <div class="lower_section">

            <div class="utrecht_details">
                <p>Utrecht, Netherlands</p>
                <div>
                    <Weather />
                    <Time />
                </div>
            </div>
            
            <div class="links">
                <a href="/werk"><span>WERK</span></a>
                <a href="/over"><span>OVER</span></a>
                <a href="/contact"><span>CON</span><span>TACT</span></a>
            </div>
            

        </div>
    </section>

    <section class="img_section">
        <img 
            loading="lazy"
            src="/img/main_img.jpg" 
            alt="Een prachtige Porsche 930 turbo in het grijs met een zwart interieur."
        />
    </section>
</main>


<style>
    p {
        white-space: pre-line;
    }

    main {
        display: grid;
        grid-template-columns: 1fr 1fr; 
        height: calc(100vh - var(--padding-4) * 2);
        padding: var(--padding-4);
    }

    .left_section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title_section {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        flex: 0 0 40%;
    }

    .title_section h1{
        padding-left: var(--padding-4);
    }

    .lower_section {
        display: flex;
        flex-direction: row;
        min-width: 31rem;
        min-height: 4.5rem;
    }

    .links {
        display: flex;
        flex-direction: row;
        width: 15rem;    
    }

    .links a {
        margin-left: -2rem;
        background-color: var(--blue);
        color: var(--light);
        clip-path: polygon(44% 0, 100% 0%, 56% 100%, 0% 100%);
        padding: 0 var(--padding-3) 0 var(--padding-1);
        width: 7rem;
        display: inline-flex;
        align-items: center; 
        justify-content: center; 
    }

    .links a span {
        rotate: -57deg;
        padding-top: var(--padding-2);
        padding-left: var(--padding-1);
    }

    .links a:last-of-type {
        padding-left: var(--padding-6);
        display: flex;
        flex-direction: column;
        clip-path: polygon(44% 0, 100% 0%, 100% 100%, 0% 100%);
    }

    .links a:last-of-type span {
        rotate: 0deg;
        padding: 0;
    }

    .links a:last-of-type span:first-of-type {
        padding-left: var(--padding-3);
        padding-bottom: var(--padding-1);
    }


    .utrecht_details {
        background-color: var(--blue);
        display: flex;
        flex-direction: column;
        color: var(--light);
        clip-path: polygon(0% 0, 100% 0%, 80% 100%, 0% 100%);
        padding: 0 var(--padding-4) 0 var(--padding-1);
    }

    .utrecht_details p {
        font-weight: var(--font-semibold);
    }

    .utrecht_details div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 90%;
    }

    .utrecht_details p {
        color: var(--light);

    }

    .img_section {
        display: flex; 
        justify-content: flex-end; 
    }

    img {
        width: 40rem;
        max-width: 40vw;
        height: calc(100vh - var(--padding-4) * 2); 
    }

</style>