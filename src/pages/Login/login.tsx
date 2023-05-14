import { Box, Button, TextField, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required(),
  tel: yup.number().positive().integer().required(),
  email: yup.string().required().required(),
});

export const Login = () => {
  type Inputs = {
    name: string;
    tel: string;
    email: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <div>
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
              variant="outlined"
              margin="normal"
              fullWidth={true}
              error={!!errors.tel}
              {...register('name')}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="normal"
              {...register('email')}
            />
            <TextField
              id="tel"
              label="Phone number"
              variant="outlined"
              fullWidth={true}
              margin="normal"
              {...register('tel')}
            />

            <Button
              variant="contained"
              type={'submit'}
              sx={{ marginTop: 2, width: '60%' }}
            >
              Sing in
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};
