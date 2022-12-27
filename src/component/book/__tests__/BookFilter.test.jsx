import { fireEvent } from "@testing-library/react";
import React from "react";
import { getBooksByTitle } from "../../../module/book/bookAction";
import renderWithRedux from "../../../util/testUnit";
import BookFilter from "../BookFilter";

jest.mock('../../../module/book/bookAction');

describe('BookFilter', () => {

    it('should file getBookByTitle action on cklick of search buton', ()=>{
        const {getByLabelText, getByText} = renderWithRedux(<BookFilter />,{});
        getBooksByTitle.mockImplementation(() => dispatch => {});

        const textField = getByLabelText('Enter book title');
        fireEvent.change(textField, {target:{ value: 'test title'}});

        const sesrchButton = getByText('Search');
        fireEvent.click(sesrchButton);

        expect(getBooksByTitle).toHaveBeenCalledWith('test title');
    });
});



