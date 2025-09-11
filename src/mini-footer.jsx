import "./mini-footer.css"

function MiniFooter() {
  return (
    <footer className="mini-footer">
      <p>&copy; 2025 Glow Studio. All rights reserved.</p>
      <p className="footer-links">
        <a href="#">Privacy Policy</a> | 
        <a href="#">Terms & Conditions</a> | 
        <a href="#">Contact</a>
      </p>
      <p className="social-links">
        Follow us: 
        <a href="#">Instagram</a> | 
        <a href="#">Facebook</a> | 
        <a href="#">Youtube</a>
      </p>
    </footer>
  );
}

export default MiniFooter;
