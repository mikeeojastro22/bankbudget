import { useState } from 'react';
import './Budget.css';

function Budget() {
    const [expense, setExpense] = useState("");
    const [price, setPrice] = useState("");
    const [budget, setBudget] = useState(10000);
    const [itemList, setItemList] = useState([]);

    const addExpense = () => {
        let newPrice = Number(price);
        if(newPrice < 0){
            alert('Invalid Amount!');
        } else {
            let newBudget = budget - newPrice;
            let newExpense = {
                // ? - checker is itemList is already existing
                // without ? - this will cause an error if itemList is nonexistent
                itemId: itemList?.length,
                itemName: expense,
                itemPrice: newPrice
            }
            let newList = [...itemList, newExpense];
            setBudget(newBudget);
            setItemList(newList);
        }
        setExpense("");
        setPrice("");
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