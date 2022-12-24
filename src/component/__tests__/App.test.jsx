import React from 'react';
import App from "../App";
import renderWithRedux from '../../util/testUnit';

describe("App component", () => {
    it('should render app with error', () => {
        const { asFragment } = renderWithRedux(<App />, {});
        expect(asFragment()).toMatchSnapshot();
    });
});