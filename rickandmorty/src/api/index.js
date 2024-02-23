export async function api (endpoint) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api${endpoint}`).then(response => response.json());
    // console.log(response);
    return {
      response, results: response.results
    }
  } catch (error) {
    console.log(error);
  }
}
