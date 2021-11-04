import React, { useContext } from "react";
import { Box, TextField, MenuItem } from "@material-ui/core";
import { UserContext } from "../context/UserContext";

const language = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "hi",
    label: "Hindi",
  },
  //   {
  //     value: "BTC",
  //     label: "฿",
  //   },
  //   {
  //     value: "JPY",
  //     label: "¥",
  //   },
];

const Language = () => {
  const context = useContext(UserContext);

  const handleChange = (event) => {
    context.setlang(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="language"
          value={context.lang}
          onChange={handleChange}
          //   helperText="Please select Language"
        >
          {language.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};

export default Language;
