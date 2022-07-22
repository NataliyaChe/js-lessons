let wrapper = document.querySelector('.wrapper');
let animeList = document.createElement('ul');
wrapper.appendChild(animeList);

const anime = [
    {
        name: 'Naruto',
        genre: 'Shounen',
        format: 'TV Series',
        episodes: 700,
        studious: 'Pierrot',
        releaseDate: 2002,
        rating: 'PG-13',
    },
    {
        name: 'Bleach',
        genre: 'Shounen',
        format: 'TV Series',
        episodes: 366,
        studious: 'Pierrot',
        releaseDate: 2004,
        rating: 'PG-13',
    },
    {
        name: 'Princess Mononoke',
        genre: 'Fantasy',
        format: 'Movie',
        episodes: 1,
        studious: 'Studio Ghibli',
        rating: 'PG-13',
        releaseDate: 1998,
    },
    {
        name: 'Cowboy Bebop',
        genre: 'Action',
        format: 'TV Series',
        episodes: 26,
        studious: 'Sunrise',
        rating: 'R-17+',
        releaseDate: 1998,
    },
    {
        name: 'Diamond no Ace',
        genre: 'Sports',
        format: 'TV Series',
        episodes: 75,
        studious: 'Madhouse',
        rating: 'PG-13',
        releaseDate: 2013,
    },
    {
        name: 'Drifters',
        genre: 'Action',
        format: 'TV Series',
        episodes: 12,
        studious: 'Hoods Drifters',
        rating: 'R-17',
        releaseDate: 2016,
    },
    {
        name: 'Durarara!!',
        genre: 'Action',
        format: 'TV Series',
        episodes: 24,
        studious: 'Brains Base',
        rating: 'R-17',
        releaseDate: 2010,
    },
    {
        name: 'Fullmetal Alchemist: Brotherhood',
        genre: 'Shounen',
        format: 'TV Series',
        episodes: 64,
        studious: 'Bones',
        rating: 'R-17',
        releaseDate: 2009,
    },
    {
        name: 'Hoozuki no Reitetsu',
        genre: 'Comedy',
        format: 'TV Series',
        episodes: 13,
        studious: 'Wit Studio',
        rating: 'PG-13',
        releaseDate: 2014,
    },
    {
        name: 'Hellsing Ultimate',
        genre: 'Action',
        format: 'OVA',
        episodes: 10,
        studious: 'Madhouse',
        rating: 'R-17',
        releaseDate: 2006,
    },
    {
        name: 'Haikyuu!!',
        genre: 'Sports',
        format: 'TV Series',
        episodes: 25,
        studious: 'Production I.G',
        rating: 'PG-13',
        releaseDate: 2014,
    },
    {
        name: 'Gintama',
        genre: 'Shounen',
        format: 'TV Series',
        episodes: 201,
        studious: 'Sunrise',
        rating: 'PG-13',
        releaseDate: 2006,
    },
    {
        name: 'Genshiken',
        genre: 'Comedy',
        format: 'TV Series',
        episodes: 12,
        studious: 'Palm',
        rating: 'PG-13',
        releaseDate: 2004,
    },
    {
        name: 'Howl no Ugoku Shiro',
        genre: 'Fantasy',
        format: 'Movie',
        episodes: 1,
        studious: 'Studio Ghibli',
        rating: 'PG-13',
        releaseDate: 2004,
    },
    {
        name: 'Kaze ga Tsuyoku Fuiteiru',
        genre: 'Sports',
        format: 'TV Series',
        episodes: 23,
        studious: 'Production I.G',
        rating: 'PG-13',
        releaseDate: 2018,
    },
    {
        name: 'Mawaru Penguindrum',
        genre: 'Drama',
        format: 'TV Series',
        episodes: 24,
        studious: 'Brains Base',
        rating: 'R-17',
        releaseDate: 2011,
    },
    {
        name: 'Mob Psycho 100',
        genre: 'Action',
        format: 'TV Series',
        episodes: 12,
        studious: 'Bones',
        rating: 'PG-13',
        releaseDate: 2016,
    },
    {
        name: 'Mushishi',
        genre: 'Fantasy',
        format: 'TV Series',
        episodes: 26,
        studious: 'Artland',
        rating: 'PG-13',
        releaseDate: 2005,
    },
    {
        name: 'Shiki',
        genre: 'Horror',
        format: 'TV Series',
        episodes: 22,
        studious: 'Daume',
        rating: 'R-17+',
        releaseDate: 2010,
    },
    {
        name: 'Sen to Chihiro no Kamikakushi',
        genre: 'Fantasy',
        format: 'Movie',
        episodes: 1,
        studious: 'Studio Ghibli',
        rating: 'PG-13',
        releaseDate: 2001,
    },
    {
        name: 'Saraiya Goyou',
        genre: 'Drama',
        format: 'TV Series',
        episodes: 12,
        studious: 'Manglobe',
        rating: 'PG-13',
        releaseDate: 2010,
    },
    {
        name: 'Samurai Champloo',
        genre: 'Action',
        format: 'TV Series',
        episodes: 26,
        studious: 'Manglobe',
        rating: 'R-17',
        releaseDate: 2004,
    },
    {
        name: 'Ping Pong the Animation',
        genre: 'Sports',
        format: 'TV Series',
        episodes: 11,
        studious: 'Tatsunoko Production',
        rating: 'PG-13',
        releaseDate: 2014,
    },
    {
        name: 'Natsume Yuujinchou',
        genre: 'Slice of Life',
        format: 'TV Series',
        episodes: 13,
        studious: 'Brains Base',
        rating: 'PG-13',
        releaseDate: 2008,
    },
  ]

