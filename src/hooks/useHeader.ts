import { useState } from "react";

export default function useHeader() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return {
    click,
    handleClick,
  };
}
