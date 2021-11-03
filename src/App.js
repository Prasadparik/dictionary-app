import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import Search from "./components/Search";
import { UserContext } from "./context/UserContext";

function App() {
  const [mean, setMean] = useState(null);
  const [word, setWord] = useState("");

  const dictionaryAPI = async () => {
    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const wordData = data;
      console.log("DATA :", wordData);
      setMean(wordData[0]);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("MEAN :", mean);

  useEffect(() => {
    dictionaryAPI();
  }, [word]);

  return (
    <div className="App">
      <Container maxWidth="lg" className="container">
        <UserContext.Provider value={{ word, setWord, mean, setMean }}>
          <Header />
          <Search />
        </UserContext.Provider>
      </Container>
    </div>
  );
}

export default App;
