import Animation from "./animation/Animation.jsx";

function BoilingVerdict(props) {
    const temp = props.celsius;
    const centered = {
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    }

    const verdictStyle = {
        boxShadow: '0 0 0 5px #808080',
        margin: '30px',
        borderRadius: '35px',
        padding: '10px'
    }
    return (
        <div className="container" 
        style={centered}>
            {temp >= 100 ? (
                <p style={verdictStyle}>The water would boil</p>
            ) : (
                <p style={verdictStyle}>The water would <span style={{color:'red'}}>not</span> boil</p>
            )}
            <Animation isboiling={temp >= 100? true : false} />
            
        </div>
    )
}

export default BoilingVerdict;