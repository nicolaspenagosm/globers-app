import { useScrollToTop } from '../../../hooks/useScrollToTop';
import { StyledPageContainer } from './PageContainer.styled';

const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useScrollToTop();
  return <StyledPageContainer>{children}</StyledPageContainer>;
};

export default PageContainer;
