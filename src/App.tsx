import React, { Suspense } from 'react';
import './scss/app.scss';

// import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
// import NewCard from './pages/NewCard';
import NewFullGame from './pages/NewFullGame';
import MainLayout from './layouts/MainLayout';

const NewCard = React.lazy(() => import('./pages/NewCard'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="card"
          element={
            <React.Suspense fallback={<div>Идет загрузка...</div>}>
              <NewCard />
            </React.Suspense>
          }
        />
        <Route path="game/:id" element={<NewFullGame />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

    //  <div className="wrapper">
    //    <Header />
    //    <div className="content">
    //      <div className="container">
    //        <Routes>
    //          <Route path="/" element={<Home />} />
    //          <Route path="/card" element={<NewCard />} />
    // 			<Route path="/game/:id" element={<NewFullGame />} />
    //          <Route path="*" element={<NotFound />} />
    //        </Routes>
    //      </div>
    //    </div>
    //  </div>
  );
}
export default App;
