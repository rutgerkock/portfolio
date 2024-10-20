    <script>
        export let href = '#'; 
        export let label = ''; 
    </script>

    <a href={href} class="buttons">
        <span>{label}</span>
    </a>

    <style>
        .buttons {
            position: relative;
            padding: var(--padding-1);
            border-radius: var(--border-radius-02);
            overflow: hidden; 
            color: var(--dark);
            transition: color 0.2s ease;
            text-decoration: none; 
        }

        .buttons::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            width: 100%;
            height: 100%;
            background-color: var(--orange);
            transition: transform 0.3s ease; 
            transform: translateX(-50%) scaleX(0); 
            z-index: 0; 
            border-radius: var(--border-radius-02); 
        }

        .buttons:hover::before {
            transform: translateX(-50%) scaleX(1); 
        }

        .buttons:hover {
            color: var(--light);
            transform: scale(1.1); 
            z-index: 1; 
        }

        .buttons span {
            position: relative; 
            z-index: 1; 
        }
    </style>
