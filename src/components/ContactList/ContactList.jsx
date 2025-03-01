import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactSlice.js';
import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

function ContactList() {
    const contacts = useSelector((state) => state.contacts.contacts); 
    const searchTerm = useSelector((state) => state.filters.searchTerm);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeContact(id));
    };

    const filteredContacts = contacts.filter(
        (item) => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.phone.toString().includes(searchTerm) 
    );

    const contactsToShow = searchTerm ? filteredContacts : contacts; 

    return (
        <section className={css.contactListSection}> 
            <div className={css.container}>
                <div className={css.contactListContainer}> 
                    <h2 className={css.contactListTitle}>Contact List</h2> 
                    {searchTerm && filteredContacts.length === 0 ? (  
                        <p className={css.noContactsMessage}>No contacts found.</p> 
                    ) : contactsToShow.length > 0 ? ( 
                        <ul className={css.contactList}> 
                            {contactsToShow.map((contact) => (
                                <li key={contact.id} className={css.contactListItem}> 
                                    <Contact contact={contact} onDelete={handleDelete} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className={css.noContactsMessage}>No contacts yet.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ContactList;
