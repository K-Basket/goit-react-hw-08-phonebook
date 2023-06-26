import { useSelector } from 'react-redux';
import { isLoggetInSelector, userSelector } from 'redux/auth/selectors';

const Home = () => {
  const isLoggetIn = useSelector(isLoggetInSelector);
  const { name } = useSelector(userSelector);

  return (
    <>
      {isLoggetIn ? (
        <div>
          <h2>{`Welcome to our site, ${name}!`}</h2>
          <p>Here you can create your phone book.</p>
        </div>
      ) : (
        <p>Please register or login to your account.</p>
      )}
    </>
  );
};

export default Home;
