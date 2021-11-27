import React from 'react';
import ContentLoader from 'react-content-loader';

export default function SkeletonLoader(props) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <ContentLoader
          viewBox="0 0 100 650"
          height={650}
          width={'100%'}
          {...props}
        >
          <rect x="0" y="42" rx="5" ry="5" width="100%" height="300" />
        </ContentLoader>
      )}
    </>
  );
}
