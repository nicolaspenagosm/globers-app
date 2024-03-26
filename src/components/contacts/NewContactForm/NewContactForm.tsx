import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IContact } from '../../../types/shared';
import FormContainer from '../../layout/FormContainer';
import Input from '../../ui/Input';
import { FEEDBACK_MESSAGES } from '../../../resources/feedbackMessages';
import ProfilePictureLoader from '../../ui/ProfilePictureLoader';
import Checkbox from '../../ui/Checkbox/Checkbox';
import Button from '../../ui/Button';
import { emailVaidator } from '../../../resources/regexs';


interface NewContactProps extends IContact {
  imageFile: File;
}

const NewContactForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<NewContactProps>();

  const onSubmit: SubmitHandler<NewContactProps> = (contactData) => {
    const randomUUID = crypto.randomUUID();
    const newContact = {
      ...contactData,
      id: randomUUID,
      isFavorite: contactData.isFavorite.toString(),
      uniqueNameKey: contactData.name + contactData.lastname + randomUUID,
    };
    console.log(newContact);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
        defaultValue=""
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Input
            type="text"
            label="Lastname"
            hasError={errors.lastname ? true : false}
            errorMsg={FEEDBACK_MESSAGES.input.lastnameIsRequired}
            onChange={field.onChange}
            value={field.value}
            isRequired={true}
          />
        )}
      />
      <Controller
        name="email"
        defaultValue=""
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
            errorMsg={FEEDBACK_MESSAGES.input.invalidEmail}
            onChange={field.onChange}
            value={field.value}
            isRequired={true}
          />
        )}
      />
      <Controller
        name="isFavorite"
        defaultValue="false"
        control={control}
        render={({ field }) => (
          <Checkbox
            label="Enable like favorite"
            id="isFavorite"
            onChange={field.onChange}
          />
        )}
      />

      <Button
        label="save"
        hasPrimaryStyle={true}
        color="default"
        type="submit"
        aria-label="Save new contact"
        onClick={() => {}}
      />
    </FormContainer>
  );
};

export default NewContactForm;
