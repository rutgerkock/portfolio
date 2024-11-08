<script>
    import Date from './Date.svelte';

    let currentTime = '';
</script>



<footer class="footer">
    <p class="copyright">© 2024</p>
    <ul>
        <li><p>Creatieve front-end developer</p></li>
        <li><p>Utrecht, Nederland</p></li>
        <li><p><Date formatType="dayMonth"/></p></li>
    </ul>
</footer>

<style>
    footer {
        grid-area: footer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
        padding-bottom: var(--padding-3);
        width: 40rem;
    }

    footer ul {
        position: relative;
        padding-left: var(--padding-2);
    }

    footer ul::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        width: .5rem;
        background: var(--background);
        pointer-events: none;
        border-radius: var(--border-radius-1);
    }

    footer p {
        color: var(--background);
    }

    .copyright {
        margin-left: -var(--padding-4);
    }

    @media (prefers-color-scheme: dark) {
    
        footer p {
            color: var(--background-dark);
        }

        footer ul::after {
            background: var(--background-dark);
        }
    }
</style>
