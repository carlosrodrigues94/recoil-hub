
import React from 'react';

import {
  RecoilRoot,
} from 'recoil';

import GlobalStyle from './styles/global'
import Routes from './routes'

const App: React.FC = () =>  {

  return (
    <RecoilRoot >
      <GlobalStyle/>
      <Routes/>
    </RecoilRoot>
  );
}



export default App;
