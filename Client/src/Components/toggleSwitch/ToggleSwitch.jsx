import './ToggleSwitch.css';

const ToggleSwitch = ({ text, defaultValue, onChange }) => {
  
  const handleChange = () => {
    if (onChange) {
      console.log(!defaultValue);
      onChange(!defaultValue);
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