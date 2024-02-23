import { StyledLinkButton } from './LinkButton.styled';
interface LinkButtonProps {
  label: string;
  onClick: () => void;
}
export const LinkButton: React.FC<LinkButtonProps> = ({ label, onClick }) => {
  return <StyledLinkButton onClick={onClick}>{label}</StyledLinkButton>;
};
