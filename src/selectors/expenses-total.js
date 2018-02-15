
export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce(function(sum, expense) {
        return sum + expense;
    }, 0);
}