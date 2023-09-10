const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');


const data = [
    ' IIT Kharagpur IITKGP',
    ' IIT Bombay IITB',
    ' IIT Madras IITM',
    ' IIT Kanpur IITK',
    ' IIT Delhi IITD',
    ' IIT Guwahati IITG',
    ' IIT Roorkee IITR',
    ' IIT Ropar IITRPR',
    ' IIT Bhubaneswar IITBBS',
    ' IIT Gandhinagar IITGN',
    ' IIT Hyderabad IITH',
    ' IIT Jodhpur IITJ',
    ' IIT Patna IITP',
    ' IIT Indore IITI',
    ' IIT Mandi IITMD',
    ' IIT Varanasi IIT',
    ' IIT Palakkad IITPKD',
    ' IIT Tirupati IITT',
    ' IIT Dhanbad IIT ISM',
    ' IIT Bhilai IITBH',
    ' IIT Dharwad IITDH',
    ' IIT Jammu IITJMU',
    ' IIT Goa IIT GOA',
    ' NIT Warangal NITW', 
    ' NIT Bhopal MANIT ',
    ' NIT Nagpur VNIT', 
    ' NIT Durgapur NITDGP ',
    ' NIT Jamshedpur NITJSR', 
    ' NIT Karnataka NITK', 
    ' NIT Srinagar NITSRI ',
    ' NIT Allahabad MNNIT', 
    ' NIT Surat SVNIT', 
    ' NIT Calicut NITC',
    ' NIT Rourkela NITR', 
    ' NIT Jaipur MNIT', 
    ' NIT Kurukshetra NITKKR', 
    ' NIT Tiruchirappalli NITT', 
    ' NIT Silchar NITS', 
    ' NIT Hamirpur NITH', 
    ' NIT Jalandhar NITJ', 
    ' NIT Patna NITP', 
    ' NIT Raipur NITRR', 
    ' NIT Agartala NITA ',
    ' NIT Arunachal Pradesh NITAP', 
    ' NIT Delhi NITD',
    ' NIT Goa NITG ',
    ' NIT Manipur NITMN ',
    ' NIT Meghalaya NITM ',
    ' NIT Mizoram NITMZ', 
    ' NIT Nagaland NITN', 
    ' NIT Puducherry NITPY ',
    ' NIT Sikkim NITSKM', 
    ' NIT Uttarakhand NITUK',
    ' NIT Andhra Pradesh NITANP' 
];

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredData = data.filter(item => item.toLowerCase().includes(searchText));
    
    displayResults(filteredData);
});

function displayResults(results) {
    searchResults.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        searchResults.appendChild(li);
    });
}

searchResults.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        searchInput.value = e.target.textContent;
        searchResults.innerHTML = '';
    }
});

document.body.addEventListener('click',()=>{
    searchResults.innerHTML='';
})
