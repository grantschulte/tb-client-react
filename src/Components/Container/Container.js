import React from 'react';
import PropTypes from 'prop-types';

function Container (props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Container;