let api = 'https://api.aoikujira.com/tenki/week.php?fmt=json&city='
let cityName = '';
let cityId = '';

const city =
    [{ id: 304, name: '釧路' },
    { id: 302, name: '旭川' },
    { id: 306, name: '札幌' },
    { id: 308, name: '青森' },
    { id: 309, name: '秋田' },
    { id: 312, name: '仙台' },
    { id: 323, name: '新潟' },
    { id: 325, name: '金沢' },
    { id: 319, name: '東京' },
    { id: 316, name: '宇都宮' },
    { id: 322, name: '長野' },
    { id: 329, name: '名古屋' },
    { id: 331, name: '大阪' },
    { id: 341, name: '高松' },
    { id: 337, name: '松江' },
    { id: 338, name: '広島' },
    { id: 344, name: '高知' },
    { id: 346, name: '福岡' },
    { id: 352, name: '鹿児島' },
    { id: 352, name: '奄美' },
    { id: 353, name: '那覇' },
    { id: 356, name: '石垣' }];

function getWeather () {
    
    fetch(api + cityId)
        .then(res => res.json())
        .then(data => setWeatherData(data))
        .catch(err => console.error(err));
    
    function setWeatherData(data) {
        let s = '<h2>' + cityName + 'の天気</h2>';
        const selectedCity = data[cityId] // 選択した地域の情報 --- (*3)
        // 1日ずつのデータを表示 --- (*4)
        for (let row of selectedCity) {
          console.log(row) // デバッグ表示
          s += 
          `
            <h3>${row['date']}の天気</h3>
            <ul><li>${row['forecast']}</li>
            <li>降水確率: ${row['pop']}%</li></ul>
          `
        }
        document.write(s)
    }
    // console.log(weatherData);
}

let display = document.getElementById('frame_inner');
let ul = document.createElement('ul');
display.appendChild(ul);

for (let i = 0; i < city.length; i++) {
    console.log(city[i].name);
    let li = document.createElement('li');
    li.setAttribute('value', city[i].id, 'id', city[i].id);
    li.innerHTML = city[i].name;

    li.addEventListener('click', () => {
        console.log(city[i].name);
        cityName = city[i].name;
        cityId = city[i].id;

        console.log(api + cityId);
        getWeather();

    });

    ul.appendChild(li);
    // const element = array[index];
}

