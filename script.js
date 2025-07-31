document.addEventListener('DOMContentLoaded', () => {
    const pokedexContainer = document.querySelector('.pokedex-container');

    const pokemons = [
        {
            id: 3,
            name: 'Venusaur',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
            types: ['grass', 'poison'],
            region: 'Kanto',
            thing: 'Habilidade: Overgrow'
        },
        {
            id: 4,
            name: 'Charmander',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
            types: ['fire'],
            region: 'Kanto',
            thing: 'Curiosidade: Sua cauda nunca apaga.'
        },
        {
            id: 6,
            name: 'Charizard',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
            types: ['fire', 'flying'],
            region: 'Kanto',
            thing: 'Habilidade: Blaze'
        },
        {
            id: 9,
            name: 'Blastoise',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
            types: ['water'],
            region: 'Kanto',
            thing: 'Habilidade: Torrent'
        },
        {
            id: 65,
            name: 'Alakazam',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png',
            types: ['psychic'],
            region: 'Kanto',
            thing: 'Curiosidade: Tem QI de 5000.'
        },
        {
            id: 144,
            name: 'Articuno',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png',
            types: ['ice', 'flying'],
            region: 'Kanto',
            thing: 'Curiosidade: Pode controlar gelo.'
        },
        {
            id: 150,
            name: 'Mewtwo',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
            types: ['psychic'],
            region: 'Kanto',
            thing: 'Curiosidade: Criado em laboratório.'
        }
    ];

    const createPokemonCard = (pokemon) => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemon.image;
        pokemonImage.alt = pokemon.name;

        const pokemonId = document.createElement('p');
        pokemonId.classList.add('pokemon-id');
        pokemonId.textContent = `#${String(pokemon.id).padStart(3, '0')}`;

        const pokemonName = document.createElement('h2');
        pokemonName.classList.add('pokemon-name');
        pokemonName.textContent = pokemon.name;

        const pokemonRegion = document.createElement('p');
        pokemonRegion.classList.add('pokemon-region');
        pokemonRegion.textContent = `Região: ${pokemon.region}`;

        const pokemonTypes = document.createElement('div');
        pokemonTypes.classList.add('pokemon-types');
        pokemon.types.forEach(type => {
            const typeBadge = document.createElement('span');
            typeBadge.classList.add('type-badge', type);
            typeBadge.textContent = type;
            pokemonTypes.appendChild(typeBadge);
        });

        const pokemonThing = document.createElement('p');
        pokemonThing.classList.add('pokemon-thing');
        pokemonThing.textContent = pokemon.thing;

        card.appendChild(pokemonImage);
        card.appendChild(pokemonId);
        card.appendChild(pokemonName);
        card.appendChild(pokemonRegion);
        card.appendChild(pokemonTypes);
        card.appendChild(pokemonThing);

        pokedexContainer.appendChild(card);
    };

    pokemons.forEach(pokemon => {
        createPokemonCard(pokemon);
    });
});