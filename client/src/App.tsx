import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Main } from '@pages/main';
import { Intro } from '@pages/intro';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/intro' element={<Intro />} />
      </Routes>
    </Router>
  );
};

export default App;
