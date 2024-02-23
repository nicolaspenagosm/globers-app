import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { StyledForm } from './LoginForm.styled';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { feedbackMessages } from '../../../resources/feedbackMessages';
import { emailVaidator as emailVaidatorRegex } from '../../../resources/regexs';

type Inputs = {
  email: string;
  password: string;
  passwordValidation: string;
  name: string;
  lastname: string;
};

const LoginForm: React.FC<{ isSigningUp: boolean }> = ({ isSigningUp }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {isSigningUp && (
        <>
          <Controller
            name="name"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Name"
                hasError={errors.name ? true : false}
                errorMsg={feedbackMessages.input.nameIsRequired}
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          <Controller
            name="lastname"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Lastame"
                hasError={errors.lastname ? true : false}
                errorMsg={feedbackMessages.input.lastnameIsRequired}
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
        </>
      )}
      <Controller
        name="email"
        control={control}
        rules={{
          required: true,
          pattern: emailVaidatorRegex,
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
      {isSigningUp && (
        <Controller
          name="passwordValidation"
          control={control}
          rules={{
            required: true,
            minLength: 6,
            pattern: new RegExp(`^${getValues().password}$`),
          }}
          render={({ field }) => (
            <Input
              type="password"
              label="Confirm password"
              hasError={errors.passwordValidation ? true : false}
              errorMsg={feedbackMessages.input.passwordsDoNotMatch}
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
      )}

      <Button
        label={isSigningUp ? 'Sign Up' : 'Login'}
        hasPrimaryStyle={true}
        color="default"
        type="submit"
        aria-label="Login to your account"
      />
    </StyledForm>
  );
};

export default LoginForm;
