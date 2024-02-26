import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';
import addIcon from './../../../assets/add-icon.png';
import cancelIcon from './../../../assets/cancel-icon.png';
import heartIcon from './../../../assets/heart-icon.png';
import trashIcon from './../../../assets/trash-icon.png';

export default {
  title: 'components/ui/Buttons',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const NewContact = Template.bind({});

NewContact.args = {
  label: 'New',
  icon: addIcon,
  type: 'button',
  hasPrimaryStyle: true,
  color: 'action',
  ariaLabel: 'Add a new contact',
};

export const RemoveFromFavorites = Template.bind({});

RemoveFromFavorites.args = {
  label: 'Remove',
  icon: cancelIcon,
  type: 'button',
  color: 'warning',
  ariaLabel: 'Remove a contact from favorites',
  hasPrimaryStyle:false
};

export const AddToFavorites = Template.bind({});

AddToFavorites.args = {
  icon: heartIcon,
  type: 'button',
  color: 'action',
  hasPrimaryStyle: false,
  ariaLabel: 'Add to favorites',
};

export const DeleteContact = Template.bind({});

DeleteContact.args = {
  icon: trashIcon,
  type: 'button',
  color: 'warning',
  hasPrimaryStyle: false,
  ariaLabel: 'Delete contact',
};

export const RemoveFromFavoritesIcon = Template.bind({});

RemoveFromFavoritesIcon.args = {
  icon: cancelIcon,
  type: 'button',
  color: 'warning',
  hasPrimaryStyle: false,
  ariaLabel: 'Remove from favorites',
};

export const SaveContact = Template.bind({});

SaveContact.args = {
  label: 'Save',
  type: 'button',
  color: 'default',
  hasPrimaryStyle: true,
};
