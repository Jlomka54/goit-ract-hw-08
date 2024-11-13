import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <Contact
          id={contact.id}
          name={contact.name}
          number={contact.number}
          key={contact.id}
          className={css.contactItem}
        />
      ))}
    </ul>
  );
};

export default ContactList;
