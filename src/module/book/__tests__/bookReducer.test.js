import bookReducer, { INITIAL_BOOK_REDUCER_STATE } from "../bookReducer"



describe('bookReducer', () => {
    it('should return right new state', () => {
        const action = {
            type: 'BOOKLIST',
            payload: [{
                id: 2,
                title: 'test title',
                description: 'dec',
                releaseYear: 2018
            }]
        }

        const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);

        expect(newState).toEqual({
            books: [{
                id: 2,
                title: 'test title',
                description: 'dec',
                releaseYear: 2018
            }],
            promise: {
                isPending: false,
                isFullfilled: false,
                isErrorOcurred: false
            }
        })
    })

    it('should return right new state for BOOKSBYTITLE Action', () => {
        const action = {
            type: 'BOOKSBYTITLE',
            payload: [{
                id: 2,
                title: 'second book',
                description: 'dec',
                releaseYear: 2018
            }]
        };

        const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);
        expect(newState).toEqual({
            books: [{
                id: 2,
                title: 'second book',
                description: 'dec',
                releaseYear: 2018
            }],
            promise: {
                isPending: false,
                isFullfilled: false,
                isErrorOcurred: false
            }
        })
    });
})