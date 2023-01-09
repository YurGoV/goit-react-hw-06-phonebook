import React from "react";
import {FilterStyled} from "./Filter.styled";
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';



export const Filter = ({onSearch}) => {

  return (
    <FilterStyled>
      <TextField label="Search"  onChange={onSearch} size="small" />
    </FilterStyled>
  )
}

Filter.propTypes = {
  onSearch: PropTypes.func.isRequired,
}


