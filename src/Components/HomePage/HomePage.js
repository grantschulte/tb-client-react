import React from 'react';
import { Header } from 'semantic-ui-react';
import Page from '../Page/Page';

function HomePage () {
  const content = (
    <React.Fragment>
      <Header as='h1'>Welcome</Header>
      <p>Pellentesque eu lacus eu odio imperdiet dapibus vitae mattis lectus.
        Fusce non aliquam nisi. Nulla at ex sit amet erat pulvinar ornare eget a 
        leo. Sed lobortis molestie auctor. Proin consectetur rutrum scelerisque. 
        Etiam sed magna congue, varius mi luctus, hendrerit nulla. Duis non 
        condimentum nisl. Aliquam tempus id lacus ac interdum. Cras eget 
        ullamcorper justo, vel eleifend massa. Praesent pharetra sem vel tellus 
        consequat, et lacinia nulla scelerisque.</p>
    </React.Fragment>
  );

  return <Page content={content} />;
}

export default HomePage;