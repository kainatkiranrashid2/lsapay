// import BusinessApproach from "../../components/BusinessApproach/BusinessApproach";
import Discover from "../../components/DiscoverLsaPay/Discover";
import DiscoverLsaPay from "../../components/DiscoverLsaPay/HeadingDiscover";
import Hero from "../../components/Hero/Hero";
// import OrbitGlobe from "../../components/OrbitGlobe/OrbitGlobe";
import OurClients from "../../components/OurClients/OurClients";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
// import SequenceImages from "../../components/SequenceImages/SequenceImages";
// import ProductValueProposition from "../../components/ProductValueProposition/ProductValueProposition";
import Heading from "../../components/WhyLsaPay/Heading";
import WhyLsaPay from "../../components/WhyLsaPay/WhyLsaPay";
import StaggeredText from "../../components/StaggeredText/StaggeredText";
import StaggeredTextTwo from "../../components/StaggeredText/StaggeredTextTwo";
import OurClientsNew from "../../OurClientsNew/OurClientsNew";
import AboutUsEffect from "../../components/AboutUsEffect/AboutUsEffect";
const Home = () => {
  const items = [
    {
      id: 0,
      icon: {
        src: "src/assets/whylsa/lock_svg.svg",
        alt: "online_svg",
      },
      title: "Simplify Your PCI",
      details:
        "Simplify your PCI-DSS Compliance with our P2PE solution. P2PE means you get to skip   75% of the PCI-DSS certification steps vastly reducing audits making them less complex, less costly, and much quicker.",
    },
    {
      id: 1,
      icon: {
        src: "src/assets/whylsa/no_wifi_svg.svg",
        alt: "no_wifi_svg",
      },
      title: "Online / Offline",
      details:
        "No connection, no problem. LSAPay intelligently ensures that all your transactions are swift, secure, and trackable, whether your devices are online or offline.   ",
    },
    {
      id: 2,
      icon: {
        src: "src/assets/whylsa/online_svg.svg",
        alt: "online_svg",
      },
      title: "iOS, Android or Windows",
      details:
        "Whether you have iOS, Android, or Windows devices (Mobile or Tablet), LSAPay simply integrates and supports all platforms.",
    },
    {
      id: 3,
      icon: {
        src: "src/assets/whylsa/wristband_svg.svg",
        alt: "Accept Wristbands",
      },
      title: "Accept Wristbands",
      details:
        "Go Cardless. Issue RFID wristbands to your customers, and automatically assign a payment card improving revenue, checkout speed, customer loyalty and customer experience.",
    },
  ];
  return (
    // <>
    //   <SequenceImages />
    // </>
    <>
      {/* <SequenceImages /> */}

      <div>
        <Hero />
        {/* <OurClients classText="grayscale" /> */}
        <OurClients />
        {/* <OurClientsNew /> */}
        {/* <ProductValueProposition /> */}
        {/* <ProductValueImages /> */}
        <div className="bg-[#F6F6F6] py-3 ">
          <Heading mainText="Why choose Acceptify" />
          {/* <WhyLsaPay /> */}
          <WhyChooseUs />
        </div>
        {/* <AboutUsEffect /> */}

        {/* <Heading mainText="Discover More About LSA" subText="Pay" /> */}
        {/* <Discover /> */}
        {/* <DiscoverLsaPay /> */}
        {/* <StaggeredText /> */}
        {/* <StaggeredTextTwo /> */}
        {/* <BusinessApproach /> */}
        {/* <Heading mainText="World Wide Payments" subText="" /> */}

        {/* <OrbitGlobe /> */}
        {/* <Heading mainText="World Wide Payments" subText="" /> */}
      </div>
    </>
  );
};

export default Home;
