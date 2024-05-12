export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a6bb602e04msh39079aa1d39fb2ep1b78d8jsn3459b4845927',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a6bb602e04msh39079aa1d39fb2ep1b78d8jsn3459b4845927',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
