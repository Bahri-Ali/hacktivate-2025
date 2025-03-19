import '../../Commponent/styles/Login.css'
export function Log() {
  return (
    <div className="loginContiner">
      <h1>Log in</h1>
      <div className="inputLogin">
        <input className="input" type="mail" placeholder="You Mail" />
        <input
          className="input"
          type="password"
          name=""
          id=""
          placeholder="You Password"
        />
      </div>
      <div className="buttonLogin">
        <button className="Login">sing in</button>
      </div>
    </div>
  );
}
