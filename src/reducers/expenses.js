const expensesReduceDefaultState = [];

export default (state = expensesReduceDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense
            ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } 
                return expense;
            })
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};