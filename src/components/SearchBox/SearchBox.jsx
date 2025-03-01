import { nanoid } from 'nanoid';
import { Formik, Field, Form } from 'formik';
import css from './SearchBox.module.css';
import { FaSearch } from 'react-icons/fa';
import {setSearchTerm} from '../../redux/filtersSlice.js'
import { useDispatch } from 'react-redux';

function SearchBox() {
    const searchId = nanoid();
    const dispatch = useDispatch();

    return (
        <section className={css.section}>
            <div className={css.container}>
                <Formik
                    initialValues={{ search: '' }} // Formik için initialValues
                    onSubmit={(values) => { 
                        console.log(values.search); 
                    }}
                >
                    {({ values, setFieldValue }) => (
                    <Form className={css.form}>
                        <div className={css.wrapper}>
                            <label htmlFor={searchId} className={css.label}>
                                <span className={css.icon}><FaSearch /></span> Search
                            </label>
                            <Field 
                                type="text"
                                id={searchId}
                                name="search"
                                placeholder="Please start typing to find contacts..."
                                className={css.field}
                                onChange={(e)=> {
                                    setFieldValue("search", e.target.value);
                                    dispatch(setSearchTerm(e.target.value));
                                }}
                            />
                        </div>
                    </Form>)}
                </Formik>
            </div>
        </section>
    );
}

export default SearchBox;
