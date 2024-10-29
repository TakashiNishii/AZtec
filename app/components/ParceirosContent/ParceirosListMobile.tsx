"use client"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const animation = { duration: 15000, easing: (t: any) => t }

const ParceirosListMobile = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  // array of 200 positions
  const array = Array.from({ length: 20 }, (_, i) => i + 1)
  return (
    <div ref={sliderRef} className="keen-slider md:!hidden">
      {array.map(() => (
        <>
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro1.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro2.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro3.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro4.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro5.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro6.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro7.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro8.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro9.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro10.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro11.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro12.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro13.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro14.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro15.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro16.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro17.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro18.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro19.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro20.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro21.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
          <div className="keen-slider__slide bg-[url('/images/parceiros/parceiro22.png')] bg-no-repeat h-[150px]  md:!max-w-[5%] md:!min-w-[5%]" />
        </>
      ))}
    </div>
  )
}

export default ParceirosListMobile