import Logo from "../../../assets/Logo";
import Tools from "../tools/Tools";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__body">
        <div className="header__left-part">
          <Logo />
          <h1 className="header__title">Строительный магазин</h1>
        </div>
        <div className="header__right-part">
          <Tools />
        </div>
      </div>
    </div>
  );
};

export default Header;
