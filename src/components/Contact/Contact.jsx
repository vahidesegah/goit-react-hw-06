import css from './Contact.module.css'
import { FaUserAlt, FaPhoneSquareAlt,FaTrashAlt } from "react-icons/fa";

function Contact ({contact, onDelete}) {
    const {name, phone, id} = contact
    return (
        <section className={css.section}>
            <div className={css.contact}>
                <div className={css.info}>
                    <h3 className={css.name}><FaUserAlt  className={css.icon}/> {name}</h3>
                    <p className={css.number}><FaPhoneSquareAlt className={css.icon}/>{phone}</p>
                </div>
                <button className={css.btn} onClick={() => onDelete(id)}>Delete <FaTrashAlt className={css.icon}/></button>
            </div>
        </section>
    )
};
export default Contact;