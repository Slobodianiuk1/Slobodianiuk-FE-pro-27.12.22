import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[\p{L}\s'-]+$/u, 'Letters, spaces, apostrophes and hyphens'),
  lastName: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[\p{L}\s'-]+$/u, 'Letters, spaces, apostrophes and hyphens'),
  tel: Yup.string()
    .required('Required')
    .matches(/^\+38 \([0-9]{3}\) [0-9]{3} [0-9]{2} [0-9]{2}$/, 'Incorrect phone number')
});