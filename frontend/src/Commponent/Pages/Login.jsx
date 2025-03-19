import Orb from "../../animation/Logein";
import { useState } from "react";
import { Log } from "../component/Login";
import { Sing } from "../component/SingUp";
function Login() {
  const [login, setLogin] = useState(true);
  return (
    <div className="Login">
      <div className="backgroun">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </div>
      {login ? <Log></Log> : <Sing></Sing>}
      {login ? (
        <h2 className="switch">
          don't have a account go to <a> sing-up </a>{" "}
        </h2>
      ) : (
        <h2 className="switch">
          do you ready have account <a>sign-in</a>
        </h2>
      )}
    </div>
  );
}
export default Login;
