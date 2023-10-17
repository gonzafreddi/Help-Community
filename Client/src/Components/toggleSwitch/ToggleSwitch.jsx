import './ToggleSwitch.css'

const ToggleSwitch = ({text, defaultValue}) => {
  return (
    <label>
        <input type="checkbox" className="toggle-switch" defaultChecked={defaultValue} />
        {text}
    </label>
  )
}

export default ToggleSwitch