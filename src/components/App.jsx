import React from "react";
import contacts from "../contacts";
import "../styles.css";
import Card from "./Card";

function App() {
    return (
        <div>
            <h1 className="heading">Meus Contatos</h1>

            {contacts.map(createCard)}
                       
        </div>
    );
}
function createCard(contacts){
    return (
    <Card 
              key = {contacts.id}
              id= {contacts.id}
              name={contacts.name}
              img={contacts.imgURL}
              tel={contacts.phone}
              email={contacts.email}
              /> 
    );    
}
export default App;