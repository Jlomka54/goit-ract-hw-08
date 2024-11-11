import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { apiGetContacts } from "../../redux/contacts/operations";
import { Spinner } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {loading && <Spinner animation="border" variant="info" />}
      {error && (
        <p>
          Oops, some error occured &quot;{error}&quot;. Please, try again later
          🤷‍♂️.
        </p>
      )}
      <ContactForm />
      <SearchBox />

      {!loading && !error && <ContactList />}
    </div>
  );
};

export default ContactsPage;
