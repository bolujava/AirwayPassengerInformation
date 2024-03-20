import React, { useState } from 'react';
import PassengersInfoHeader from '../Components/PassengersInfoAdultPage/PassengersInfoHeader/PassengersInfoHeader';
import PassengersInfoInfantMiddleTab from '../Components/PassengersInfoInfantPage/PassengersInfoInfantMiddleTab/PassengersInfoInfantMiddleTab';
import PassengersInfoInfantLowerTab from '../Components/PassengersInfoInfantPage/PassengersInfoInfantLowerTab/PassengersInfoInfantLowerTab';
import ModalPageTrip from '../Components/ModalPage/ModalPageTrip';

const PassengersInfoInfantPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div>
        <PassengersInfoHeader />
        <PassengersInfoInfantMiddleTab />
        <PassengersInfoInfantLowerTab openModal={openModal} />
        {isOpen && <ModalPageTrip isOpen={isOpen} onClose={closeModal} />}
      </div>
    </>
  );
};

export default PassengersInfoInfantPage;
