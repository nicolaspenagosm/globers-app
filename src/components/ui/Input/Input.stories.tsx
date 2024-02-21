import { StoryFn, Meta } from '@storybook/react';
import Input from './Input';


export default {
  title: 'components/ui/Inputs',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const FormInput = Template.bind({});

// Input.args = {
  
// };
