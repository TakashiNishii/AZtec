"use server"

import HeaderContent from "./HeaderContent/HeaderContent"
import HeaderContentMobile from "./HeaderContent/HeaderContentMobile"

export const Header = () => {
  return (
    <div className="w-full bg-primary shadow-xl border-b-4 border-blue-900 z-30">
      <HeaderContent />
      <HeaderContentMobile />
    </div>
  )
}
