import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';

const addRecipe = () => {
  return (
    <>
      <h1>Add Recipe</h1>
      <Formik
        initialValues={{
          recipeTitle: '',
          recipeDescription: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.programTitle) {
            errors.programTitle = 'Recipe title field is required';
          }

          if (!values.recipeDescription) {
            errors.recipeDescription =
              'Recipe description field is required';
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log('abcd');
          toast.success('Recipe added succesfully');
          console.log(values);
        }}>
        {({ isSubmitting, isValid, dirty }) => (
          <Form data-testid='addProgram'>
            <div className='mb-4'>
              <label htmlFor='recipeTitle'>Recipe title</label>
              <Field
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                id='recipeTitle'
                name='recipeTitle'
              />
              <ErrorMessage
                className='text-red-500 text-xs mt-1 ml-1'
                name='recipeTitle'
                component='div'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='recipeDescription'>Description</label>
              <Field
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                as='textarea'
                id='recipeDescription'
                name='recipeDescription'
              />
              <ErrorMessage
                className='text-red-500 text-xs mt-1 ml-1'
                name='recipeDescription'
                component='div'
              />
            </div>

            <div className='flex items-center justify-between'>
              {!isSubmitting ? (
                <button
                  className={
                    (!dirty ? 'opacity-50 cursor-not-allowed ' : '') +
                    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  }
                  type='submit'
                  disabled={!dirty}>
                  Add recipe
                </button>
              ) : (
                <span
                  className='inline-flex items-center px-4 py-2 font-bold leading-6  shadow rounded-md text-white bg-blue-500 hover:bg-blue-400 transition ease-in-out duration-150 cursor-not-allowed'
                  data-testid='processBtn'>
                  <svg
                    className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'>
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                  </svg>
                  Processing...
                </span>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default addRecipe;
