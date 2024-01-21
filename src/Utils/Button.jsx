import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader/Loader';

const DefaultButton = ({ children, onClick, loader, ...allyProps }) => {
  return (
    <button
      // style={{ maxWidth: '200px' }}
      onClick={onClick}
      loader={loader ? loader.toString() : undefined}
      {...allyProps}
    >
      <>{loader ? <Loader></Loader> : <>{children}</>}</>
      {/* {children} */}
    </button>
  );
};

DefaultButton.defaultProps = {
  onClick: () => null,
  children: null,
  loader: null,
};
DefaultButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default DefaultButton;
