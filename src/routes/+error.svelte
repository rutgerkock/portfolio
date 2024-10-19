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
        display: flex;
        flex-direction: column;
    }

    a:hover {
        text-decoration: underline;
    }
</style>