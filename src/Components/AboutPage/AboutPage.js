import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import Page from '../Page/Page';

function About () {
  const content = (
    <React.Fragment>
      <Header as='h1'>About</Header>
      <Image
        className='mb3'
        src='https://dummyimage.com/800x400/2461CE/FFF.png' />
      <p>Nunc vehicula leo at hendrerit sodales. Suspendisse vel consectetur 
        elit. Vestibulum efficitur scelerisque blandit. Duis feugiat metus quis 
        malesuada malesuada. Mauris dictum convallis est id fringilla. Curabitur 
        bibendum mattis congue. Phasellus at interdum ipsum.</p>
      <p>Morbi luctus sollicitudin quam vitae tristique. Donec tortor metus, 
        pellentesque dignissim commodo vitae, commodo id urna. Maecenas tempus 
        nunc vitae ligula mollis dictum. Sed eget tortor lacus. Orci varius 
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        mus. Proin faucibus, libero vel pellentesque placerat, augue augue 
        scelerisque mi, et mattis justo nibh scelerisque lectus. Vivamus 
        iaculis felis nec velit efficitur, ac porta dolor consectetur.</p>
    </React.Fragment>
  );

  return <Page content={content} />;
}

export default About;