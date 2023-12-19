import Clock from "./Clock";
import SlidingPuzzle from "./SlidingPuzzle";
import "./IFrame.css";

export function IFrame() {
  const contactBtn = ({ label }) => {
    return (
      <div className="col-12 row p-0 m-0">
        <div className="col-2"></div>
        <div className="col-8">
          <button class="btn-1 btn-x hover-filled-slide-right">
            <span>{label}</span>
          </button>
        </div>
        <div className="col-2"></div>
      </div>
    );
  };
  return (
    <div className="iframe-contact-bg-tile-crystals">
      {/* HUD:
       *******************************/}
      <div className="col-12 row p-0 m-0 iframe-contact-wrapper">
        <div className="col-12 row bg-light p-0 m-0 iframe-contact-hud">
          <div className="border col-2 bg-light">
            <div className="center-vertically iframe-contact-hud-user">
              <i className="fa-solid fa-circle-user"></i>
            </div>
          </div>
          <div className="col-8 bg-light">
            <button className="btn btn-lg"></button>
          </div>
          <div className="col-2 bg-light">
            <div className="center-vertically iframe-contact-hud-clock">
              <Clock />
            </div>
          </div>
        </div>
        <div className="col-12 p-0 m-0 iframe-contact-main-area">
          {/* Puzzle:
           *******************************/}
          <div className="col-12 row p-0 m-0 mt-4">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="iframe-contact-sliding-puzzle-wrapper">
                <SlidingPuzzle />
              </div>
            </div>
            <div className="col-2"></div>
          </div>
          {/* Links:
           *******************************/}
          {[{ label: "Email" }, { label: "Mastodon" }, { label: "Github" }].map(
            (el) => {
              return contactBtn(el);
            }
          )}

          {/* Footer
           *******************************/}
          <div className="col-12 row p-0 m-0">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="py-4 bg-dark text-light p-0 m-0">
                &copy; John Martin
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IFrame;
