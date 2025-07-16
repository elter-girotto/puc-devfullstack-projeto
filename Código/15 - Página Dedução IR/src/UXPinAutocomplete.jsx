import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


export default function UXPinAutocomplete() {



  return (<Autocomplete
  options={[ { label: "2025" }, { label: "2024" }, { label: "2023" }, { label: "2022" }, { label: "2021" }, { label: "2020" }, { label: "2019" } ]}
  width="300"
  autoComplete={true}
  open={false}
  includeInputInList={false}
  renderInput={<TextField {...params} label="Ano da despesa" />}
/>);
}