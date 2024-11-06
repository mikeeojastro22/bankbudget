import { useState } from 'react';
import './Budget.css';

function Budget() {
    const [expense, setExpense] = useState("");
    const [price, setPrice] = useState("");
    const [budget, setBudget] = useState(10000);
    const [itemList, setItemList] = useState([]);

    const addExpense = () => {

    }

    return (
        <div className='Budget'>
            <p>My budget: {budget}</p>
            {
                itemList.map((item) => {
                    return <div key={item.itemId}> {item.itemName} - {item.itemPrice} </div>
                })
            }
            <label>Expense: </label>
            <input 
                type="text" 
                value={expense} 
                onChange={(event) => setExpense(event.target.value)}
            />
            <label>Price: </label>
            <input 
                type="number" 
                value={price} 
                onChange={(event) => setPrice(event.target.value)}
            />
            <br />
            <button onClick={addExpense}>Add Expense</button>
        </div>
    );
}

export default Budget;