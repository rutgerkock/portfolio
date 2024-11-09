<script>
    import Circle from '../lib/components/Circle.svelte';
    import Nav from '../lib/components/Nav.svelte';
</script>

<main>
    <h1>Rutger Kock</h1>
    <Circle main={true} />
    <Nav 
        link1={{ href: '/contact', name: 'Contact' }} 
        link2={{ href: '/werk', name: 'Werk' }} 
    />
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
