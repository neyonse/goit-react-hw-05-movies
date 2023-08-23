import { Container, Header, Logo, Link } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo to={`/`}>
          <span role="img" aria-label="popcorn icon">
            🍿
          </span>{' '}
          GoMovies
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div className="message">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
