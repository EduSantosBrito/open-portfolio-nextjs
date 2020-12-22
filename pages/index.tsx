import About from '@components/About';
import Header from '@components/Header';
import Projects from '@components/Projects';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <About />
      <Projects />
    </>
  );
};

export default Home;
