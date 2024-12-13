import { useScreenSize } from "../../hooks/useScreensize";
import DesktopContent from "./desktop";
import MobileContent from "./mobile";

export default function Content() {
  const { isDesktop, isMobile } = useScreenSize();

  let content;

  switch (true) {
    case isMobile:
      content = <MobileContent />;
      break;
    case isDesktop:
      content = <DesktopContent />;
      break;
    default:
      content = <MobileContent />;
      break;
  }
  return content;
}
