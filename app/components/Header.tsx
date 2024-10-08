"use server"

import HeaderContent from "./HeaderContent/HeaderContent"
import HeaderContentMobile from "./HeaderContent/HeaderContentMobile"

export const Header = () => {
  return (
    <div className="w-full bg-primary shadow-md p-2 md:px-11">
      <HeaderContent />
      <HeaderContentMobile />
    </div>
  )
}
