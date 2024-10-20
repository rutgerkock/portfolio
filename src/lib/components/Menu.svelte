<script>
    import Weather from '$lib/components/Weather.svelte';
    import Time from '$lib/components/Time.svelte';
    import Button from '$lib/components/Button.svelte'; 
</script>

<section>
    <div class="info">
        <Time />
        <p>/</p>
        <Weather />
    </div>
    <div>
        <ul>
            <li><Button href="/werk" label="Werk" /></li>
            <li><p>|</p></li>
            <li><Button href="/over" label="Over" /></li>
            <li><p>|</p></li>
            <li><Button href="/contact" label="Contact" /></li>
        </ul>        
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: end;
        height: 100%;
        padding-bottom: var(--padding-2);
    }
    
    ul {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }

    p {
        margin: 0;
    }

    .info {
        display: none;
    }

    @media (min-width: 768px) {
        .info {
            display: flex;
            flex-direction: row;    
            gap: var(--padding-1);
    
        }
        ul {
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }
        section {
            padding-right: var(--padding-2);
            justify-content: center;
        }
        section {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            align-items:normal;
            height: 100%;
            padding-bottom: 0;
        }
    }

</style>
