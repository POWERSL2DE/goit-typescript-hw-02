import css from './SearchBar.module.css';

import { Field, Form, Formik } from "formik";
import toast, { Toaster } from 'react-hot-toast';
import { SlMagnifier } from "react-icons/sl";



interface ISearchBar {
  setSearchData: (value: string) => void
}


const SearchBar:React.FC<ISearchBar> = ({ setSearchData }) => {
  return ( 

    <header className={css.header}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {

        if (values.query.trim() === '') {
          toast.error('You need to enter text to find pictures 🔍');
        } else {
          setSearchData(values.query);
        }

        actions.resetForm();
      }}>

      <Form className={css.searchForm}>
        <Toaster
          position="top-left"
          reverseOrder={false} />

        <label>
          <Field
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query">
          </Field>
          <button type="submit" className={css.button}> <SlMagnifier /> </button>
         </label>
        </Form>
      </Formik>
    </header>
  );

}

export default SearchBar
