import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { apiDeleteContact } from "../../redux/contacts/operations";

const Contact = (props) => {
  const { name, number, id } = props;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(apiDeleteContact(id));
  };

  return (
    <li className={css.contactItem} key={id}>
      <div className={css.box}>
        <p>Name: {name}</p>
        <p>Phone: {number}</p>
      </div>
      <button className={css.button} type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
