
const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
      .then(data=>displayQuote(data.quote))

    //   console.log('quote'); 
}

const displayQuote = quote => {
    const blockquote = document.getElementById('quote');
    blockquote.innerText = quote;
    // console.log(quote);
}

