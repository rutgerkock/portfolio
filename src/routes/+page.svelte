<script>
    import Circle from '../lib/components/Circle.svelte';
</script>

<main>
    <h1>RUTGER KOCK</h1>
    <Circle />
    <ul>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/werk">Werk</a></li>
    </ul>
</main>

<style>
    h1 {
        opacity: 0;
        text-wrap: wrap;
        font-size: 20vw;
        line-height: .9;
        margin-top: var(--padding-3);
        animation: revealMobile 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    }

    ul {
        position: fixed;
        left: var(--padding-2);
        bottom: var(--padding-3);
        display: flex;
        gap: var(--padding-2);
        font-size: var(--title-small);
        color: var(--light);
        opacity: 0; 
        animation: reveal 1s .4s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        text-wrap: nowrap;
        z-index: 999;
    }

    ul li a {
        cursor: pointer;
        position: relative; 
        text-decoration: none;
        color: var(--light); 
        transition: color 0.3s ease;
    }

    ul li a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px; 
        background-color: var(--light); 
        transform: scaleX(0); 
        transform-origin: bottom right;
        transition: transform 0.3s ease;
    }

    ul li a:hover {
        color: var(--highlight-color); 
    }

    ul li a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left; 
    }

    @keyframes revealMobile {
        0% {
            opacity: 0;

        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes reveal {
        0% {
            opacity: 0;
            letter-spacing: -0.5em; 
            margin-right: 200%;
        }
        80% {
            opacity: 1;
            letter-spacing: 0; 
            margin-right: 0; 
        }
        100% {
            opacity: 1;
            letter-spacing: 0; 
            margin-right: 0; 
        }
    }



    @media (min-width: 768px) {
        h1 {
            text-wrap: nowrap;
            font-size: calc(13.3vw);
            line-height: 1.4;
            margin-top: 0;
            animation: reveal 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
            opacity: 0; 
            letter-spacing: -0.5em; 
        }
    }
</style>
