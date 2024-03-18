import { StyledSectionSeparator } from './SectionSeparator.styled';
interface ISectionSeparatorProps {
  label: string;
}

const SectionSeparator: React.FC<ISectionSeparatorProps> = ({ label }) => {
  return (
    <StyledSectionSeparator>
      <h2>{label}</h2>
      <span />
    </StyledSectionSeparator>
  );
};

export default SectionSeparator;
