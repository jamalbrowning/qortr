import PropTypes from 'prop-types';

const userShape = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
});

export default { userShape };
