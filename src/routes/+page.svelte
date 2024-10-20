<script>
    import Menu from '$lib/components/Menu.svelte';
    
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<main>
    <section>
        <h1 class="top">Rutger</h1>
        <img 
            class="top main_image"
            loading="lazy"
            src="/img/main_img.jpg" 
            alt="Een prachtige Porsche 930 turbo in het grijs met een zwart interieur."
        />
    </section>

    <p class="description">
        Front-end developer & designer in 
        Utrecht, Nederland.
        Daarnaast fotografeer ik graag Porsches.
    </p>

    <section class="buttons">
        <a href="mailto:kock.rutger@gmail.com" class="email" aria-label="Send Email">
            <img src="/mail.svg" alt="Email Icon"/>
        </a>
        <button class={`menu ${menuOpen ? 'open' : ''}`} aria-label="Open Menu" on:click={toggleMenu}>
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>       
    </section>

    <Menu {menuOpen} {toggleMenu} />
</main>

<style>
    /* Global Styles */
    p {
        white-space: pre-line;
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        height: 100vh; 
    }

    /* Top Section */
    .top {
        margin-left: var(--padding-8);
        width: calc(100% - var(--padding-8)); 
    }

    .main_image {
        height: auto; 
        object-fit: cover;
        padding-top: var(--padding-2);
        max-width: 27rem;
        max-height: 45vh;
    }

    /* Description */
    .description {
        padding-bottom: 14vh;
        padding-left: var(--padding-2);
    }

    /* Buttons Section */
    .buttons {
        position: absolute;
        bottom: var(--padding-2);
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%; 
        height: 3rem;
    }

    /* Menu and Email Styles */
    .menu, .email {
        height: 3.25rem;
        background-color: var(--blue);
        color: var(--light);
        transition: background-color 0.2s ease, transform 0.1s ease;
        cursor: pointer; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        text-decoration: none; 
        border: none;
        border-bottom: .25rem solid var(--light-blue);
        display: flex; 
        align-items: center; 
        font-size: var(--font-regular);
        position: relative; 
    }

    .menu {
        width: calc(100% - var(--padding-8));
        padding: var(--padding-2);
    }

    .email {
        width: 3.25rem; 
        padding: 0;
        justify-content: center; 
        margin-left: var(--padding-2);
    }

    /* Menu Icon */
    .menu::after {
        content: '';
        position: absolute;
        right: 1rem; 
        top: 50%;
        transform: translateY(-50%);
        width: 1rem; 
        height: 1rem;
        background-color: var(--light);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        transition: transform 0.3s ease;
    }

    .menu.open::after {
        transform: translateY(-50%) rotate(180deg);
    }

    /* Button Active State */
    .menu:active, .email:active {
        transform: translateY(0.15rem); 
        border-left: 0rem solid var(--light-blue); 
        border-bottom: 0rem solid var(--light-blue); 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); 
    }
</style>
