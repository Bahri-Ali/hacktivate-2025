import Particles from "../../animation/About";
import "../styles/About.css";
import CircularGallery from "../../animation/ImgSlider.jsx";
import RollingGallery from "../../animation/About2";
import BounceCards from "../../animation/About2.jsx";
 function About() {
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];
  const images = [
    "https://i.ibb.co/j9rsDnGD/images.jpg",
    "https://i.ibb.co/j9rsDnGD/images.jpg",
    "https://i.ibb.co/j9rsDnGD/images.jpg",
    "https://i.ibb.co/j9rsDnGD/images.jpg",
    "https://i.ibb.co/j9rsDnGD/images.jpg",
  ];
  return (
    <div className="about">
      <div>
        <div className="aboutBack">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="aboutBack">
          <h1 className="titleAbout">Wath is Clubs_DZ</h1>
          <div className="AboutContiner">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              ratione delectus incidunt dolores id sed doloremque quo! Et,
              dolorem quo! Architecto ad officia amet explicabo provident sed
              ducimus aut harum! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam ratione delectus incidunt dolores id sed
              doloremque quo! Et, dolorem quo! Architecto ad officia amet
              explicabo provident sed ducimus aut harum! ducimus aut harum!
              ducimus aut harum! olorem quo! Architecto ad officia amet
              explicabo provident sed ducimus aut harum! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Ipsam ratione delectus incidunt
              dolores id sed doloremque quo! Et, dolorem quo! Architecto ad
              officia amet explicabo provident sed ducimus aut harum! ducimus
              aut harum!
            </p>
            <BounceCards
              className="custom-bounceCards"
              images={images}
              containerWidth={500}
              containerHeight={250}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={false}
            />
          </div>
          <div className="imgslider">
            <div style={{ height: "600px", position: "relative" }}>
              <CircularGallery
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About