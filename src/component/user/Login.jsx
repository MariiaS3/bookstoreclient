import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginAction } from "../../module/user/userAction";
import './loginStyle.css'


const validationSchema = yup.object({
    email: yup.string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup.string('Enter your password')
        .min(8, 'password should be of minimum 8 char length')
        .required('Password is required')
})

const Login = () => {

    const dispatch = useDispatch();

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
    return (
        <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
            <Box className="wrapper">
                <Paper className="paper">
                    <Typography variant="h4"> Book Store Login</Typography>
                    <TextField 
                        style={{'marginTop': '2rem'}}
                        name="email" 
                        id="email" 
                        data-testid="email=testid" 
                        label="Enter email address" 
                        placeholder="Enther email address" 
                        variant="outlined"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        helperText={formik.touched.email && formik.errors.email}
                        error={formik.touched.email && Boolean(formik.errors.email)} />
                    <TextField 
                        style={{'marginTop': '2rem'}}
                        name="password" 
                        id="password"  
                        data-testid="password=testid" 
                        label="Enter password" 
                        variant="outlined" 
                        placeholder="Enther password" 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        helperText={formik.touched.password && formik.errors.password}
                        error={formik.touched.password && Boolean(formik.errors.password)} />
                    <Button 
                        style={{'marginTop': '2rem'}} 
                        type="submit" 
                        variant="contained" 
                        color="primary">
                        Login
                    </Button>
                </Paper>
            </Box>
        </form>
    );
}

export default Login;

