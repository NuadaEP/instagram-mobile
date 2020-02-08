import React from 'react';

import createRouter from './routes';

const App = () => {
  const Routes = createRouter();

  return <Routes />;
}

export default App;
