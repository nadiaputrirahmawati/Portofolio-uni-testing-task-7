import Hero from '../Pages/Hero';
import { About } from '../Pages/About';
import ImageSlider from '../Pages/List';
import Portfolio from '../Pages/Portofolio';
import { Footer } from './Footer';

const HomePage: React.FC = () => {

    return (
        <div>
            <Hero />
            <About />
            <ImageSlider />
            <Portfolio />
            <Footer />
        </div>
    );
};

export default HomePage;
