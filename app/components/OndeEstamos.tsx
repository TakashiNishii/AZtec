"use client"
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const OndeEstamos = () => {
  return (
    <div className='flex flex-col justify-center w-full p-2 md:px-11' id='onde-estamos'>
      <h2 className="text-4xl text-primary font-bold text-center">
        Onde Estamos?
      </h2>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
        <Map
          className='border w-[95vw] h-[50vh] md:w-[50vw] md:h-[50vh] self-center'
          defaultCenter={{ lat: -13.076376914978027, lng: -51.726345062255864 }}
          defaultZoom={3.5}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >

          <Marker position={{ lat: -22.2585391998291, lng: -54.79014587402344 }} />
          <Marker position={{ lat: -17.8880615234375, lng: -51.72634506225586 }} />
          <Marker position={{ lat: -13.076376914978027, lng: -55.909393310546875 }} />
          <Marker position={{ lat: -8.286881446838379, lng: -35.03725051879883 }} />
          <Marker position={{ lat: -5.523691177368164, lng: -47.476173400878906 }} />
        </Map>
      </APIProvider >
    </div>
  )
}

export default OndeEstamos