<nav>
    <a href="#top">/Rutger</a>

    <ul>
        <li><a href="#werk">Werk</a></li>
        <li><a href="#contact">Contact</a></li>
        <li class="email"><a href="mailto:kock.rutger@gmail.com">Email</a></li>
    </ul>
</nav>

<style>
nav {
    width: 100%;
    background-color: var(--background);
    color: var(--text);
    font-size: var(--text-larger);
    font-weight: var(--bold);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--padding-2) var(--padding-4);
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 2px 5px var(--background); 
}

nav a {
    text-decoration: none;
    color: var(--text);
    padding: var(--padding-1);
    border-radius: 0 0 var(--border-radius-1) 0;
    transition: all var(--transition-250);
}

nav a:hover {
    background-color: var(--highlight);
    color: var(--text-dark);
}

nav ul {
    display: flex;
    gap: var(--padding-3);
    list-style: none;
    align-items: center;
}

nav .email a {
    background-color: var(--highlight);
    color: var(--text-dark);
}

nav .email a::after {
    content: ">>";
    font-weight: var(--light);
    font-size: var(--text-larger);
    letter-spacing: -0.2rem;
    padding-left: var(--padding-1);
    display: inline-block;
    transition: all var(--transition-250);
}


nav .email a:hover::after {
    content: ">>>"; 
    letter-spacing: 0;
}

@media (prefers-color-scheme: dark) {
    nav {
        background-color: var(--background-dark);
        box-shadow: 0 2px 10px var(--background-dark); 
    }

    nav a {
        color: var(--text-dark);
    }

    nav .email a {
        background-color: var(--highlight-dark);
        color: var(--background-dark);
    }

    nav a:hover {
        background-color: var(--highlight-dark);
        color: var(--background-dark);
    }
}


</style>