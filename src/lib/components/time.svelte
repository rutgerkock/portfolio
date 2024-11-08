<script>
    import { onMount } from 'svelte'; 

    export let updatePercentage; 
    export let currentTime;

    function updateTime() {
        const now = new Date();
        currentTime = now.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });


        const totalMinutesInDay = 24 * 60; 
        const currentMinutes = now.getHours() * 60 + now.getMinutes(); 
        const percentage = (currentMinutes / totalMinutesInDay) * 100; 
        
        updatePercentage(percentage);
    }

    onMount(() => {
        updateTime(); 
        const interval = setInterval(updateTime, 1000); 

        return () => clearInterval(interval); 
    });
</script>

{currentTime}