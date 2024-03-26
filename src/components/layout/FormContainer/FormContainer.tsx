import { Styles } from '../../../App.styled';
import { StyledFormContainer } from './FormContainer.styled';

type FormContainerProps = {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  $styles?: Styles;
};

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  onSubmit,
  $styles,
}) => {
  return (
    <StyledFormContainer $styles={$styles} onSubmit={onSubmit}>
      {children}
    </StyledFormContainer>
  );
};

export default FormContainer;
