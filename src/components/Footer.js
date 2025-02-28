import { ButtonPrimary } from "./Button";
import logo from './images/logo.jpg'


const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact Me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'Github',
        href: 'https://www.github.com/gayalew'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/bemnet-ayalew'
    },
    {
        label: 'Twitter X',
        href: 'https://x.com/bemnet631964532'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/gethymn21'
    },
    {
        label: 'CodePen',
        href: 'https://codepen.com/bemnetA'
    },
]
  
const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
                <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                    Let&apos;s work togather!
                </h2>

                <ButtonPrimary href="mailto:getbemnet21@gmail.com" label="Start project" icon="chevron_right" className="reveal-up bg-sky-400"/>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:pl-20">

                <div>
                    <p className="mb-2 reveal-up">Sitemap</p>

                    <ul>
                        {sitemap.map(({label, href}, key) => (
                            <li key={key}>
                                <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-2 reveal-up">Socials</p>

                    <ul>
                        {socials.map(({label, href}, key) => (
                            <li key={key}>
                                <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between  pt-10 mb-8">
            <a href="/" className="logo reveal-up">
                <img src={logo} width={40} height={40} alt="Logo">
                </img>
            </a>

            <p className="text-zinc-500 text-sm reveal-up">
                &copy; 2025 <span className="text-zinc-200">Bemnet Ayalew</span>
            </p>
        </div>
      </div>    
    </footer>
  )
}

export default Footer
