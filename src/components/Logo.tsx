import logo from '@/assets/logo.svg'

export const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => <div {...props}><h1 className="flex items-center gap-1 font-mono font-bold text-lg max-sm:text-2xl max-sm:gap-2"><img src={logo} alt="Logo" className="w-9 max-sm:w-11" />The Wheres!</h1></div>