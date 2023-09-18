import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Dictionary from "./components/Dictionary";

function App() {
  const [data, setData] = useState([]);

  const apiGet = async (word) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Failed to fetch data for `);
        }
      })
      .then((json) => {
        // Only proceed if the response was successful
        setData(json);
        console.log(data);
      })
      .catch((error) => {
        // Handle the error silently
        console.error(error);
      });
  };

  useEffect(() => {
    apiGet("keyboard");
  }, []);

  return (
    <div className="min-h-screen w-full bg-app-black-1">
      <div className="p-6 md:w-2/3 mx-auto">
        <Header apiGet={apiGet} />
        <Dictionary data={data} />
      </div>
    </div>
  );
}

export default App;
