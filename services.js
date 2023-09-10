const servicesInput = document.getElementById('services-option');
const servicesResults = document.getElementById('services-option-results');


const services_data = [
   'Carpenter',
   'Laundry',
   'Electrician',
   'Painter',
   'Vehicle Rental'
];

servicesInput.addEventListener('input', () => {
    const services_searchText = servicesInput.value.toLowerCase();
    const services_filteredData = services_data.filter(item => item.toLowerCase().includes(services_searchText));
    
    services_displayResults(services_filteredData);
});

function services_displayResults(results) {
    servicesResults.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        servicesResults.appendChild(li);
    });
}

servicesResults.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        servicesInput.value = e.target.textContent;
        servicesResults.innerHTML = '';
    }
});

document.body.addEventListener('click',()=>{
    servicesResults.innerHTML='';
})
