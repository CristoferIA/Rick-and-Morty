import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import ErrorFetch from "./components/ErrorFetch";
import { BsSearch } from 'react-icons/bs';

function App() {
  const [location, setLocation] = useState();
  const [locationInput, setLocationInput] = useState(3);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const randomIdLocation = Math.floor(Math.random() * 126) + 1;
    const URL = locationInput
      ? `https://rickandmortyapi.com/api/location/${locationInput}`
      : `https://rickandmortyapi.com/api/location/${randomIdLocation}`;

    axios
      .get(URL)
      .then((res) => {
        setLocation(res.data);
        setHasError(false);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      });
  }, [locationInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationInput(e.target.inputSearch.value);
  };

  return (
    <div className="App">
      <div className="App__search">
        <h1>Rick and Morty</h1>
        <form className="App_form" onSubmit={handleSubmit}>
          <input id="inputSearch" type="text" />
          <button><BsSearch/></button>
        </form>
      </div>
      
      <div className="App__result">
        {hasError ? (
          <ErrorFetch />
        ) : (
          <>
            <LocationInfo location={location} />
            <div className="residents-container">
              {location?.residents.map((url) => {
                return <ResidentCard key={url} url={url} />;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
