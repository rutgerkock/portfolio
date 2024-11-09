<script>
    import { page } from '$app/stores';
</script>

<main>
    <section>
        <h2>Er gaat iets mis :&#40;</h2>
        <p>{$page.status}: {$page.error.message}</p>
        <a href="/">&rarr; Terug naar de Home</a>
    </section>
</main>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: var(--padding-1);
        width: 100vw;
        height: 100vh;
    }

    a {
        position: relative;
        font-size: var(--text-big);
        margin-top: var(--padding-4);
        padding: var(--padding-1);
        border: 1px solid var(--light);
        border-radius: 10px;
        text-decoration: none;
        color: var(--light);
        transition: all 0.3s ease;
    }

    a:hover {
        transform: scale(1.05); 
    }
</style>
