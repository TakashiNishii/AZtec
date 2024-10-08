import Image from "next/image"

interface ServicosCardProps {
  title: string
  image: string
}
const ServicosCard = (
  { title, image }: ServicosCardProps
) => {
  return (
    <div className="card w-full max-w-sm mx-auto md:w-80 max-h-96 shadow-xl pt-2 bg-slate-500">
      <figure className="px-10 pt-10 h-72 border-b-2 ">
        <Image src={image} alt={title} width={500} height={500} />
      </figure>
      <div className="card-body items-center text-center bg-base-100 rounded-b-2xl">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions w-full">
          <button className="btn btn-primary text-secondary rounded-full w-full">Saiba Mais</button>
        </div>
      </div>
    </div>
  )
}

export default ServicosCard