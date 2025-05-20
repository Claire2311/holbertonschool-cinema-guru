import "./general.css";

function SelectInput({ label, options, className, value, setValue }) {
  function handleSelect(onChange) {
    setValue(onChange.target.value);
  }

  return (
    <div className={className}>
      <label htmlFor={label}>
        {label}

        <select name={label} id={label} value={value} onChange={handleSelect}>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SelectInput;
