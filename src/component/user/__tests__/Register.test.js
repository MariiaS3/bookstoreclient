import { fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { registerAction } from "../../../module/user/userAction";
import renderWithRedux from "../../../util/testUnit";
import Register from "../Register";

jest.mock("../../../module/user/userAction")

describe('Register form', () => {

    it('should exist name, email, password field and register btn', () => {
        const { getByLabelText, getByText } = renderWithRedux(<Register />, {});

        expect(getByLabelText('Enter email address')).toBeInTheDocument();
        expect(getByLabelText('Enter password')).toBeInTheDocument();
        expect(getByLabelText('Enter username')).toBeInTheDocument();
        expect(getByText('Register')).toBeInTheDocument();

    });

    it('should show required error message when register is clicked', async () => {
        const { findByText, getByText } = renderWithRedux(<Register />, {});

        fireEvent.submit(getByText('Register'));

        expect(await findByText('Email is required')).toBeInTheDocument();
        expect(await findByText('Password is required')).toBeInTheDocument();
        expect(await findByText('Username is required')).toBeInTheDocument();

    });

    it('should show email, password invalid error messange', async () => {
        const { findByText, getByText, getByLabelText } = renderWithRedux(<Register />, {});

        fireEvent.change(getByLabelText('Enter email address'),{target:{value:'invalid email'}})
        fireEvent.change(getByLabelText('Enter password'), {target: {value: 'wrongP'}})
        fireEvent.change(getByLabelText('Enter username'), {target: {value: 'username'}})


        fireEvent.submit(getByText('Register'));

        expect(await findByText('Enter a valid email')).toBeInTheDocument();
        expect(await findByText('Password should be of minimum 8 char length')).toBeInTheDocument();

    });

    it('should call register action with use data', async () => {
        const { getByText, getByLabelText } = renderWithRedux(<Register />, {});
        registerAction.mockImplementation(() => (dispatch) => { });

        fireEvent.change(getByLabelText('Enter email address'),{target:{value:'email@gmail.com'}})
        fireEvent.change(getByLabelText('Enter password'), {target: {value: 'password8'}})
        fireEvent.change(getByLabelText('Enter username'), {target: {value: 'username'}})


        fireEvent.submit(getByText('Register'));


        await waitFor(() => {
            expect(registerAction).toHaveBeenCalledWith({
                name:"username",
                email:"email@gmail.com",
                password:"password8"
            })
        })
    });
})


