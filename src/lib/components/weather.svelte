<script>
    import { onMount } from 'svelte'; 

    let city = 'Utrecht';
    let weather;
    let temp;

    async function getWeather() {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52d2a223715e49a67159446b130d4482&lang=nl&units=metric`
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
    <p>{temp.toFixed(0) + '°C'}</p>
{:else}
    <p>. . .</p>
{/if}
