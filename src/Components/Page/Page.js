import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

function Page (props) {
  const { topBar, content } = props;

  return (
    <Container className='ph3 pv4'>
      <ScrollToTopOnMount />
      { topBar &&
        <div className='mb3'>{ topBar }</div>
      }

      { content && <div>{ content }</div> }
    </Container>
  );
}

Page.propTypes = {
  topNav: PropTypes.node,
  content: PropTypes.node.isRequired
};

export default Page;