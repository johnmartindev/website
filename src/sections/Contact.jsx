import ScrollToTopBtn from "./Experience/components/ScrollToTopBtn";

export default function Contact() {
  return (
    <>
      <div className="page-section center-vertically" id="contact">
        <div
          className="page-section-fore text-light"
          style={{ marginTop: -400 }}
        >
          <h1>Contact</h1>
          <h3 className="subtitle">Get in touch.</h3>
        </div>
      </div>
      <ScrollToTopBtn />
    </>
  );
}
