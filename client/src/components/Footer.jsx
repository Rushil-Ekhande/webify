import { socials } from "../constants"
import Section from "./Section"

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            <p className="caption text-n-4 lg:block"> &copy; {new Date().getFullYear()}. All rights reserved</p>

            <ul className="flex flex-wrap gap-5">
                {socials.map((item) => (
                    <a 
                        href={item.url} 
                        key={item.id} 
                        target="_blank" 
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full translate-colors hover:bg-n-6"
                    >
                        <img 
                            src={item.iconUrl}
                            alt={item.title}
                            width={16}
                            height={16} 
                        />
                    </a>
                ))}
            </ul>
        </div>
    </Section>
  )
}

export default Footer