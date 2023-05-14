import cssModule from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" className={cssModule.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;