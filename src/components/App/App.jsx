import { useState, lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import Spinner from 'components/Spinner/Spinner';

const Home = lazy(() => import('../../components/Home/Home'));
const Movies = lazy(() => import('../../components/Movies/Movies'));
const App = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>

      <main>
        <section className={css.section}>
          <div className={css.container}>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<Home isLoading={setShowSpinner} />} />
                <Route
                  path="/movies"
                  element={<Movies isLoading={setShowSpinner} />}
                />
              </Routes>
            </Suspense>
          </div>
        </section>

        {showSpinner && <Spinner />}
      </main>
    </>
  );
};

export default App;
