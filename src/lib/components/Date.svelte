<script>
    export let formatType = 'fullDate'; 

    let currentDate = '';

    function formatDate(formatType) {
        const now = new Date();
        
        if (formatType === 'monthYear') {
            const month = now.toLocaleString('default', { month: 'long' });
            const year = now.getFullYear().toString().slice(-2);
            return `${month} '${year}`;
        } else if (formatType === 'fullDate') {
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();
            return `${day}/${month}/${year}`;
        }
    }

    $: currentDate = formatDate(formatType);
</script>

{currentDate}
