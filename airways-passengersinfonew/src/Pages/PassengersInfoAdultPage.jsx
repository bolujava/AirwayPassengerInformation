import React from 'react'
import PassengersInfoHeader from '../Components/PassengersInfoAdultPage/PassengersInfoHeader/PassengersInfoHeader'
import PassengersInfoLowerTab from '../Components/PassengersInfoAdultPage/PassengersInfoLowerTab/PassengersInfoLowerTab'
import PassengersInfoMiddleTab from '../Components/PassengersInfoAdultPage/PassengersInfoMiddleTab/PassengersInfoMiddleTab'
import ModalPage from '../Components/ModalPage/ModalPage'



const PassengersInfoAdultPage = () => {
  return (
  <>
    <div>
        <PassengersInfoHeader />
        <PassengersInfoMiddleTab />
        <PassengersInfoLowerTab />
    </div>
    </>
  )
}
export default PassengersInfoAdultPage