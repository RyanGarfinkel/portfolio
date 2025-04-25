import About from '@/components/home/about';
import Education from '@/components/home/education';
import Header from '@/components/home/header';
import Seperator from '@/components/Seperator';

const Home = () => {

  return (
    <div className='flex flex-col w-full'>
      <Header />
      <Seperator />
      <About />
      <Seperator />
      <Education />
  </div>
  );
};

export default Home;
