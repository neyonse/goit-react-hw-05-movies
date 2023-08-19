import {
  NotFoundWrap,
  IconSad,
  Icon404,
  GoHome,
} from './NotFoundMessage.styled';

const NotFoundMessage = () => {
  return (
    <NotFoundWrap>
      <IconSad />
      <Icon404 />
      <h1>Page not found</h1>
      <p>
        Oooops, the page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <GoHome to="/">Go Home</GoHome>
    </NotFoundWrap>
  );
};

export default NotFoundMessage;
