<script>
	import { page } from '$app/stores';
</script>

<section>
    <h1>Er gaat iets mis :&#40;</h1>
    <p>{$page.status}: {$page.error.message}</p>
    <a href="/">Terug naar de Home</a>
</section>

<style>
    section {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    a:hover {
        text-decoration: underline;
    }
</style>