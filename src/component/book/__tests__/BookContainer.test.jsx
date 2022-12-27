import React from "react";
import renderWithRedux from "../../../util/testUnit";
import BookContainer from "../BookContainer";
import BookList from "../BookList";
import {getBooksAction} from "../../../module/book/bookAction";

jest.mock('../BookList')
jest.mock('../../../module/book/bookAction')

describe('BookContainer',() =>{
    
    beforeAll(() =>{
        BookList.mockImplementation(() => <div>mock booklist comp</div>);
    })

    it('should render with without error', ()=>{


        const books = [{
            id: 1,
            title: 'test title',
            description: 'desc',
            releaseYear: 2019
        }];

        getBooksAction.mockImplementation(() => ({
            type:'BOOKLIST',
            payload:books

        }))
        // const {getByText} =
        renderWithRedux(<BookContainer />, {})

        // expect(getByText('Here we will display all books.')).toBeInTheDocument();
        expect(BookList).toHaveBeenCalledWith({books},{})
    });

    it('should show loader when isPending true',() =>{
        getBooksAction.mockImplementation(() => ({
            type:'BOOKLISTPENDING',
        }));

        const { getByTestId } = renderWithRedux(<BookContainer />, {});
        expect(getByTestId('book-loader')).toBeInTheDocument();
    });
    it('should show error when error ocured',() =>{
        getBooksAction.mockImplementation(() => ({
            type:'BOOKLISTERROR',
        }));

        const { getByTestId } = renderWithRedux(<BookContainer />, {});
        expect(getByTestId('book-error-message')).toBeInTheDocument();
    });
})


