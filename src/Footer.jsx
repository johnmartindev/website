export default function Footer() {
  return (
    <footer className="center center-horizontally page-footer my-3">
      <ul
        className="d-flex center justify-content-between list-group list-group-horizontal"
        style={{ maxWidth: 1024 }}
      >
        <li className="list-group-item">
          <div className="row m-0 p-0 col-12 col-md-12">
            <div className="m-0 p-0 col-12">
              John Martin &copy; {new Date().getFullYear()}
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <a href="#">Privacy Policy</a>
        </li>
        <li className="list-group-item">
          <a href="#">Terms of Use</a>
        </li>
      </ul>
    </footer>
  );
}
