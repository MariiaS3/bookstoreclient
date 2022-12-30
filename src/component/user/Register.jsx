
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../module/user/userAction";
import './registerStyle.css'
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { getUserRegisterPromise } from "../../module/user/userSelector";


const validationSchema = yup.object({
    name: yup.string('Enter your username')
        .required('Username is required'),
    email: yup.string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup.string('Enter your password')
        .min(8, 'Password should be of minimum 8 char length')
        .required('Password is required')
})


const Register = () => {

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const registerPromise = useSelector(getUserRegisterPromise);

    useEffect(() =>{
        console.log()
        if(registerPromise.isErrorOcurred){
            enqueueSnackbar('Server error occured!',{
                variant: 'error'
            });
        }else if(registerPromise.isFullfilled){
            enqueueSnackbar('User Added Successfully',{
                variant: 'success'
            })
            navigate("/login");
        }
    },[registerPromise, enqueueSnackbar])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(registerAction(values));
        }
    })

    return (
        <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
            <Box className="wrapper">
                <Paper className="paper">
                    <Typography variant="h4" className="heading"> User Registration</Typography>
                    <TextField
                        style={{ 'marginTop': '2rem' }}
                        name="name"
                        id="name"
                        label="Enter username"
                        placeholder="Enter username"
                        variant="outlined"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        helperText={formik.touched.name && formik.errors.name}
                        error={formik.touched.name && Boolean(formik.errors.name)} />
                    <TextField
                        style={{ 'marginTop': '2rem' }}
                        name="email"
                        id="email"
                        label="Enter email address"
                        placeholder="Enter email address"
                        variant="outlined"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        helperText={formik.touched.email && formik.errors.email}
                        error={formik.touched.email && Boolean(formik.errors.email)} />
                    <TextField
                        style={{ 'marginTop': '2rem' }}
                        name="password"
                        id="password"
                        label="Enter password"
                        variant="outlined"
                        placeholder="Enter password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        helperText={formik.touched.password && formik.errors.password}
                        error={formik.touched.password && Boolean(formik.errors.password)} />
                    <div id="btn">
                    <Button
                        style={{ 'marginTop': '2rem' }}
                        type="submit"
                        variant="contained"
                        color="primary" 
                        className="btn">
                        Register
                    </Button>
                    </div>
                </Paper>
            </Box>
        </form>
    )
}


export default Register;
