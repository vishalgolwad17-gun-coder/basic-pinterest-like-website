import axios from "axios";

const Unsplash_key = import.meta.env.VITE_UNSPLASH_KEY;
const Pexels_key = import.meta.env.VITE_PEXELS_KEY;
const Tenor_key = import.meta.env.VITE_TENOR_KEY;

export async function fetchphotos(query, page = 1, per_page = 20) {
  let res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${Unsplash_key}` },
  });
  return res;
}

export async function fetchvideos(query, per_page = 20) {
  let res = await axios.get("https://api.pexels.com/v1/videos/search", {
    params: { query, per_page },
    headers: { Authorization: Pexels_key },
  });
  return res;
}

export async function fetchgifs(query, limit = 20) {
  let res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: Tenor_key,
      q: query,
      limit: limit,
    },
  });
  return res;
}
