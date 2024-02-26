import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { StyledForm } from './LoginForm.styled';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { FEEDBACK_MESSAGES } from '../../../resources/feedbackMessages';
import { emailVaidator as emailVaidatorRegex } from '../../../resources/regexs';
import { RootState, useAppDispatch } from '../../../store';
import { login, signUp } from '../../../store/auth-slice/auth-actions';
import ProfilePictureLoader from '../../ui/ProfilePictureLoader';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import FetchingProgressBar from '../../ui/FetchingProgressBar';
import { useSelector } from 'react-redux';

interface LoginInputs {
  email: string;
  password: string;
}

interface SingUpInputs extends LoginInputs {
  passwordValidation: string;
  name: string;
  lastname: string;
  imageFile: File;
}

const LoginForm: React.FC<{ isSigningUp: boolean }> = ({ isSigningUp }) => {
  const appIsFetching = useSelector(
    (state: RootState) => state.ui.appIsFetching,
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<SingUpInputs>();

  useEffect(() => {
    reset();
  }, [isSigningUp, reset]);

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SingUpInputs> = (userData) => {
    const authCredentials = {
      email: userData.email,
      password: userData.password,
      returnSecureToken: true,
    };

    try {
      if (isSigningUp) {
        const user = {
          email: userData.email,
          name: userData.name,
          lastname: userData.lastname,
        };
        dispatch(signUp(authCredentials, user, userData.imageFile));
      } else {
        dispatch(login(authCredentials, () => {}));
      }
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      $styles={isSigningUp ? null : { paddingTop: '2.5rem' }}
    >
      {isSigningUp && (
        <>
          <Controller
            name="imageFile"
            control={control}
            render={({ field }) => (
              <ProfilePictureLoader
                onChange={(e) =>
                  field.onChange({
                    target: { value: e.target.files![0], name: field.name },
                  })
                }
              />
            )}
          />
          <Controller
            name="name"
            defaultValue=""
            control={control}
            rules={{
              required: isSigningUp,
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
            defaultValue=""
            control={control}
            rules={{
              required: isSigningUp,
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
        defaultValue=""
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
        defaultValue=""
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
          defaultValue=""
          control={control}
          rules={{
            required: isSigningUp,
            pattern: new RegExp(`^${watch('password')}$`),
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
      {appIsFetching && createPortal(<FetchingProgressBar />, document.body)}
    </StyledForm>
  );
};

export default LoginForm;
