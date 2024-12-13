import { useScreenSize } from "../../hooks/useScreensize";
import MobileHeader from "./mobile";
import DesktopHeader from "./desktop";

const Header = () => {
  const { isMobile, isDesktop } = useScreenSize();
  let headerContent;

  switch (true) {
    case isMobile:
      headerContent = <MobileHeader />;
      break;
    case isDesktop:
      headerContent = <DesktopHeader />;
      break;

    default:
      headerContent = <MobileHeader />;
      break;
  }
  return headerContent;
};

export default Header;
