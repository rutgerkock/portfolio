<script>
    import Weather from '$lib/components/weather.svelte';
    import Time from '$lib/components/time.svelte';
    export let menuOpen = false;
</script>

{#if menuOpen}
    <nav class="menu-list">
        <p>Utrecht, Netherlands</p>
        <div>
            <Time />
            <Weather />
        </div>
        <ul>
            <li><a href="#link1">Werk</a></li>
            <li><a href="#link2">Over</a></li>
            <li><a href="#link3">Contact</a></li>
        </ul>
    </nav>
{/if}

<style>
    .menu-list {
        position: absolute;
        bottom: calc(3.25rem + var(--padding-2));
        left: var(--padding-8);
        width: calc(100% - var(--padding-8));
        background-color: var(--blue);
        border-top: .25rem solid var(--light-blue);
        animation: bounceIn 0.4s ease forwards;
        z-index: 10;
        padding: var(--padding-2);
    }

    .menu-list > *, .menu-list a {
        color: var(--light);
        font-weight: var(--font-medium);
    }

    .menu-list div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: .25rem solid var(--light-blue);
        padding-bottom: var(--padding-1);
    }

    .menu-list li {
        padding: 0.5rem 0;
    }

    .menu-list a {
        text-decoration: none;
    }

    @keyframes bounceIn {
        0% {
            transform: translateY(20px) scaleY(0.9);
            opacity: 0;
        }
        50% {
            transform: translateY(-10px) scaleY(1.1);
            opacity: 1;
        }
        100% {
            transform: translateY(0) scaleY(1);
        }
    }
</style>
