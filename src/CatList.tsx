import React, { useState, useEffect } from "react";
function CatList() {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '07366b0bf6msh9aabaf01c0281ccp186e18jsn6df66f6ee770',
        'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data[0].joke);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>Joke of the day:</h2>
      {joke && <p>{joke}</p>}
    </div>
  );
}
export default CatList;