import "../styles/Welcom.css";
import GridMotion from "../../animation/welcom.jsx";
import welcom from "../../assets/welcom2.svg";
function Welcom() {
  const items = [
    "Item 1",

    <div key="jsx-item-1">Custom JSX Content</div>,

    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "Item 2",

    <div key="jsx-item-2">Custom JSX Content</div>,

    "Item 4",

    <div key="jsx-item-2">Custom JSX Content</div>,

    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "Item 5",

    <div key="jsx-item-2">Custom JSX Content</div>,

    "Item 7",

    <div key="jsx-item-2">Custom JSX Content</div>,

    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "Item 8",

    <div key="jsx-item-2">Custom JSX Content</div>,

    "Item 10",

    <div key="jsx-item-3">Custom JSX Content</div>,

    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "Item 11",

    <div key="jsx-item-2">Custom JSX Content</div>,

    "Item 13",

    <div key="jsx-item-4">Custom JSX Content</div>,

    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "Item 14",
  ];
  return (
    <div className="welcom">
      <div className="welcomBackground">
        <GridMotion items={items} />
      </div>
      <div className='welcomT'>
        <h1>Welcom to Clubs DZ</h1>
      </div>
      <div className="welcomContiner">
        <div className="welcomTitle">
          <p>
            Welcome to the World of University Computer Science Clubs! We are a
            community of technology and programming enthusiasts, dedicated to
            sharing knowledge, developing skills, and exploring the latest
            advancements in computer science. Whether you're a beginner or an
            expert, you'll find workshops, competitions, and events to help you
            grow and connect with like-minded peers.
          </p>
        </div>
        <div className="welcomImg">
          <img src={welcom} alt="" />
        </div>
      </div>
    </div>
  );
}

export default  Welcom