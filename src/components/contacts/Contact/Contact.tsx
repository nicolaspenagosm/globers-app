import { IContact } from '../../../types/shared';
import Button from '../../ui/Button';
import ProfilePciture from '../../ui/ProfilePicture/ProfilePicture';
import cancelIcon from './../../../assets/cancel-icon.png';
import { StyledContact, TextLinePlaceHolder } from './Contact.styled';
import heartIcon from '../../../assets/heart-icon.png';

interface IContactProps extends Partial<IContact> {
  isPlaceholder?: boolean;
  isRemovable?: boolean;
}

const Contact: React.FC<IContactProps> = ({
  name,
  email,
  lastname,
  isPlaceholder,
  isFavorite,
  isRemovable,
}) => {
  const renderElement = (component: React.ReactNode) =>
    isPlaceholder ? <TextLinePlaceHolder /> : component;

  const isFav = isFavorite === 'true';

  return (
    <StyledContact>
      <section>
        <ProfilePciture $size="6.5rem" isPlaceholder={isPlaceholder} />
        {renderElement(<h3>{`${name} ${lastname}`}</h3>)}
        {renderElement(<p>{email}</p>)}
      </section>
      <section>
        <hr />
        <div>
          {renderElement(
            <>
              {isFav && (
                <Button
                  label={isRemovable ? undefined : 'Remove'}
                  icon={cancelIcon}
                  type="button"
                  color="warning"
                  ariaLabel="Remove contact from favorites"
                  hasPrimaryStyle={false}
                  onClick={() => {}}
                />
              )}
              {!isFav && (
                <Button
                  icon={heartIcon}
                  type="button"
                  color="action"
                  ariaLabel="Add contact to favorites"
                  hasPrimaryStyle={false}
                  onClick={() => {}}
                />
              )}
            </>,
          )}
        </div>
      </section>
    </StyledContact>
  );
};

export default Contact;
