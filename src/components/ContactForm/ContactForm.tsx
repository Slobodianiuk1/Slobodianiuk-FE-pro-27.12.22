import {FC} from "react";
import {useCreateContactsMutation} from "../../store/api/contactApi.ts";
import {IContactData} from "../../types/contacts.ts";
import {Field, FieldProps, Form, Formik} from "formik";
import InputMask from 'react-input-mask';
import clsx from "clsx";
import {SignupSchema} from "./validator.ts";

interface IContactFormProps {
  onClick: () => void
}



const defaultValue: IContactData = {
  firstName: '',
  lastName: '',
  tel: ''
};

const ContactForm: FC<IContactFormProps> = ({onClick}) => {
  const [createContact] = useCreateContactsMutation()

  const inputClass = (error: string | undefined, touched: boolean | undefined): string => clsx(
    'w-full px-4 py-2 border-2 rounded-md focus:outline-none  transition-all duration-300 peer',
    {
      'focus:border-red-500  border-red-500': error && touched,
      'focus:border-blue-500 border-gray-400': !(error && touched),
    })

  const labelClass = (error: string | undefined, touched: boolean | undefined): string => clsx(
    'rounded text-[15px] transition-all duration-300 bg-white absolute -top-6 left-0 peer-focus:left-3 peer-focus:-top-3 peer-focus:text-[16px] peer-focus:px-2',
    {
      'text-red-500 peer-focus:text-red-500': error && touched,
      'text-gray-500 peer-focus:text-blue-500': !(error && touched),
    })

  return (
    (
      <div className="flex justify-center items-center">
        <div className='fixed bg-gray-500 bg-opacity-75 left-0 top-0 right-0 bottom-0 cursor-pointer' onClick={() => onClick()}></div>
        <div className="bg-white rounded-lg w-96 p-8 relative z-10">
          <h2 className="text-xl font-bold mb-9">Add Contact</h2>
          <Formik
            initialValues={defaultValue}
            onSubmit={(values: IContactData) => {
              createContact(values)
                .then(() => onClick())
            }}
            validationSchema={SignupSchema}
          >
            {
              ({errors, touched}) => (
                <Form>
                  <div className="relative mb-16">
                    <Field
                      id="firstName"
                      name="firstName"
                      type="text"
                      className={inputClass(errors.firstName, touched.firstName)}
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className='absolute top-11 text-[14px] text-red-500'>{errors.firstName}</div>) : null}

                    <label htmlFor="tel" className={labelClass(errors.firstName, touched.firstName)}>
                      Name:
                    </label>
                  </div>

                  <div className="relative mb-16">
                    <Field
                      id="lastName"
                      name="lastName"
                      type="text"
                      className={inputClass(errors.lastName, touched.lastName)}
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className='absolute top-11 text-[14px] text-red-500'>{errors.lastName}</div>) : null}
                    <label htmlFor="tel" className={labelClass(errors.lastName, touched.lastName)}>
                      Last name
                    </label>
                  </div>

                  <div className="relative mb-16">
                    <Field name={'tel'}>
                      {({field}: FieldProps) => (
                        <div>
                          <InputMask
                            className={inputClass(errors.tel, touched.tel)}
                            mask="+38 (099) 999 99 99"
                            {...field}
                            maskChar={'_'}/>
                          {errors.tel && touched.tel ? (
                            <div className='absolute top-11 text-[14px] text-red-500'>{errors.tel}</div>) : null}
                          <label htmlFor="tel" className={labelClass(errors.tel, touched.tel)}>
                            Last name
                          </label>
                        </div>
                      )}
                    </Field>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => onClick()}
                      type="button"
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition-all duration-200 "
                    >
                      Close
                    </button>

                    <button
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all duration-200"
                      type="submit">
                      Submit
                    </button>
                  </div>
                </Form>
              )
            }
          </Formik>
        </div>
      </div>
    ))
}

export default ContactForm;