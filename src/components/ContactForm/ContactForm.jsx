import React from "react";
// import {Formik, Form, Field} from 'formik';
// import {Button, InputField} from "./ContactForm.styled";
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import {ButtonStyled, formStyles} from "./ContactForm.styled";
import {toast} from "react-toastify";







export const ContactForm = ({onSubmit}) => {

  const {register, resetField, handleSubmit} = useForm();//todo: validation

/*

  const onFormicSubmit = (values, {resetForm}) => {
    console.log(values);
    onSubmit(values);
    resetForm();
  }
*/

  const onFormSubmit = (values) => {
    if (!values.name || !values.number) {
      return toast('Please input name & number of Contact');
    }
    console.log(values);
    values = {name: values.name.trim(), number: values.number.trim()}
    console.log(values);


    onSubmit(values);
    resetField('name');
    resetField('number');

    // if (query && query.trim() !== '') {
    //   const queryToUpdate = query.trim();
    //   setSearchParams({query: queryToUpdate});
    // } else {
    //   setSearchParams({});
    //   resetField("query");
    //   toast('please input, what you want to find')
    // }
  };

  return (

    <Box component='form' noValidate autoComplete="on" onSubmit={handleSubmit(onFormSubmit)} sx={formStyles}
    >
        <TextField {...register("name")} label="Name" variant="standard"  size="small"  />
        <TextField {...register("number")} label="Number" variant="standard"  size="small"  />

      <ButtonStyled type="submit" variant="outlined" size="small" >
             Add
      </ButtonStyled>

    </Box>

  );

};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}


