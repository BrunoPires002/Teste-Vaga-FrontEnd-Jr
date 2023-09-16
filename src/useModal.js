import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [selectProduct, setSelectProduct] = useState({});

  function toggle(selectProduct) {
    setIsShowing(!isShowing);
    setSelectProduct(selectProduct);
  }

  return {
    isShowing,
    toggle,
    selectProduct,
  }
};

export default useModal;