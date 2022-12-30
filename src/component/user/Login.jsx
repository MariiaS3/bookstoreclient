import { Box, Button, Link, Paper, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../module/user/userAction";
import './loginStyle.css'
import { getUserPromise } from "../../module/user/userSelector";
import { useSnackbar } from "notistack";

const validationSchema = yup.object({
    email: yup.string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup.string('Enter your password')
        .min(8, 'Password should be of minimum 8 char length')
        .required('Password is required')
})


const Login = () => {
    
    const dispatch = useDispatch();
    const loginPromise = useSelector(getUserPromise);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() =>{
        console.log()
        if(loginPromise.isErrorOcurred){
            enqueueSnackbar('Username and password wrong!',{
                variant: 'error'
            });
        }else if(loginPromise.isFullfilled){
            enqueueSnackbar('Login Success',{
                variant: 'success'
            })
            window.location.redirect('/')
        }
    },[loginPromise, enqueueSnackbar])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(loginAction(values.email, values.password));
        }
    })

    const handleRegister = () =>{
        navigate("/register");
    }

    return (
        <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
            <Box className="wrapper">
                <Paper className="paper">
                    <Typography variant="h4"> Book Store Login</Typography>
                    <TextField
                        style={{ 'marginTop': '2rem' }}
                        name="email"
                        id="email"
                        data-testid="email=testid"
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
                        data-testid="password=testid"
                        label="Enter password"
                        variant="outlined"
                        placeholder="Enter password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        helperText={formik.touched.password && formik.errors.password}
                        error={formik.touched.password && Boolean(formik.errors.password)} />
                    <Button
                        style={{ 'marginTop': '2rem' }}
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loginPromise.isPending}>
                        Login
                    </Button>
                    <Link style={{ 'marginTop': '2rem' }} component="button" variant="body2" onClick={handleRegister}>Register</Link>
                </Paper>
            </Box>
        </form>
    );
}

export default Login;

