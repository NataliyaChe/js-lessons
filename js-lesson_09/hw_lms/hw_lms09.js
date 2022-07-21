let wrapper = document.querySelector('.wrapper');
let list = document.createElement('ol');
wrapper.appendChild(list);

let playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
];

// for (let i = 0; i < playList.length; i++) {
//     const liItem = document.createElement('li');
//     const paragAuthor = document.createElement('p');
//     const paragSong = document.createElement('p');
//     paragAuthor.innerHTML = playList[i].author;
//     paragSong.innerHTML = playList[i].song;
//     liItem.appendChild(paragAuthor);
//     liItem.appendChild(paragSong);
//     list.appendChild(liItem);
//     console.log(playList[i]);
// }

for (let i = 0; i < playList.length; i++) {
    const element = playList[i]
    const liItem = document.createElement('li');
    const content = `
        <p>author: ${element.author}, </p>
        <p>song: ${element.song}, </p>
    `
    liItem.innerHTML = content
    list.appendChild(liItem);
}

// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

