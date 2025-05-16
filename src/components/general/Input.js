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
    <>
      <label for={label}>
        <FontAwesomeIcon icon={icon} />
        {label}
      </label>

      <input
        type={type}
        id={label}
        name={label}
        value={value}
        className={className}
        onChange={handleInput}
        {...inputAttributes}
      />
    </>
  );
}

export default Input;
