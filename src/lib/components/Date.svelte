<script>
    import { onMount } from 'svelte';
    let currentMonthYear = '';

    function formatMonthYear() {
        const now = new Date();
        const month = now.toLocaleString('default', { month: 'long' });
        const year = now.getFullYear().toString().slice(-2);
        currentMonthYear = `${month} '${year}`;
    }

    onMount(() => {
        formatMonthYear();
    });
</script>

<h2>{currentMonthYear}</h2>
