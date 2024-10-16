import Image from "next/image"
import Link from "next/link"

interface ServicosCardProps {
  id: number
  title: string
  image: string
}
const ServicosCard = (
  { id, title, image }: ServicosCardProps
) => {
  return (
    <div className="card w-full max-w-sm mx-auto md:w-80 min-h-[500px] max-h-[600px] shadow-xl bg-slate-500">
      <figure className="min-h-72 border-b-2 ">
        <Image src={image} alt={title} width={500} height={800} className="h-72" />
      </figure>
      <div className="card-body justify-between items-center text-center bg-base-100 rounded-b-2xl">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions w-full">
          <Link href={`/servicos?id=${id}`} className="btn btn-primary text-secondary rounded-full w-full">Saiba Mais</Link>
        </div>
      </div>
    </div>
  )
}

export default ServicosCard