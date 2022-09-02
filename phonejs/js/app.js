
const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    // display phones 12 only
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 12) {
        phones = phones.slice(0, 12);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }





    // no-phone-found-message
    const noPhone = document.getElementById('no-phone-found');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');

    } else {
        noPhone.classList.add('d-none')
    };

    // Display All phone {Use for Each for the }
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            <button onclick="loadPhoneDetail('${phone.slug}')"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Phone Details </button>

        
                    </div>
                </div>
        
        
        `;
        phoneContainer.appendChild(phoneDiv);

    });
    // Stop spinner loader
    toggleSpinner(false);
};

// A common function for the show all btn

const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

document.getElementById('search-btn').addEventListener('click', function () {
    // start Spinner loader
    processSearch(10);

});

// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10);
    }
})

// spinner loader function

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');

    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }

};


// btn-show-all
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
});

const loadPhoneDetail = async id => {

    //   step-1: url past the   
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
    // step-2: Response await for fetch 
    const res = await fetch(url);
    // step-3: await for json data
    const data = await res.json();
    displayPhonesDetails(data.data);
};

const displayPhonesDetails = phone => {
    const modalTitle = document.getElementById('phoneDetailsModal');
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phone-details');

    phoneDetails.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
    <p> Release Date: ${phone.releaseDate}</p>
    <p>Display Size : ${phone.mainFeatures.displaySize} </p>
    <p>Memory : ${phone.mainFeatures.memory} </p>

    
    `;


}


// loadPhones('iphone');
// loadPhones();