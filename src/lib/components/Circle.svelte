<script>
    import Time from './time.svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    export let main = false;  // Controls text visibility and animation

    let percentage;

    $: if (main) {
        if (!percentage) {
            percentage = tweened(50, { duration: 1000, easing: cubicOut });
        }
    } else {
        percentage = tweened(50, { duration: 0, easing: cubicOut });
    }

    let currentTime = '';

    function updatePercentage(newPercentage) {
        if (percentage) {
            percentage.set((newPercentage / 2) + 50); 
        }
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

    $: textOffsetY = 18;  
    $: textOffsetX = 60;  
</script>

<Time {updatePercentage} bind:currentTime />

<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" class:inactive={!main}>
    <circle
        cx={centerX}
        cy={centerY}
        r={outerRadius}
        fill="none"
        stroke="#3F3F3F"
        stroke-dasharray={outerCircumference}
        stroke-dashoffset={outerStrokeOffset}
    />

    <circle
        cx={centerX}
        cy={centerY}
        r={innerRadius}
        fill="none"
        stroke="#3F3F3F"
        stroke-dasharray={innerCircumference}
        stroke-dashoffset={innerStrokeOffset}
    />

    <line
        x1={centerX + (outerRadius - inwardFactor) * Math.cos(angle)}
        y1={centerY + (outerRadius - inwardFactor) * Math.sin(angle)}
        x2={centerX + (innerRadius - inwardFactor + lengthFactor) * Math.cos(angle)}
        y2={centerY + (innerRadius - inwardFactor + lengthFactor) * Math.sin(angle)}
        stroke="#3F3F3F"
    />

    <line
        x1={centerX + (outerRadius - inwardFactor) * Math.cos(0)}
        y1={centerY + (outerRadius - inwardFactor) * Math.sin(0)}
        x2={centerX + (innerRadius - inwardFactor + lengthFactor) * Math.cos(0)}
        y2={centerY + (innerRadius - inwardFactor + lengthFactor) * Math.sin(0)}
        stroke="#3F3F3F"
    />

    {#if main}
        <text
            x={timeX - textOffsetX}
            y={timeY - textOffsetY}
            fill="#ffffff"
            font-family="Bebas Neue, sans-serif"
            text-anchor="middle"
            alignment-baseline="middle">
            {currentTime}
        </text>
    {/if}
</svg>

<style>
    svg {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 997;
        width: 375px;
        height: 375px;
    }

    .inactive {
        animation: inactiveMobile 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    }

    line, circle {
        stroke-width: 8;
    }

    text {
        opacity: 0; 
        animation: reveal 1s .4s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        text-wrap: nowrap;
        font-size: 2rem;
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

    @keyframes inactiveMobile {
        0% {

        } 
        100% {
            width: 375px;
            height: 375px;
            bottom: -20vh;
            right: -25vh;
            rotate: -90deg;
        }
    }

    @keyframes inactiveDesktop {
        0% {
            bottom: -42vw;
            width: 90vw;
            height: 90vw;
        } 
        100% {
            right: -25vw;
            top: 0;
            width: 100vh;
            height: 100vh;
            rotate: -90deg;
        }
    }

    @media (min-width: 768px) {
        text {
            opacity: 0; 
            animation: reveal 1s .4s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
            text-wrap: nowrap;
            font-size: 1.25rem;
        }

        svg {
            bottom: -42vw;
            width: 90vw;
            height: 90vw;
        }

        .inactive {
            animation: inactiveDesktop 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        }   
    }   
</style>
