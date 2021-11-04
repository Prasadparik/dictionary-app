import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import Search from "./components/Search";
import { UserContext } from "./context/UserContext";
import Language from "./components/Language";

function App() {
  const [mean, setMean] = useState(null);
  const [word, setWord] = useState("");
  const [aud, setAud] = useState(null);
  const [lang, setlang] = useState("en");

  const dictionaryAPI = async () => {
    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
      );
      const wordData = data;
      console.log("DATA :", wordData);
      await setMean(wordData[0]);

      const voice = mean.phonetics[0].audio;
      setAud(voice);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("MEAN :", mean);
  console.log("AUDIO OF WORD :", aud);

  useEffect(() => {
    dictionaryAPI();
  }, [word, aud]);

  return (
    <div className="App">
      <UserContext.Provider
        value={{ word, setWord, mean, setMean, aud, setAud, lang, setlang }}
      >
        <Header />
        <Container maxWidth="md" className="container">
          <Search />
        </Container>
      </UserContext.Provider>
    </div>
  );
}

export default App;
