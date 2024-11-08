<script>
    export let title = "";
    export let location = "";
    export let date = "";
    export let link = "#";
</script>

<li>
    <a href={link}>
        <ul class="innerlist">
            <li>{title}</li>
            <li>{location}</li>
            <li>{date}</li>
        </ul>
    </a>
</li>

<style>
    .innerlist {
        display: flex;
        list-style: none;
        justify-content: space-between;
        position: relative;
        list-style: none;
    }

    .innerlist li {
        font-size: var(--text-regular);
        font-style: italic;
        padding-bottom: var(--padding-2);
        padding-top: var(--padding-2);
        padding-left: var(--padding-2);
        transition: padding-left var(--transition-250);
    }

    .innerlist:hover li {
        padding-left: var(--padding-3); 
    }

    .innerlist::before {
        content: ">>";
        font-weight: var(--light);
        font-size: var(--text-larger);
        position: absolute;
        left: 0; 
        bottom: var(--padding-2);
        opacity: 0; 
        letter-spacing: -0.2rem;
        padding-left: var(--padding-2);
        transition: all var(--transition-250);
        pointer-events: none; 
    }

    .innerlist:hover::before {
        opacity: 1; 
    }
    
    .innerlist li::after {
        position: absolute;
        content: '';
        left: var(--padding-2);
        bottom: 0;
        width: calc(100% - var(--padding-2)); 
        height: 1px;
        background: var(--text); 
        pointer-events: none;
    }

    @media (prefers-color-scheme: dark) {
        .innerlist li::after {
            background: var(--text-dark);
            }
        }

</style>
