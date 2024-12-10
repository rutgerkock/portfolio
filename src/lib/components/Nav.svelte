<script>
    export let link1 = { href: '/contact', name: 'Contact' };
    export let link2 = { href: '/werk', name: 'Werk' };
</script>

<nav>
    <ul>
        <li><a href={link1.href}>{link1.name}</a></li>
        /* <li><a href={link2.href}>{link2.name}</a></li> */
    </ul>
</nav>

<style>
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
</style>
