<script>
    import Time from './time.svelte';
    import Date from './Date.svelte';
    import Weather from './weather.svelte';

    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    const outerRadius = 295;
    const innerRadius = 145;
    const fillRadius = (outerRadius + innerRadius) / 2;
    const fillCircumference = 2 * Math.PI * fillRadius;

    let percentage = tweened(0, { duration: 1000, easing: cubicOut });
    let currentTime = '';

    function updatePercentage(newPercentage) {
        percentage.set(newPercentage); 
    }

    $: fillOffset = fillCircumference * (1 - $percentage / 100);
</script>

<Time {updatePercentage} bind:currentTime />

<button popovertarget="my-popover">
    <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="300" r={outerRadius} stroke-width="10" />
        <circle cx="300" cy="300" r={innerRadius} stroke-width="10" />
        <circle 
            cx="300" 
            cy="300" 
            r={fillRadius}
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
            font-weight="700"
            letter-spacing="2">
            {currentTime.slice(0, 5)}
        </text>
        <text 
            class="text-1"
            x="300" 
            y="330" 
            text-anchor="middle" 
            dominant-baseline="middle"
            font-size="24" 
            font-family="raleway"
            font-weight="300">        
            Fullscreen
        </text>
        <text 
            class="text-2"
            x="300" 
            y="330" 
            text-anchor="middle" 
            dominant-baseline="middle"
            font-size="24" 
            font-family="raleway"
            font-weight="300">        
            Utrecht, NL
        </text>
    </svg>
</button>

<button popover id="my-popover" popovertarget="my-popover">
    <div>
        <ul>
            <li><h3><Date formatType="fullDate"/></h3></li>
            <li><h3><Weather /></h3></li>
        </ul>
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r={outerRadius} stroke-width="10" />
            <circle cx="300" cy="300" r={innerRadius} stroke-width="10" />
            <circle 
                cx="300" 
                cy="300" 
                r={fillRadius}
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
                font-weight="700"
                letter-spacing="2">
                {currentTime}
            </text>
            <text 
                class="text-1"
                x="300" 
                y="330" 
                text-anchor="middle" 
                dominant-baseline="middle"
                font-size="24" 
                font-family="raleway"
                font-weight="300">        
                Close
            </text>
            <text 
                class="text-2"
                x="300" 
                y="330" 
                text-anchor="middle" 
                dominant-baseline="middle"
                font-size="24" 
                font-family="raleway"
                font-weight="300">        
                Utrecht, NL
            </text>
        </svg>
    </div>
</button>

<style>
    button:first-of-type {
        position: absolute;
        right: -12vw;
        margin-top: 22rem;
        width: 40vw;
        height: 40vw;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    .text-1 {
        visibility: hidden;
    }

    svg:hover .text-1 {
        visibility: visible;
    }

    svg:hover .text-2 {
        visibility: hidden;
    }

    button:nth-of-type(2) {
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: var(--background);
    }
    
    button:nth-of-type(2) div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: var(--padding-5);
    }

    button ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: block;
        text-align: left;
    }

    button ul li {
        padding: var(--padding-1) 0;
    }


    @media (prefers-color-scheme: dark) {
        button:nth-of-type(2) {
            background-color: var(--background-dark);
        }
    }
</style>
