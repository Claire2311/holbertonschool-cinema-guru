import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./general.css";

function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes,
}) {
  function handleInput(onChange) {
    setValue(onChange.target.value);
  }

  return (
    <div className={className}>
      <label htmlFor={label}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {label}
      </label>

      <input
        type={type}
        id={label}
        name={label}
        value={value}
        onChange={handleInput}
        {...inputAttributes}
      />
    </div>
  );
}

export default Input;
