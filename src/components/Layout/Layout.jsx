import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Header/>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};