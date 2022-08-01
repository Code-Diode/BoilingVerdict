function BoilingVerdict(props) {
    const temp = props.celsius;
    return temp >= 100 ? (
        <p>The water would boil</p>
    ) : (
        <p>The water would not boil</p>
    );
}

export default BoilingVerdict;