localStorage.setItem("It's a secret to everybody.", "Hasta la vista Baby.");


const hours = new Date().getHours(); 

const isMorning = hours >= 4 && hours < 12;
const isAfternoon = hours >= 12 && hours < 17;
const isEvening = hours >= 17 || hours < 4;

let message = "";

if (isMorning) {
    message = "Good morning!, Have a great day!";
} else if (isAfternoon) {
    message = "Good afternoon! Hope you had a good lunch!";
} else if (isEvening) {
    message = "Good evening! Time to sleep!";
}

const welcomeDiv = document.getElementById("welcome");
if (welcomeDiv) {
    welcomeDiv.textContent = message;
}
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url });

const images = document.querySelectorAll('#carousel img');
let currentImage = 0;

const showImages = () => {
    const offset = currentImage % urls.length;
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length;
        image.src = urls[imageIndex];
    });
};

showImages();

// handle button clicks
document.getElementById('next').addEventListener('click', () => {
    currentImage++;
    showImages();
});

document.getElementById('prev').addEventListener('click', () => {
    currentImage--;
    showImages();
});

// auto-slide every 5 seconds
setInterval(() => {
    currentImage++;
    showImages();
}, 5000);

const todoList = document.getElementById('todo-list');
const input = document.getElementById('new-todo');
const button = document.getElementById('add-todo');

const renderTodos = () => {
    // Get the list from local storage
    const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

    // Clear the li's before we recreate them
    todoList.innerHTML = '';

    // Create and add new list items to the DOM
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        li.classList.add('todo');
        todoList.append(li);
    });
};

button.addEventListener('click', () => {
    // Get the list from local storage
    const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

    // Add a new item to the list
    todos.push({ text: input.value, completed: false });

    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos));

    input.value = '';
    renderTodos();
});

renderTodos(); 
const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150);
    const response = await fetch(url);
    const pokemonObj = await response.json();
    return pokemonObj;
};

const renderPokemon = pokemonObj => {
    const div = document.querySelector('.pokemon-ctr');
    const img = document.createElement('img');
    img.src = pokemonObj.sprites.front_default;
    img.alt = pokemonObj.name;
    div.append(img);
    return pokemonObj;
};

(async () => {
    try {
        const pokemon = await getRandomPokemon();
        renderPokemon(pokemon);
    } catch (error) {
        console.log(error);
    }
})();


