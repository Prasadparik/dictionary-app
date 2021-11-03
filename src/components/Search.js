import React, { useContext } from "react";

import {
  TextField,
  AppBar,
  Box,
  Paper,
  Input,
  OutlinedInput,
  ariaLabel,
} from "@material-ui/core";
import { UserContext } from "../context/UserContext";

const Search = () => {
  const context = useContext(UserContext);
  const data = context.mean;
  return (
    <Box style={{ padding: "1rem" }}>
      <TextField
        placeholder="Search"
        style={{
          borderRadius: "2rem",
          width: "90%",
          background: "#fff",
          padding: "0.5rem 1.2rem",
          boxShadow: "0 0 8px 0px #eee",
          border: "0px solid #b0c6d9",
        }}
        onChange={(e) => context.setWord(e.target.value)}
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
      />
      {data !== null ? (
        <Paper style={{ padding: "1rem 2rem", marginTop: "1rem" }}>
          <h3>WORD : {data.word}</h3>
          <h3>Meaning : {data.meanings[0].definitions[0].definition}</h3>
          <h3>Example : {data.meanings[0].definitions[0].example}</h3>
          <h3>Origin : {data.origin}</h3>
          <h3>Part Of Speech : {data.meanings[0].partOfSpeech}</h3>
        </Paper>
      ) : null}
      {/* <Paper style={{ padding: "1rem 2rem", marginTop: "1rem" }}>
        <h3>WORD : {data.word}</h3>
        <h3>Meaning : {data.meanings[0].definitions[0].definition}</h3> */}
      {/* <h3>Meaning : {data.meanings[0].definitions[0].definition}</h3>
        <h3>Example : {data.meanings[0].definitions[0].example}</h3>
        <h3>Origin : {data.origin}</h3>
        <h3>Part Of Speech : {data.meanings[0].partOfSpeech}</h3> */}
      {/* </Paper> */}
    </Box>
  );
};

export default Search;
