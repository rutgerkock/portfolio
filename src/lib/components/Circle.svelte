<script>
    import Time from './time.svelte';

    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    let percentage = tweened(50, { duration: 1000, easing: cubicOut });
    let currentTime = '';

    function updatePercentage(newPercentage) {
        percentage.set((newPercentage / 2) + 50); 
    }

    const outerRadius = 260;
    const innerRadius = 150;
    const centerX = 300;
    const centerY = 300;

    const outerCircumference = 2 * Math.PI * outerRadius;
    const innerCircumference = 2 * Math.PI * innerRadius;

    $: outerStrokeOffset = outerCircumference * (1 - $percentage / 100);
    $: innerStrokeOffset = innerCircumference * (1 - $percentage / 100);

    $: angle = 2 * Math.PI * $percentage / 100;

    const inwardFactor = -4;  
    const lengthFactor = -8;  

    $: timeX = centerX + (outerRadius - inwardFactor) * Math.cos(0);
    $: timeY = centerY + (outerRadius - inwardFactor) * Math.sin(0);

    $: textOffsetY = 15;  
    $: textOffsetX = 60;  
</script>

<Time {updatePercentage} bind:currentTime />

<svg width="90vw" height="90vw" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <circle
        cx={centerX}
        cy={centerY}
        r={outerRadius}
        fill="none"
        stroke="#3F3F3F"
        stroke-width="8"
        stroke-dasharray={outerCircumference}
        stroke-dashoffset={outerStrokeOffset}
    />

    <circle
        cx={centerX}
        cy={centerY}
        r={innerRadius}
        fill="none"
        stroke="#3F3F3F"
        stroke-width="8"
        stroke-dasharray={innerCircumference}
        stroke-dashoffset={innerStrokeOffset}
    />

    <line
        x1={centerX + (outerRadius - inwardFactor) * Math.cos(angle)}
        y1={centerY + (outerRadius - inwardFactor) * Math.sin(angle)}
        x2={centerX + (innerRadius - inwardFactor + lengthFactor) * Math.cos(angle)}
        y2={centerY + (innerRadius - inwardFactor + lengthFactor) * Math.sin(angle)}
        stroke="#3F3F3F"
        stroke-width="8"
    />

    <line
        x1={centerX + (outerRadius - inwardFactor) * Math.cos(0)}
        y1={centerY + (outerRadius - inwardFactor) * Math.sin(0)}
        x2={centerX + (innerRadius - inwardFactor + lengthFactor) * Math.cos(0)}
        y2={centerY + (innerRadius - inwardFactor + lengthFactor) * Math.sin(0)}
        stroke="#3F3F3F"
        stroke-width="8"
    />

    <text
        x={timeX - textOffsetX}
        y={timeY - textOffsetY}
        fill= "#ffffff"
        font-size="20"
        font-family="Bebas Neue, sans-serif"
        text-anchor="middle"
        alignment-baseline="middle">
        {currentTime}
    </text>
</svg>


<style>
    svg {
        position: fixed;
        bottom: -42vw;
        right: 0;
        z-index: 997;
    }

    text {
        opacity: 0; 
        animation: reveal 1s .4s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        text-wrap: nowrap;
    }

    @keyframes reveal {
        0% {
            opacity: 0;
            transform: translateY(100%); 
        }
        80% {
            opacity: 1;
            transform: translateY(0); 
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>