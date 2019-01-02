import React from 'react';
import { Button, Header, Image } from 'semantic-ui-react';
import Page from '../Page/Page';

function HomePage (props) {
  const onClick = () => props.history.push('/items');

  const content = (
    <React.Fragment>
      <Header as='h1'>Welcome</Header>
      <p>Nunc vehicula leo at hendrerit sodales. Suspendisse vel consectetur 
        elit. Vestibulum efficitur scelerisque blandit. Duis feugiat metus quis 
        malesuada malesuada. Mauris dictum convallis est id fringilla. Curabitur 
        bibendum mattis congue. Phasellus at interdum ipsum.</p>
      <Button
        primary
        fluid
        size='large'
        onClick={onClick}>View Items</Button>
    </React.Fragment>
  );

  return <Page content={content} />;
}

export default HomePage;