
// loadNews

const loadNews = async () => {
    const url = ('https://openapi.programming-hero.com/api/news/categories')
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    displayNews(data.data.news_category);
};

// news displayNews

function displayNews(news) {
    // console.log(news);
    const navContainer = document.getElementById('nav-container');
    news.forEach(category => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('ul');
        newsDiv.innerHTML = `
        <ul> 
        <button onclick="loadCatagoriesDetails('${category._id}')" class=" btn ">${category.category_name} </button>
       </ul>
        
        `;
        navContainer.appendChild(newsDiv)
        // console.log(category);
    });
};

loadNews();

// ===============

const loadNewsPart = async () => {
    const url = ('https://openapi.programming-hero.com/api/news/category/03')
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    displayNewsPart(data.data);
    // console.log(data.data);
};


function displayNewsPart(information) {
    // console.log(information);
    const newsPartContainer = document.getElementById('newspart-container');
    information.forEach(info => {
        const newPartDiv = document.createElement('div');
        newPartDiv.classList.add('user');
        newPartDiv.innerHTML = `

       <div class= 'd-flex mb-5px border-danger mb-4 border ' >
            <div class="col-md-4">
                 <img src="${info.image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${info.title}</h5>
                    <p class="card-text">${info.details.slice(0, 180) }</p>
                </div>
              <div> 
              <div class="d-flex justify-content-evenly" >
          <div class="d-flex align-items-center " >
           <img class='w-25 rounded-4 img-size m-2'  src="${info.author.img}" alt="">
           <div>
                <h5>${info.author.name}</h5>
                <p>${info.author.published_date} </p>
           </div>
        </div>
        <div class="d-flex justify-content-between " > 

                <div> 
                    <p> <i class="fa-regular fa-eye"></i></P>
                </div>
                
                <div> 
                    <p>${info.total_view} </p>
                </div>
    
        </div>

      <button type="button "class="btn btn-primary btn-size" data-bs-toggle="modal" data-bs-target="#exampleModal">
      See More
  </button>     
              
              </div>

            </div> 
               
       </div>


       <div class= 'd-flex' >
       <div class="col-md-4">

       </div>
       <div class="col-md-8">
       
     </div>
       </div>
       </div>
       
    `;
        newsPartContainer.appendChild(newPartDiv);
    });
}

const loadCatagoriesDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data
        ));


    // console.log(url);
}


loadNewsPart();


