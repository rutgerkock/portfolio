<script>
    import { page } from '$app/stores';
</script>

<main>
    <section>
        <h2>Er gaat iets mis :&#40;</h2>
        <p>{$page.status}: {$page.error.message}</p>
        <a href="/">&rarr; Terug naar home</a>
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
        opacity: 0;
        animation: reveal 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    }

    h2, p, a {
        animation: reveal 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        opacity: 0;
    }

    p {
        margin-bottom: var(--padding-4);
    }

    a {
        position: relative;
        font-size: var(--text-big);
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

    @keyframes reveal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>
