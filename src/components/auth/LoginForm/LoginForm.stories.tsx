import { StoryFn, Meta } from '@storybook/react';
import LoginForm from './LoginForm';

export default {
  title: 'components/auth/LoginForm',
  component: LoginForm,
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const EmailInput = Template.bind({});
