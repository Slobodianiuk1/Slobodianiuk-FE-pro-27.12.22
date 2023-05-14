import {Box, Button, TextField, Typography} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Link} from "react-router-dom";
import {FC} from "react";

interface IInputs {
  name: string
  email: string
}

const schemaLogin = yup.object({
  name: yup.string().required().min(2),
  email: yup.string().email().required(),
});

export const LoginPage:FC = () => {

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
    console.log(data);
    reset()
  }

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

            <Button variant="contained" type={'submit'} sx={{marginTop: 2, marginBottom: 2, width: '60%'}}>
              Sing in
            </Button>

            <Typography variant="body1">
              Don't have an account?

              <Link to="/register" className="ml-1 text-blue-500 hover:text-blue-700 cursor-pointer">
                Create an account.
              </Link>
            </Typography>
          </Box>
        </form>
  )
}
