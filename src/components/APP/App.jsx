import { Component } from "react";
import Section from "components/Section/Section";
import {Container} from "./App.styled";
import  {ContactList}  from "components/ContactList/ContactList";
import { Phonebook } from "components/Phonebook/Phonebook";
import {Filter} from "components/Filter/Filter";
import { nanoid } from 'nanoid'

class App extends Component {
  state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  };

addContact = ({name, number}) => {
  const {contacts} =this.state;
  const contact = {
    id: nanoid(),
    name,
    number,
  };
//перевіряємо чи є такй контак в потоці, якщо немає то додаємо
  const checkName = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  if(checkName) {
    alert(`${name} is already in contact`);
    return;
  }

  this.setState(({contacts}) =>({contacts:[contact, ...contacts]}));
};

//метод для видалення контактів, який передамо в контакт ліст у якості пропсві, щоб видалити контакт

deleteContact = contactId => {
  this.setState(prevState =>({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }));
}

 //створюємо метод для фільтрації контактів, коли вводимо в інпут значення то відбувається фільтрація і виводяться тільки ті контакти в яких є введені значення
 changeFilter = e => {
  this.setState({ filter: e.currentTarget.value });
};

//створємо метод для фільтрації контактів відповідно до введених значень в інпут
getFilteredContacts = () => {
  const { filter, contacts } = this.state;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

  render() {
    const filteredContacts = this.getFilteredContacts();
    return(
      <Container>
        <Section title="Phonebook">
          <Phonebook onSubmit={this.addContact}></Phonebook>
        </Section>
        <Section title="Contacts">
          <Filter value={this.filter} onChange={this.changeFilter}> </Filter>
          <ContactList
           onDeleteContact={this.deleteContact} contacts={filteredContacts}></ContactList>
        </Section>
      </Container>
    )
  } 
}


export default App;



