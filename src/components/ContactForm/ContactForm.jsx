import { Formik, Field, Form } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { FaUserPlus, FaUser, FaPhoneAlt, FaPlusCircle } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice.js'; 

function ContactForm() {
    // Variables
    const nameId = nanoid();
    const numberId = nanoid();
    const initialValues = {
        name: '',
        phone: '', // 'phone' olarak güncellendi
    };

    const dispatch = useDispatch();
    const onSubmit = (values, actions) => {
        const uniqueId = nanoid();
        dispatch(addContact({ ...values, id: uniqueId }));
        actions.resetForm();
        console.log(values);
    };
    
    // Schema 
    const contactSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters long')
            .max(20, 'Name must be less than 20 characters'),
        phone: Yup.string()  // 'phone' olarak güncellendi
            .required('Phone number is required')
            .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
    });

    return (
        <section className={css.sectionForm}>
            <div className={css.container}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={contactSchema} // Validation Schema doğru
                    onSubmit={onSubmit}  // onSubmit doğru
                    validateOnChange={false} // Değişiklik sırasında validasyon yapma
                    validateOnBlur={false}   // Input alanından çıkıldığında validasyon yapma
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className={css.formContainer}>
                                <h2 className={css.title}>
                                    <span><FaUserPlus className={css.icon} /></span>Add Contact
                                </h2>
                                <div className={css.inputGroup}>
                                    <label htmlFor={nameId} className={css.label}>
                                        <span className={css.fieldIcon}><FaPhoneAlt /></span> Name
                                    </label>
                                    <Field
                                        type="text"
                                        name="name"
                                        id={nameId}
                                        placeholder="Please Enter Name"
                                        className={css.field}
                                    />
                                    {errors.name && touched.name && <div className={css.error}>{errors.name}</div>}
                                </div>
                                <div className={css.inputGroup}>
                                    <label htmlFor={numberId} className={css.label}>
                                        <span className={css.fieldIcon}><FaUser /></span> Phone Number
                                    </label>
                                    <Field
                                        type="text"
                                        name="phone"  // 'phone' olarak güncellendi
                                        id={numberId}
                                        placeholder="Please enter a number"
                                        className={css.field}
                                    />
                                    {errors.phone && touched.phone && <div className={css.error}>{errors.phone}</div>}  {/* 'phone' olarak güncellendi */}
                                </div>
                                <button 
                                    type="submit" 
                                    className={css.submitButton}
                                >
                                    Add Contact <FaPlusCircle />
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}

export default ContactForm;
