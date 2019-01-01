import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from '../ContentContainer/ContentContainer';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

function Page (props) {
  const { topNav, content } = props;

  return (
    <ContentContainer className='pa3'>
      <ScrollToTopOnMount />
      { topNav && <div>{ topNav }</div> }
      { content && <div>{ content }</div> }
    </ContentContainer>
  );
}

Page.propTypes = {
  topNav: PropTypes.node,
  content: PropTypes.node.isRequired
};

export default Page;