const genreList = [
    'All', 'Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Shounen', 'Slice of Life', 'Sports', 
]

for (let i = 0; i < anime.length; i++) {
    const element = anime[i]
    const liItem = document.createElement('li');
    const content = `
        <h2>${element.name} </h2>
        <p>Genre: ${element.genre} </p>
        <p>Format: ${element.format} </p>
        <p>Episodes: ${element.episodes} </p>
        <p>Studious: ${element.studious} </p>
        <p>Rating: ${element.rating} </p>
        <p>Premiered: ${element.releaseDate} </p>
    `
    liItem.innerHTML = content;
    animeList.appendChild(liItem);
}

let mainTitle = document.createElement('h1');
mainTitle.innerHTML = 'Anime List';
wrapper.prepend(mainTitle);
    
let genreSelect = document.createElement('select');
animeList.before(genreSelect);
for (let i = 0; i < genreList.length; i++) {
    const genre = genreList[i]
    const genreOption = document.createElement('option');
    genreOption.innerHTML = genre;
    genreSelect.appendChild(genreOption);  
}

const btn = document.createElement('button');
btn.innerText = 'Submit'
genreSelect.after(btn);
btn.onclick = () => {
  console.log(genreSelect.value)
  let animeListFilter = document.createElement('ul');
  animeList.replaceWith(animeListFilter);
  if (genreSelect.value === 'All') {
    console.log("testing");
    for (let i = 0; i < anime.length; i++) {
        const elementAll = anime[i]
        const liItemAll = document.createElement('li');
        const contentAll = `
            <h2>${elementAll.name} </h2>
            <p>Genre: ${elementAll.genre} </p>
            <p>Format: ${elementAll.format} </p>
            <p>Episodes: ${elementAll.episodes} </p>
            <p>Studious: ${elementAll.studious} </p>
            <p>Rating: ${elementAll.rating} </p>
            <p>Premiered: ${elementAll.releaseDate} </p>
        `
        liItemAll.innerHTML = contentAll;
        animeListFilter.appendChild(liItemAll);
    }
  } else { 
    let genreFilter = anime.filter(obj => obj.genre === genreSelect.value);
    console.log(genreFilter); 
    for (let i = 0; i < genreFilter.length; i++) {
        const elementFilter = genreFilter[i]
        const liItemFilter = document.createElement('li');
        const contentFilter = `
            <h2>${elementFilter.name} </h2>
            <p>Genre: ${elementFilter.genre} </p>
            <p>Format: ${elementFilter.format} </p>
            <p>Episodes: ${elementFilter.episodes} </p>
            <p>Studious: ${elementFilter.studious} </p>
            <p>Rating: ${elementFilter.rating} </p>
            <p>Premiered: ${elementFilter.releaseDate} </p>
        `
        liItemFilter.innerHTML = contentFilter;
        animeListFilter.appendChild(liItemFilter);
    }
    // const genreArr = document.createElement('ul');
    // genreArr.innerHTML = genreFilter;
    // animeList.before(genreArr);
  }
}





