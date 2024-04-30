import { Link } from "react-router-dom";
import path from "constants/path";
import { BsHouse as IconHouse } from "react-icons/bs";
import { BiUserCircle as IconUser } from "react-icons/bi";
import { MdLogout as IconLogout } from "react-icons/md";
const BottomMenu = () => {
  return (
    <footer className="footer-menu">
      <div className="footer-menu__grid">
        <Link className="footer-menu__button" to={path.home}>
          <IconHouse />홈
        </Link>
        <Link className="footer-menu__button" to={path.profile}>
          <IconUser />
          프로필
        </Link>
        <button className="footer-menu__button" type={"button"}>
          <IconLogout />
          로그아웃
        </button>
      </div>
    </footer>
  );
};

export default BottomMenu;
