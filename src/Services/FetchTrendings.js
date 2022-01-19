import fetchInfo from "./fetchInfo.json";

export default fetch(
  `${fetchInfo.URL}/trending/all/day?api_key=${fetchInfo.KEY}`
).then((res) => res.json());
