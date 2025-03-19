import '../../Commponent/styles/Login.css'
export function Sing() {
  return (
    <div className="singin">
      <h1>Sing up</h1>
      <div className="singinInput">
        <input type="email" name="" placeholder="Mail Of Club" id="" required />
        <input type="text" name="" placeholder="Name Of Club" id="" required />
        <input type="text" placeholder="University Name" required />
        <input
          type="password"
          name=""
          id=""
          placeholder="Your Password"
          required
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Confirme Your Password"
          required
        />
      </div>
      <div className="buttonSingin">
        <button className="buttonSingin">sing up</button>
      </div>
    </div>
  );
}
