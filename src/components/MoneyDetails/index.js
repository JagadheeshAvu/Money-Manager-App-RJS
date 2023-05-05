// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, incomeAmount, expensesAmount} = props
  return (
    <div className="salary-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          data-testId="balanceAmount"
          alt="balance"
          className="img"
        />
        <div>
          <p className="money-text">Your Balance</p>
          <p className="price-text">Rs {balance}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          data-testId="incomeAmount"
          className="img"
        />
        <div>
          <p className="money-text">Your Income</p>
          <p className="price-text">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          data-testId="expensesAmount"
          alt="expenses"
          className="img"
        />
        <div>
          <p className="money-text">Your Expenses</p>
          <p className="price-text">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
