import { IContact } from '../../../types/shared';
import Button from '../../ui/Button';
import ProfilePciture from '../../ui/ProfilePicture/ProfilePicture';
import cancelIcon from './../../../assets/cancel-icon.png';
import { StyledContact, TextLinePlaceHolder } from './Contact.styled';

interface IContactProps extends Partial<IContact> {
  isPlaceholder?: boolean;
}

const Contact: React.FC<IContactProps> = ({
  name,
  email,
  lastname,
  isPlaceholder,
  isFavorite,
}) => {
  const renderElement = (component: React.ReactNode) =>
    isPlaceholder ? <TextLinePlaceHolder /> : component;
  return (
    <StyledContact>
      <section>
        <ProfilePciture $size="6.5rem" isPlaceholder={isPlaceholder} />
        {renderElement(<h3>{`${name} ${lastname}`}</h3>)}
        {renderElement(<p>{email}</p>)}
      </section>
      <section>
        <hr />
        {isFavorite === 'true' &&
          renderElement(
            <Button
              label="Remove"
              icon={cancelIcon}
              type="button"
              color="warning"
              ariaLabel="Remove a contact from favorites"
              hasPrimaryStyle={false}
              onClick={() => {}}
            />,
          )}
      </section>
    </StyledContact>
  );
};

export default Contact;
