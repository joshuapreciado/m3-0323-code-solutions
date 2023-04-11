export default function PokemonList({pokedex}) {
  const list = pokedex.map(items => <li id={items.number}>{items.name}</li>);
  return <ul>{list}</ul>
}
