import React from "react";
import Layout from "../Layout";
import { render } from "@testing-library/react";

describe('Layout',() =>{
    
    it('should render layout component', () =>{
        const {getByText} = render(
            <Layout>
                <div>test component</div>
            </Layout>
        );
        expect(getByText('test component')).toBeInTheDocument()
    })
})