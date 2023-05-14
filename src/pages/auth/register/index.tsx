import {Box, Button, TextField, Typography} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Link} from "react-router-dom";
import {FC} from "react";

interface IInputs {
  name: string
  email: string
  tel: string
}

const schemaLogin = yup.object({
  name: yup.string().required().min(2),
  email: yup.string().email().required(),
  tel: yup
    .number()
    .typeError('The phone must be a number.')
    .positive('The phone must be a positive number')
    .integer('The phone number must be an integer')
    .test(
      'len',
      'The phone number must contain 12 characters',
      (val) => val === null || val === undefined || (val.toString().length === 12)
    )
    .nullable()

});

export const RegisterPage:FC = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<IInputs>({
    mode: "onChange",
    resolver: yupResolver(schemaLogin)
  })

  const onSubmit: SubmitHandler<IInputs> = data => {
    reset()
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-10 p-3 h-[100vh] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width={400}
        margin="auto"
        padding={5}
        borderRadius={5}
        boxShadow={'-3px -2px 20px 1px #202020'}
      >
        <Typography variant="h2" textAlign="center" fontSize={32}>
          Sign in
        </Typography>

        <TextField
          id="name"
          label="Name"
          variant="outlined" margin="normal"
          fullWidth={true}
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth={true}
          margin="normal"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          id="tel"
          label="Phone number"
          variant="outlined"
          fullWidth={true}
          margin="normal"
          {...register('tel')}
          error={!!errors.tel}
          helperText={errors.tel?.message}
        />

        <Button variant="contained" type={'submit'} sx={{marginTop: 2, marginBottom: 2, width: '60%'}}>
          Sing in
        </Button>

        <Typography variant="body1">
          Do you have an account?

          <Link to="/login" className="ml-1 text-blue-500 hover:text-blue-700 cursor-pointer">
            Sing in.
          </Link>
        </Typography>
      </Box>
    </form>
  )
}