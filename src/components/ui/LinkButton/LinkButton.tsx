import { Link } from 'react-router-dom';
import { StyledLinkButton } from './LinkButton.styled';
interface LinkButtonProps {
  label: string;
  onClick?: () => void;
  to: string;
}
export const LinkButton: React.FC<LinkButtonProps> = ({
  label,
  onClick,
  to,
}) => {
  return (
    <StyledLinkButton onClick={onClick} role="navigation">
      <Link to={to}>{label}</Link>
    </StyledLinkButton>
  );
};
