import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { StyledForm } from './LoginForm.styled';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { feedbackMessages } from '../../../resources/feedbackMessages';
import { emailVaidator } from '../../../resources/regexs';

type Inputs = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: true,
          pattern: emailVaidator,
        }}
        render={({ field }) => (
          <Input
            type="text"
            label="Email"
            hasError={errors.email ? true : false}
            errorMsg={feedbackMessages.input.invalidEmail}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
          minLength: 6,
        }}
        render={({ field }) => (
          <Input
            type="password"
            label="Password"
            hasError={errors.password ? true : false}
            errorMsg={feedbackMessages.input.invalidPassword}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />
      <Button
        label="Login"
        hasPrimaryStyle={true}
        color="default"
        type="submit"
        aria-label="Login to your account"
      />
    </StyledForm>
  );
};

export default LoginForm;
