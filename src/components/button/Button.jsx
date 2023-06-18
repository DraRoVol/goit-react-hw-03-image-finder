import cssModule from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button type="button" className={cssModule.button} onClick={onClick}>
      Петя Hi)
    </button>
  );
};
Button.protoType = {
  onClick: PropTypes.func.isRequired,
}
export default Button;