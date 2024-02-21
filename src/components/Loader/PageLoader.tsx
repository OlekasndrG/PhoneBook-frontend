import { FC } from 'react';
import { HomePageLoader, Wrapper } from './PageLoader.styled';

const PageLoader: FC = () => {
  return (
    <Wrapper>
      <HomePageLoader />
      <h2>Page is loading</h2>
    </Wrapper>
  );
};
export default PageLoader;
