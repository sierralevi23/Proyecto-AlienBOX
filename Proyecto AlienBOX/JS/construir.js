document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.build-pc-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const components = [];
        const selects = form.querySelectorAll('select');
        
        selects.forEach(select => {
            const selectedOption = select.options[select.selectedIndex];
            const optionText = selectedOption.text;
            const priceMatch = optionText.match(/-\s*\$([0-9]+(?:\.[0-9]+)?)/); // Regex to extract the price
            
            if (priceMatch) {
                const price = parseFloat(priceMatch[1]);
                const component = {
                    name: optionText.split(' - ')[0].trim(), // Extract component name
                    price: price
                };
                components.push(component);
            }
        });

        localStorage.setItem('pcComponents', JSON.stringify(components));
        window.location.href = 'compra.html';
    });
});