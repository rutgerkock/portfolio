<script>
    import { onMount } from 'svelte'; 

    let currentTime;

    function updateTime() {
        const now = new Date();
        currentTime = now.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
    }

    onMount(() => {
        updateTime(); 
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    });
</script>

<p>{currentTime}</p>

<style>
    p {
        color: var(--light);
    }
</style>
