import '@styles/global.css';

import Nav from '@components/Nav';
import StarsCanvas from '@components/canvas/Stars';
import Contact from './contact/page';
import About from './about/page'
import Experience from './experience/page';
import Works from './works/page';
import Feedbacks from './feedback/page';

export const metadata = {
    title: "Paras Maharjan",
    description: 'Paras Maharjan - Full Stack Developer'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className="relative z-0 bg-primary">
                    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                        <Nav />
                        {children}
                    </div>
                    <About />
                    <Experience />
                    {/* <Tech /> */}
                    <Works />
                    <Feedbacks />
                    <div className="relative z-0">
                        <Contact />
                        <StarsCanvas />
                    </div>
                </div>
            </body>
        </html>
    )
}

export default RootLayout