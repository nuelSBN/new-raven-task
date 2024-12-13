import { useEffect, useState } from "react";

export const useContent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    const calculatedTotal: number = price * amount || 0;
    setTotal(calculatedTotal);
  }, [price, amount]);

  const handleSwitchTab = (id: number) => {
    setActiveTab(id);
  };

  return {
    activeTab,
    handleSwitchTab,
    price,
    setPrice,
    amount,
    setAmount,
    total,
  };
};
