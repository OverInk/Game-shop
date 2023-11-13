import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';

// import Header from './components/Header';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
// import NotFound from './pages/NotFound';
// import NewCard from './pages/NewCard';
// import NewFullGame from './pages/NewFullGame';

const NewCard = lazy(() => import('./pages/NewCard'));
const NewFullGame = lazy(() => import('./pages/NewFullGame'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="card"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <NewCard />
            </Suspense>
          }
        />
        <Route path="game/:id" element={
			<Suspense fallback={<div>Идет загрузка...</div>}>
				<NewFullGame/>
			</Suspense>
		  } />
        <Route path="*" element={
			<Suspense fallback={<div>Идет загрузка...</div>}>
				<NotFound/>
			</Suspense>
		  } />
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
