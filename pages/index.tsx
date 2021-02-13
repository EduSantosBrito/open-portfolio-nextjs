import About from '@components/About';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Projects from '@components/Projects';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
