import { useSkillsStore } from "../store/store";

const skills = [
  {
    title: "Web Development",
    description:
      "My skill stack includes a diverse range of technologies across multiple domains: front-end, back-end, and middleware. It includes the likes of HTML5, CSS3, and JavaScript, but also languages like Python, Ruby, and PHP when such languages are required (for example, PHP on Wordpress sites).",
    img: {
      src: "/textures/skill-cubes/0.png",
    },
  },
  {
    title: "Programming",
    description:
      "JavaScript is the programming language I use most. In recent years, this technology has become incredibly robust and ubiquitous — used to code on ...servers, and even ... microcontrollers. I take advantage of JavaScript libraries and frameworks where possible (React). ... superset TypeScript. ... As mentioned in other sections I can write Python, PHP, Ruby and some C and Java when needed.",
    img: {
      src: "/textures/skill-cubes/1.png",
    },
  },
  {
    title: "User Experience",
    description:
      "Skill 2 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/2.png",
    },
  },
  {
    title: "Databases",
    description:
      "Skill 3 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/3.png",
    },
  },
  {
    title: "Multimedia",
    description:
      "Skill 4 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/4.png",
    },
  },
  {
    title: "3D Software",
    description:
      "Skill 5 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/5.png",
    },
  },
  {
    title: "Bash Scripting",
    description:
      "Skill 6 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/6.png",
    },
  },
  {
    title: "Writing",
    description:
      "Skill 7 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/7.png",
    },
  },
  {
    title: "Soft Skills",
    description:
      "Skill 8 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/8.png",
    },
  },
];

export default function Skills() {
  return (
    <>
      <div
        id="skill-white-radial-gradient-container"
        className="skill-white-radial-gradient-container"
      >
        <img
          width="100px"
          src="./textures/skill-cubes/white-radial-gradient.png"
        />
      </div>
      <div id="skill-overlay" className="skill-overlay py-4">
        <div className="skill-hud text-light row col-12 col-md-6 offset-md-3">
          <div className="col-6">
            <h1>{skills[useSkillsStore((state) => state.skillIndex)].title}</h1>
            <h3 className="subtitle-darker">Subtitle</h3>
          </div>
          <div className="col-6">
            <button
              onClick={() =>
                (document.getElementById("skill-overlay").style.display =
                  "none")
              }
            >
              Close <i className="fa-solid fa-close"></i>
            </button>
          </div>
        </div>
        <div className="skill-area text-light row col-12 col-md-6 offset-md-3">
          <div className="col-6 center-vertically">
            <div className="skill-area-l center-vertically">
              <button className="test-button down left leftTop rounded-0">
                <img
                  src={
                    skills[useSkillsStore((state) => state.skillIndex)].img.src
                  }
                />
              </button>
            </div>
          </div>
          <div className="col-6 center-vertically">
            <div className="skill-area-r center-vertically">
              <div className="">
                {
                  skills[useSkillsStore((state) => state.skillIndex)]
                    .description
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section center-vertically" id="skills">
        <div
          className="page-section-fore text-dark"
          style={{ marginTop: -400 }}
        >
          <h1>Skills</h1>
          <h3 className="subtitle-darker">To make it happen.</h3>
        </div>
      </div>
      <div
        style={{
          bottom: 150,
          position: "relative",
          width: "100vw",
          zIndex: 1,
        }}
      >
        <a href="#projects-bg">
          <button style={{ zIndex: 1 }} onClick={() => console.log("works")}>
            See projects <i className="fa-solid fa-chevron-down"></i>
          </button>
        </a>
      </div>
    </>
  );
}
