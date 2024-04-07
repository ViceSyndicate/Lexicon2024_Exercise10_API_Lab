document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('click', getApi);
});



function getApi(){
    var queryWord = document.getElementById('input').value;
    var uri = 'http://www.swapi.tech/api/people/?name=' + queryWord;
    fetch(uri)
    .then(res => res.json())
    .then(data => {
        console.log(uri);
        console.log(data);
        let stringify = JSON.stringify(data, null, 2);
        //let height = jsonData['result']['height'];
        for(let i = 0; i < data.result.length; i++){
            let name = data.result[i].properties.name;
            let height = data.result[i].properties.height;
            let mass = data.result[i].properties.mass;
            let gender = data.result[i].properties.gender;
            let hair_color = data.result[i].properties.hair_color;
            let s = `Value ${i}: Name ${name}, Height ${height}, Mass ${mass}, Gender ${gender}, Hair Color ${hair_color}`
            console.log(s);
            document.getElementById('textarea').value += s;
        }
    })
    .catch (err => console.log(err))
}