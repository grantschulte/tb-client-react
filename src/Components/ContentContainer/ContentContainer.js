import React from 'react';
import PropTypes from 'prop-types';

function ContentContainer (props) {
  return (
    <div className={props.className}>
      { props.children }
    </div>
  );
}

ContentContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ContentContainer;