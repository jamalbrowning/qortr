import PropTypes from 'prop-types';

const dateShape = PropTypes.shape({
  dateId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dateFormat: PropTypes.string.isRequired,
});

export default { dateShape };
