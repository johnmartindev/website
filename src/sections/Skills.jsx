import { useSkillsStore } from "../store/store";

const skills = [
  {
    title: "Skill 0",
    description:
      "Skill 0 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/0.png",
    },
  },
  {
    title: "Skill 1",
    description:
      "Skill 1 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/1.png",
    },
  },
  {
    title: "Skill 2",
    description:
      "Skill 2 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/2.png",
    },
  },
  {
    title: "Skill 3",
    description:
      "Skill 3 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/3.png",
    },
  },
  {
    title: "Skill 4",
    description:
      "Skill 4 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/4.png",
    },
  },
  {
    title: "Skill 5",
    description:
      "Skill 5 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/5.png",
    },
  },
  {
    title: "Skill 6",
    description:
      "Skill 6 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/6.png",
    },
  },
  {
    title: "Skill 7",
    description:
      "Skill 7 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/7.png",
    },
  },
  {
    title: "Skill 8",
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
            <h1>{useSkillsStore((state) => state.skillIndex)}</h1>
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
        <div className="page-section-fore text-dark">
          <h1>Skills</h1>
          <h3 className="subtitle-darker">To make it happen.</h3>
          <div style={{ marginTop: 400 }}>
            <button>
              See projects <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
