import './Button.css'

function Button({ onClick, children }) {
  return (
    <button className='btn-red' onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;