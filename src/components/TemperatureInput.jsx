import './temperatureInput.css';

function TemperatureInput(props) {
    const scale = props.scale;
    const scaleNames = {
        c : 'Celsius',
        f : 'Fahrenheit'
    };
    function handleChange(e) {
        props.onTemperatureChange(e.target.value);
    }
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}</legend>
            <input 
                type="text"
                value={props.temperature}
                onChange={handleChange}
            />
        </fieldset>
    );
}

export default TemperatureInput;