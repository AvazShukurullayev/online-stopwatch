import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer p-3 bg-warning">
      <div className="container">
        <h4 className="text-center">
          &copy; CopyRight Reserved {new Date().getFullYear()}
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
