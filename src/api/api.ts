import React from 'react';

const Manageapi = async () => {
  try {
    const responce = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=d500c37cbd616546e9d07588c51f2019',
    );
    const json = await responce.json();
    return json.movie;
  } catch (error) {
    console.log(error);
  }
};
export default Manageapi