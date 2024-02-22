import { StoryFn, Meta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'components/ui/Inputs',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const EmailInput = Template.bind({});

EmailInput.args = {
  label: 'Email',
  type: 'text',
  hasError: false,
  errorMsg:"Please provide a valid email"
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  label: 'Password',
  type: 'password',
  hasError: false,
  errorMsg:"Password must be at least 6 characters long"
};
