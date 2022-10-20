import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Movies     Arena 🎥
    </span>
  );
};

export default Header;