import PropTypes from 'prop-types';

export const ImageGallery = ({ image }) => {
  return (
    <ul>
      {image.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id}>
          <p>{webformatURL}</p>
          <p>{largeImageURL}</p>
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  image: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
