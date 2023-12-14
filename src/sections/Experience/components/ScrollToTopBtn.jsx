export default function ScrollToTopBtn() {
  return (
    <div
      className="btn-scroll-to-top center-vertically"
      id="btn-scroll-to-top-wrapper"
    >
      <button
        className="btn btn-lg btn-dark px-2"
        onClick={() => window.scrollTo(0, 0)}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
}
