import { StoryFn, Meta } from '@storybook/react';
import Input from './Input';
import { FEEDBACK_MESSAGES } from '../../../resources/feedbackMessages';

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
  errorMsg: FEEDBACK_MESSAGES.input.invalidEmail,
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  label: 'Password',
  type: 'password',
  hasError: false,
  errorMsg: FEEDBACK_MESSAGES.input.invalidPassword,
};
