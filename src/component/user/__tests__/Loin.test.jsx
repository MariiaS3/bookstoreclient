import { fireEvent, screen, waitFor } from "@testing-library/react";

import React from "react";
import { loginAction } from "../../../module/user/userAction";
import renderWithRedux from '../../../util/testUnit'
import Login from "../Login";

jest.mock("../../../module/user/userAction")
describe('Login test', () => {
    it('should show required error messange for email and password', async () => {
        const { findByText } = renderWithRedux(<Login />, {});

        const submitBtn = screen.getByRole('button', { name: 'Login' })
        fireEvent.click(submitBtn);

        expect(await findByText('Email is required')).toBeInTheDocument();
        expect(await findByText('Password is required')).toBeInTheDocument();
    });

    it('should show  email and password invalid error messange', async () => {
        const { findByText, getByLabelText } = renderWithRedux(<Login />, {});

        const passwordField = getByLabelText('Enter password');
        const emailField = getByLabelText('Enter email address');

        fireEvent.change(emailField, { target: { value: 'email invalid' } })
        fireEvent.change(passwordField, { target: { value: 'wrongP' } })

        const submitBtn = screen.getByRole('button', { name: 'Login' })
        fireEvent.click(submitBtn);

        expect(await findByText('Enter a valid email')).toBeInTheDocument();
        expect(await findByText('Password should be of minimum 8 char length')).toBeInTheDocument();
    });

    it('should call login action when email and password is valid', async () => {
        const { findByText, getByLabelText } = renderWithRedux(<Login />, {});
        loginAction.mockImplementation(() => (dispatch) => { });

        const passwordField = getByLabelText('Enter password');
        const emailField = getByLabelText('Enter email address');

        fireEvent.change(emailField, { target: { value: 'email@gmail.com' } })
        fireEvent.change(passwordField, { target: { value: 'passwordvalid' } })

        const submitBtn = screen.getByRole('button', { name: 'Login' })
        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(loginAction).toHaveBeenCalledWith('email@gmail.com', 'passwordvalid')
        })
    });


})



