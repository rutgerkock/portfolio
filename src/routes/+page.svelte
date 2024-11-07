<script>
    import Circle from '../lib/components/Circle.svelte';
    import Time from '../lib/components/Time.svelte';
    import Date from '../lib/components/Date.svelte';
</script>

<main>
    <Circle />
    <Time />
    <Date />

</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #EBEDEA;
        flex-direction: column;
    }
</style>
