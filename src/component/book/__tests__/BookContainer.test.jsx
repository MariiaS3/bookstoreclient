import React from "react";
import renderWithRedux from "../../../util/testUnit";
import BookContainer from "../BookContainer";
import BookList from "../BookList";

jest.mock('../BookList')
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

        // const {getByText} =
        renderWithRedux(<BookContainer />, {
            initialState:{
                bookReducer:{
                    books,
                }
            }
        })
        // expect(getByText('Here we will display all books.')).toBeInTheDocument();
        expect(BookList).toHaveBeenCalledWith({books},{})
    })
})


