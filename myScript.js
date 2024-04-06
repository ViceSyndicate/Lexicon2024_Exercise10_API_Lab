document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('click', getApi);
});



function getApi(){
    var queryWord = document.getElementById('input').value;
    var uri = 'http://www.swapi.tech/api/people/?name' + queryWord;
    fetch(uri)
    .then(res => res.json())
    .then(data => {
        console.log(queryWord);
        console.log(data);
        document.getElementById('textarea').value = data;
    })
    .catch (err => console.log(err))
}

function AddItem() {
    var itemValue = document.getElementById('Item').value;

    var listItem = document.createElement('li');

    var itemText = document.createElement('span');
    itemText.textContent = itemValue
    itemText.classList.add('item-text');

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        listItem.remove();
    });

    var boughtButton = document.createElement('button');
    boughtButton.textContent = 'Bought';
    boughtButton.addEventListener('click', function() {
        listItem.classList.add('bought')
        itemText.classList.add('strikethrough');
    });

    console.log(itemText.innerHTML);
    listItem.appendChild(itemText)
    listItem.appendChild(removeButton);
    listItem.appendChild(boughtButton);
    console.log(listItem);

    var list = document.getElementById('ItemList');
    list.appendChild(listItem);
}

function BishBosh() {
    
    
    var bish = document.getElementById('SetBish').value;
    var bosh = document.getElementById('SetBosh').value;
    var loopNr = document.getElementById('SetLoopVal').value;
    console.log(loopNr);
    var ul = document.getElementById('BishBoshList');
    console.log(ul);

    for (let i = 1; i <= loopNr; i++) {
        let li = document.createElement("li");
        if (i % bish == 0 && i % bosh == 0){
            console.log('Bish-Bosh');
            li.appendChild(document.createTextNode('Bish-Bosh'));
            ul.appendChild(li);
        }
        else if (i % bish == 0) {
            console.log('Bish');
            li.appendChild(document.createTextNode('Bish'));
            ul.appendChild(li);
        }
        else if (i % bosh == 0) {
            console.log('Bosh');
            li.appendChild(document.createTextNode('Bosh'));
            ul.appendChild(li);
        } 
        else {
            console.log(i);
            li.appendChild(document.createTextNode(i));
            ul.appendChild(li);
        }
    }
}


