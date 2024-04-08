document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pull').addEventListener('click', pullACard);
    document.getElementById('createDeck').addEventListener('click', makeADeck);
});


var deck_id;


function makeADeck(){
    let uri = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    console.log('Making Deck');
    fetch(uri)
    .then(res => res.json())
    .then(data => {
        console.log(uri);
        console.log(data);
        
        let stringify = JSON.stringify(data, null, 2);
        console.log(stringify);
        let deckId = data.deck_id;
        console.log(`Deck ID: ${deckId}`);
        deck_id = deckId;
        return deckId;
    })
    .catch (err => console.log(err))
}


function pullACard(){
    let uri = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    console.log('Card Pulled');
    fetch(uri)
    .then(res => res.json())
    .then(data => {

        let img = document.createElement('img');
        let imgUrl = data.cards[0].image;
        img.setAttribute('src', imgUrl);

        let cardDiv = document.getElementById('cardDiv');
        cardDiv.appendChild(img);

        // for(let i = 0; i < data.cards.length; i++){}

    })
    .catch (err => console.log(err))
}