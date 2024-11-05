import './Bank.css';
import { useState } from 'react';
import data from '../../assets/data.json';

function Bank() {
    const [users, setUsers] = useState(data);
    const [show, setShow] = useState(false); // flag to hide or show the element
    const [sender, setSender] = useState("");
    const [receiver, setReceiver] = useState("");
    const [amount, setAmount] = useState("");
  
    const userExist = (name) => {

    }
  
    const findUser = (name) => {

    }
  
    const transferMoney = () => {

    }

    return (
        <div className="Bank">
            {
                <div>
                  {
                      users.map((user) => {
                        return <div key={user.id}> {user.name} - {user.balance} </div>
                      })
                  }
                  {/* Add button for toggle here */}
                </div>
            }
            <form onSubmit={transferMoney}>
                <label>Sender: </label>
                <input 
                  type="text" 
                  value={sender} 
                  onChange={(event) => setSender(event.target.value)} 
                  required
                />
                <br />
                <label>Receiver: </label>
                <input 
                  type="text" 
                  value={receiver} 
                  onChange={(event) => setReceiver(event.target.value)} 
                  required />
                <br />
                <label>Amount: </label>
                <input 
                  type="number" 
                  value={amount} 
                  onChange={(event) => setAmount(event.target.value)} 
                  required />
                <br />
                <button>Confirm Transfer</button>
            </form>
        </div>
    );
}

export default Bank;