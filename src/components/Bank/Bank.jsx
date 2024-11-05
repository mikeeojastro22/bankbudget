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
      // return true if name from our parameter is already in our users array
      return users.find((user) => user.name === name);
    }
  
    const findUser = (name) => {
      // filter method - returns an array
      // it should match the condition inside the checker
      let foundUser = users.filter((user) => user.name === name);
      return foundUser[0];
    }
  
    const transferMoney = () => {
      // changing input string into number
      const newAmount = Number(amount);
      if(userExist(sender) && userExist(receiver) && sender !== receiver && newAmount > 0){
        const senderInfo = findUser(sender);
        if(senderInfo.balance >= newAmount){
          // update our users array
          // new balance of sender and receiver should be reflected
          // what we should do: create a new array that contains the updated balances
          const updateUsers = users.map((user) => {
              if(user.name === sender){
                return {
                  ...user,
                  balance: user.balance - newAmount
                };
              } else if (user.name === receiver) {
                return {
                  ...user,
                  balance: user.balance + newAmount
                }
              }
              return user;
          });
          setUsers(updateUsers);
        } else {
          alert('Not enough balance');
        }
      } else {
        alert('Transaction invalid');
      }

      setSender("");
      setReceiver("");
      setAmount("");
      setShow(false);
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
                  <button onClick={() => setShow(!show)}>Show Transfer Money</button>
                </div>
            }
            {
              show &&
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
            }         
        </div>
    );
}

export default Bank;