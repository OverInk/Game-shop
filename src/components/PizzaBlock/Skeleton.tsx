import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={152}
    viewBox="0 0 280 152"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="67" cy="60" r="50" />
    <rect x="22" y="118" rx="13" ry="13" width="96" height="11" />
    <rect x="15" y="138" rx="0" ry="0" width="67" height="10" />
    <rect x="91" y="136" rx="0" ry="0" width="34" height="25" />
  </ContentLoader>
);

export default Skeleton;
