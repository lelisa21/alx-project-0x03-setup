import { ButtonProps } from '@/interfaces'
const Button: React.FC<ButtonProps> = ({size , shape , children , onClick}) => {
    const sizeStyles = {
        small: 'px-3 py-1 text-sm m-5',
        medium: 'px-4 py-2 text-md m-6',
        large: 'px-6 py-3 text-lg m-8'
    }
    const shapeStyles = {
   'rounded-sm': 'rounded-sm',
   'rounded-md': 'rounded-md',
   'rounded-full': 'rounded-full'
    }
  return (
    <div>
<button className={`bg-teal-500/80 text-white font-medium hover:bg-teal-600/80 transition-colors ${sizeStyles[size]} ${shapeStyles[shape]}`}  onClick={onClick}>{children}</button>
    </div>
  ) 
}

export default Button
