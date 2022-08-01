import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

function convert(temp, converter) {
    const input = parseFloat(temp);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = converter(input);
    return output;
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9 ;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32 ;
}

function Calculator() {
    const [temp, setTemp] = useState("0");
    const [scale, setScale] = useState("c");

    function handleCelsiusChange(tempInC) {
        setTemp(tempInC);
        setScale("c");
    }

    function handleFahrenheitChange(tempInF) {
        setTemp(tempInF);
        setScale("f");
    }

    const celsius = scale === 'c' ? temp : convert(temp, toCelsius);
    const fahrenheit = scale === 'f' ? temp : convert(temp, toFahrenheit);

    return (
        <div>
            <TemperatureInput
                temperature={celsius}
                scale="c"
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                temperature={fahrenheit}
                scale="f"
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={celsius} />
        </div>
    );
}

export default Calculator;