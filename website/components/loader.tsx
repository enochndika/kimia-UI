import ContentLoader from 'react-content-loader';
import { FC } from 'react';

export const Loader: FC = (props) => (
  <ContentLoader viewBox="0 0 100% 650" height={650} width={'100%'} {...props}>
    <rect x="0" y="42" rx="5" ry="5" width="100%" height="300" />
  </ContentLoader>
);
