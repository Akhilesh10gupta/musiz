import Container from '@/components/Layouts/Container';
import Hero from '@/components/Pages/Hero';

const Home = () => {
  return (
    <div className="bg-black">
      <Container className="max-w-full p-0">
        <Hero />
      </Container>
    </div>
  );
};

export default Home;