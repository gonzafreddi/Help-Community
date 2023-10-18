import './ToggleSwitch.css';

const ToggleSwitch = ({ text, defaultValue, onChange }) => {
  
  const handleChange = (event) => {
    const value = event.target.checked;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        className="toggle-switch"
        defaultChecked={defaultValue}
        onChange={handleChange}
      />
      {text}
    </label>
  );
};

export default ToggleSwitch;