async function logJSONData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/17');
  if (!response.ok) {
    Error('Status Code: ', response.status);
  } else {
    const jsonData = await response.json();
    console.log(jsonData);
  }
}
logJSONData();
