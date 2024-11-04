<script>
    import Time from '$lib/components/time.svelte';

    let percentage = 0; 
    let currentTime = ''; 

    const outerRadius = 295; 
    const innerRadius = 145; 
    const fillRadius = (outerRadius + innerRadius) / 2; 
    const fillCircumference = 2 * Math.PI * fillRadius; 

    function updatePercentage(newPercentage) {
        percentage = newPercentage; 
        fillOffset = fillCircumference * (1 - (percentage / 100)); 
    }

    let fillOffset = fillCircumference; 
</script>

<Time {updatePercentage} bind:currentTime />

<svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="300" cy="300" r={outerRadius} stroke="#1E7F6D" stroke-width="10" />
    <circle cx="300" cy="300" r={innerRadius} stroke="#1E7F6D" stroke-width="10" />
    <circle 
        cx="300" 
        cy="300" 
        r={fillRadius}
        stroke="#1E7F6D"
        stroke-width={outerRadius - innerRadius}
        stroke-dasharray={fillCircumference} 
        stroke-dashoffset={fillOffset}
        transform="rotate(-45 300 300)"
        fill="none" 
    />
    <text 
        x="300" 
        y="290" 
        text-anchor="middle" 
        dominant-baseline="middle"
        font-size="48" 
        font-family="raleway"
        font-weight="600"
        letter-spacing="2"
        fill="#000">
        {currentTime}
    </text>
    <text 
        x="300" 
        y="330" 
        text-anchor="middle" 
        dominant-baseline="middle"
        font-size="24" 
        font-family="raleway"
        font-weight="300"
        fill="#000">
        Utrecht, NL
    </text>
</svg>

<style>

</style>
