import React from 'react';
import styled from 'styled-components';

import GetLatestBlock from './GetLatestBlock';

const Wrapper = styled.div`
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <GetLatestBlock />
    </Wrapper>
  );
}

export default App;