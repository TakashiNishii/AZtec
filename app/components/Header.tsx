"use server"

import HeaderContent from "./HeaderContent/HeaderContent"
import HeaderContentMobile from "./HeaderContent/HeaderContentMobile"

const Header = () => {
  return (
    <div className="w-full bg-primary p-2 md:px-11">
      <HeaderContent />
      <HeaderContentMobile />
    </div>
  )
}

export default Header