// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsCont = document.querySelector('.cards-container');
console.log(cardsCont);

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log('here', response);
    console.log(response.data.articles);
    
    Object(response.data.articles.javascript).map(item => {
        cardsCont.appendChild(Cards(item));
     })
     return response
      
    })
  .catch(error => {
    console.log("code isn't running", error);
  });
  
  axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log('here', response);
    console.log(response.data.articles);
    
    Object(response.data.articles.bootstrap).map(item => {
        cardsCont.appendChild(Cards(item));
     })
     return response
      
    })
  .catch(error => {
    console.log("code isn't running", error);
  });

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log('here', response);
    console.log(response.data.articles);
    
    Object(response.data.articles.technology).map(item => {
        cardsCont.appendChild(Cards(item));
     })
     return response
      
    })
  .catch(error => {
    console.log("code isn't running", error);
  });

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log('here', response);
    console.log(response.data.articles);
    
    Object(response.data.articles.jquery).map(item => {
        cardsCont.appendChild(Cards(item));
     })
     return response
      
    })
  .catch(error => {
    console.log("code isn't running", error);
  });

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log('here', response);
    console.log(response.data.articles);
    
    Object(response.data.articles.node).map(item => {
        cardsCont.appendChild(Cards(item));
     })
     return response
      
    })
  .catch(error => {
    console.log("code isn't running", error);
  });



function Cards(articles){
  const cardDiv = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgCont = document.createElement('div')
  const img = document.createElement('img');
  const by = document.createElement('span');

    cardDiv.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    author.appendChild(by);

    

    headline.textContent = `${articles.headline}`;
    img.setAttribute('src', `${articles.authorPhoto}`);
    by.textContent = `${articles.authorName}`;

    return cardDiv;

}