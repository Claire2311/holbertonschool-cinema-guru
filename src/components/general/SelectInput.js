import "./general.css";

function SelectInput({ label, options, className, value, setValue }) {
  function handleSelect(onChange) {
    setValue(onChange.target.value);
  }

  return (
    <div className={className}>
      <label htmlFor={label}>
        {label}

        <select name={label} id={label} onChange={handleSelect}>
          {options.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SelectInput;
