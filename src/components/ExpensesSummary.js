import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
    {
        props.expenses.length !== 0 && ( 
            <p>Viewing {props.expenses.length} expenses totaling {numeral(getExpensesTotal(props.expenses)/100).format('$0,0.00')}</p> 
        )
    }
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        
        expenses: visibleExpenses     
    }
}

export default connect(mapStateToProps)(ExpensesSummary);