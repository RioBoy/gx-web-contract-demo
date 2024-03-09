import { PageSubTitle } from '@/component/general/PageTitle';
import Footer from '@/component/layout/Footer';
import Navbar from '@/component/layout/Navbar';
import SectionInformation from '@/component/page/home/SectionInformation';
import SectionSignature from '@/component/page/home/SectionSignature';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="position-relative">
        <SectionInformation data={{}} />
        <SectionSignature />

        <img
          src="/images/logo/gx-logo-big.svg"
          alt="GlobalXtreme"
          className="logo-watermark"
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
