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
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

const Search = () => {
  const context = useContext(UserContext);
  const data = context.mean;
  return (
    <Box style={{ padding: "1rem" }}>
      <Box className="input-box">
        <TextField
          placeholder="Search"
          onChange={(e) => context.setWord(e.target.value)}
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          inputProps={{ style: { fontSize: 18 } }}
        />
      </Box>
      {data !== null ? (
        <Box>
          <Paper
            className="card-meaning"
            style={{ padding: "1rem 2rem", marginTop: "1rem" }}
          >
            <h1 style={{ flexGrow: "1", margin: "0" }}> {data.word}</h1>
            <VolumeUpIcon className="speech" fontSize="large" />
          </Paper>
          <Paper className="definition">
            <b>
              <h2>Definition</h2>
            </b>
            <span> {data.meanings[0].definitions[0].definition}</span>
            <hr />

            <b>
              <h2>Example</h2>
            </b>
            <span>{data.meanings[0].definitions[0].example}</span>
            <hr />

            <b>
              <h2>Origin</h2>
            </b>
            <span>{data.origin}</span>
            <hr />

            <b>
              <h2>Part Of Speech</h2>
            </b>
            <span>{data.meanings[0].partOfSpeech}</span>
          </Paper>
        </Box>
      ) : null}
    </Box>
  );
};

export default Search;
