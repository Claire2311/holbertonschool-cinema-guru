import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./general.css";

function Button({ label, className, onClick, icon }) {
  return (
    <>
      <button type="button" onClick={onClick} className={className}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {label}
      </button>
    </>
  );
}

export default Button;
