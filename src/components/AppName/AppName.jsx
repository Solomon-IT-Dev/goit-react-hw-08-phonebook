import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MainTitle } from './AppName.styled';

export default function AppName({ title }) {
  return (
    <>
      {title && (
        <MainTitle>
          <Link to="/">{title}</Link>
        </MainTitle>
      )}
    </>
  );
}

AppName.propTypes = {
  title: PropTypes.string,
};
