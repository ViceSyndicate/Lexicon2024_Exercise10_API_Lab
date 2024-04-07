document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pull').addEventListener('click', makeADeck);
});


const deck_id = makeADeck;
pullACard(deck_id);

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
        return deckId;
    })
    .catch (err => console.log(err))
}


function pullACard(deckId){
    let uri = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    console.log('Card Pulled');
    fetch(uri)
    .then(res => res.json())
    .then(data => {
        console.log(uri);
        console.log(data);
        
        let stringify = JSON.stringify(data, null, 2);
        console.log(stringify);
        // Count says how many cards to draw
        // Draw a card
    })
    .catch (err => console.log(err))
}