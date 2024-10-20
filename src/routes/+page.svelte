<script>
    import Menu from '$lib/components/Menu.svelte';
</script>

<main class="grid-layout">

    <h1 class="top">Rutger</h1>

    <img 
        class="main_image"
        loading="lazy"
        src="/img/main_img.jpg" 
        alt="Een prachtige Porsche 930 turbo in het grijs met een zwart interieur."
    />

    <p class="description">
        Front-end developer & designer in 
        Utrecht, Nederland.
        Daarnaast fotografeer ik graag Porsches.
    </p>

    <section class="buttons">
        <Menu />
    </section>
</main>

<style>
    /* Global Styles */
    p {
        white-space: pre-line;
    }

    main.grid-layout {
        display: grid;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 0fr 1fr 1fr 1fr;
        grid-template-areas: 
            ". title title title title"
            ". image image image image"
            "description description description description description"
            "menu menu menu menu menu";
    }

    /* Layout */
    .top {
        grid-area: title;
        margin-top: var(--padding-4); 
        display: flex;
        flex-direction: row;
    }

    .main_image {
        grid-area: image;
        margin-top: var(--padding-1);
        height: auto; 
        max-height: 45vh;
        width: 100%;
        object-fit: cover;
    }

    .description {
        grid-area: description;
        padding-left: var(--padding-2);
        padding-top: var(--padding-2);
    }

    .buttons {
        grid-area: menu;
    }

    /* Media Queries */
    @media (min-width: 768px) {
        main {
            height: calc(100% - var(--padding-4) * 2);
        }

        main.grid-layout {
            padding: var(--padding-2);
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 3fr 1fr;
            grid-template-areas: 
                "title image"
                "description image"
                "desktop image"
                "menu image";
        }

        .top, .main_image {
            margin: 0;

        }

        .main_image {
            height: 100%;
            max-width: none;
            max-height: none;
        }

        .description {
            display: flex;
            align-items: flex-end;
            grid-area: description;
            padding-left: 0;
            padding-top: 0;
        }
    }
</style>
