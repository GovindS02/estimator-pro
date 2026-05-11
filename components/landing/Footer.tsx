import "../../styles/landing/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-inner">
          <p>
            Estimator Pro <br />
            © 2024 Precision Architect Estimator. Built for
            clarity.
          </p>

          <div className="links">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Support</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}