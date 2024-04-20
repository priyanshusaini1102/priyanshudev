import Link from "next/link";

const logoStyles = {
  textDecoration: 'none', /* Remove underline */
  color: '#333', /* Default color for the text */
  fontFamily: 'Arial, sans-serif', /* Choose an appropriate font family */
  fontSize: '40px', /* Adjust font size as needed */
  userSelect: 'none',
  /* Additional styles can be added here */
};

const logoHoverStyles = {
  '&:hover': {
    color: '#555', /* Change color on hover */
    /* Additional hover styles can be added here */
  }
};

// Merge styles
const mergedStyles = { ...logoStyles, ...logoHoverStyles };

const Header = ({ dark, name }) => {
  return (
    <div className="orido_tm_header">
      <div className="header_in">
        <div className="logo">
          <Link href="/" className="" >
            <p style={mergedStyles}>

            {/* <img src={`img/logo/${dark ? "light" : "logo"}.png`} alt="" /> */}
            {name}
            </p>
          </Link>
        </div>
        <div className="menu">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="ccc" />
        </div>
        <div className="button">
          <a
            href="https://themeforest.net/user/codeefly/portfolio"
            target="_blank" rel="noreferrer"
          >
            Purchase Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
