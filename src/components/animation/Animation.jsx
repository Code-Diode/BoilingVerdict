import "./animation.css";

function Animation(props) {
  const isBoiling = props.isboiling;
 
  return (
    <div className="container">
      <div className="pot-handle-left" />
      <div className="pot-handle-right" />
      <div className="pot">
        <svg viewBox="0 0 1440 320">
          <path
            className="wave"
            opacity="1"
            fill="#4973ff"
            d="M0,160L30,181.3C60,203,120,245,180,250.7C240,256,300,224,360,213.3C420,203,480,213,540,229.3C600,245,660,267,720,266.7C780,267,840,245,900,250.7C960,256,1020,288,1080,293.3C1140,299,1200,277,1260,266.7C1320,256,1380,256,1410,256L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <div className="water">
         { isBoiling?<div>
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
         </div>:null
          }
        </div>
      </div>
    </div>
  );
}

export default Animation;
