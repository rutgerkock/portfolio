<script>
    import { onMount } from 'svelte'; 
    import { PUBLIC_API_KEY } from '$env/static/public';

    let city = 'Utrecht';
    let weather;
    let temp;

    async function getWeather() {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${PUBLIC_API_KEY}&lang=nl&units=metric`
        );

        if (!res.ok) {
            console.error('Error fetching weather:', res.status, await res.text());
            return;
        }

        weather = await res.json();
        temp = weather.main.temp; 
    }

    onMount(() => {
        getWeather(); 
    });
</script>

{#if weather}
    <p>{temp.toFixed(1) + '°C'}</p>
{:else}
    <p>. . .</p>
{/if}

<style>
    p {
        color: var(--light);
        font-weight: var(--font-semibold);
    }
</style>