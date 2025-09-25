import { CardProps } from "@/interfaces"

const Card: React.FC<CardProps> = ({title , content}) => {
  return (
    <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-teal-500/80">{title}</h1>
        <p>{content}</p>
    </div>
  )
}

export default Card
