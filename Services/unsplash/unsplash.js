export async function getImageFromAPI(query) {
  return fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
}