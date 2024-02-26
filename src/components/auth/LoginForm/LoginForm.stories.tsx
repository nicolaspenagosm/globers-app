import { StoryFn, Meta } from '@storybook/react';
import LoginForm from './LoginForm';
import { Provider } from 'react-redux';
import store from '../../../store';

export default {
  title: 'components/auth/forms',
  component: LoginForm,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Login = Template.bind({});

export const SignUp = Template.bind({});

SignUp.args = {
  isSigningUp: true,
};
