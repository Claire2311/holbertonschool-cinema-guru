import "./general.css";

function SelectInput({ label, options, className, value, setValue }) {
  function handleSelect(onChange) {
    setValue(onChange.target.value);
  }

  return (
    <>
      <label htmlFor={label}>
        {label}

        <select
          name={label}
          id={label}
          className={className}
          onChange={handleSelect}
        >
          {options.map((opt) => (
            <option value={opt}></option>
          ))}
        </select>
      </label>
    </>
  );
}

export default SelectInput;
