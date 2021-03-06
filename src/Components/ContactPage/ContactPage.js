import React from 'react';
import { Header } from 'semantic-ui-react';
import Page from '../Page/Page';

function ContactPage () {
  const content = (
    <React.Fragment>
      <Header as='h1'>Contact Us</Header>
      <p>Nunc vehicula leo at hendrerit sodales. Suspendisse vel consectetur 
        elit. Vestibulum efficitur scelerisque blandit. Duis feugiat metus quis 
        malesuada malesuada. Mauris dictum convallis est id fringilla. Curabitur 
        bibendum mattis congue. Phasellus at interdum ipsum. Morbi luctus 
        sollicitudin quam vitae tristique. Donec tortor metus, pellentesque 
        dignissim commodo vitae, commodo id urna. Maecenas tempus nunc vitae 
        ligula mollis dictum. Sed eget tortor lacus. Orci varius natoque 
        pen\atibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Proin faucibus, libero vel pellentesque placerat, augue augue 
        scelerisque mi, et mattis justo nibh scelerisque lectus. Vivamus 
        iaculis felis nec velit efficitur, ac porta dolor consectetur.</p>
    </React.Fragment>
  );

  return <Page content={content} />;
}

export default ContactPage;