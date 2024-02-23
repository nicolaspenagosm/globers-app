import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { StyledForm } from './LoginForm.styled';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { FEEDBACK_MESSAGES } from '../../../resources/feedbackMessages';
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

  // TO-DO:changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component
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
                errorMsg={FEEDBACK_MESSAGES.input.nameIsRequired}
                onChange={field.onChange}
                value={field.value}
                isRequired={true}
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
                errorMsg={FEEDBACK_MESSAGES.input.lastnameIsRequired}
                onChange={field.onChange}
                value={field.value}
                isRequired={true}
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
            errorMsg={FEEDBACK_MESSAGES.input.invalidEmail}
            onChange={field.onChange}
            value={field.value}
            isRequired={true}
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
            errorMsg={FEEDBACK_MESSAGES.input.invalidPassword}
            onChange={field.onChange}
            value={field.value}
            isRequired={true}
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
              errorMsg={FEEDBACK_MESSAGES.input.passwordsDoNotMatch}
              onChange={field.onChange}
              value={field.value}
              isRequired={true}
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
