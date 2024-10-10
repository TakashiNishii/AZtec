"use server"

import HeaderContent from "./HeaderContent/HeaderContent"
import HeaderContentMobile from "./HeaderContent/HeaderContentMobile"

export const Header = () => {
  return (
    <div className="w-full bg-primary shadow-md z-30 px-4">
      <HeaderContent />
      <HeaderContentMobile />
    </div>
  )
}
