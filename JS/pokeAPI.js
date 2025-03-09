const listaPokemon = document.querySelector(".poke-container");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++){
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data));
}

function mostrarPokemon(data){
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <div class="poke-card">
            <p># ${data.id}</p>
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
            <p class="name">Nombre: ${data.name}</p>
            <p class="style">Height: ${data.height}</p>
            <p class="ability">Weight: ${data.weight}</p>
        </div>
        `;
    listaPokemon.append(div);
}