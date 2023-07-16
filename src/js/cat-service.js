import axios from 'axios';

export default class CatApiService {
  constructor() {
    this.API_KEY =
      'live_JdwLYraREAKi8calt3wo8KH5nzr4TIOtF1iLLwBUHvDOgg8t0sgJDPPspwgfRllW';

    this.breedId = '';
  }

  fetchBreeds() {
    const url = `https://api.thecatapi.com/v1/breeds/`;

    return axios
      .get(url, {
        headers: {
          'x-api-key': this.API_KEY,
        },
      })
      .then(response => response.data);
  }

  fetchCatByBreed() {
    const url = 'https://api.thecatapi.com/v1/images/search/';

    const options = new URLSearchParams({
      breed_ids: `${this.breedId}`,
      api_key: `${this.API_KEY}`,
    });

    return axios.get(`${url}?${options}`).then(response => response.data);
  }

  get breed() {
    return this.breedId;
  }

  set breed(newBreed) {
    this.breedId = newBreed;
  }
}
