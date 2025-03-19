import GooeyNav from "../../animation/Nav.jsx";
import Logo from '../../assets/Logo.png'
export function Header() {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Log-in", href: "#" },
  ];
  return (
    <div className="Header">
      <div className="HeaderTitle">
        <img src={Logo} alt="" />
        <h1>CLUBS DZ</h1>
      </div>
      <div className="HeaderNav" style={{ position: "relative" }}>
        <GooeyNav
          items={items}
          animationTime={600}
          pCount={15}
          minDistance={20}
          maxDistance={42}
          maxRotate={75}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
        />
      </div>
    </div>
  );
}
export default Header