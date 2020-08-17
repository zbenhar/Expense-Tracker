export default (state, action) => {
    switch(action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                // send down all transactions except one that was deleted
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        
        case 'ADD_TRANSACTION':
            return {
                ...state,
                // return transactions already there + new one in payload
                transactions: [...state.transactions, action.payload]
            }
        
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}