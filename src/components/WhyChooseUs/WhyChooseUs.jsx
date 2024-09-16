import { useScroll, motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
const WhyLsaPayValues = [
  {
    id: 0,
    icon: {
      src: "src/assets/why_choose_us/pci.webm",
      alt: "pci",
    },
    heading: "Simplify Your PCI",
    details:
      "Simplify your PCI-DSS Compliance with our P2PE solution. P2PE means you get to skip   75% of the PCI-DSS certification steps vastly reducing audits making them less complex, less costly, and much quicker.",
  },
  {
    id: 1,
    icon: {
      src: "src/assets/why_choose_us/offline_online.webm",
      alt: "no_wifi_svg",
    },
    heading: "Online / Offline",
    details:
      "No connection, no problem. Acceptify intelligently ensures that all your transactions are swift, secure, and trackable, whether your devices are online or offline.   ",
  },
  {
    id: 2,
    icon: {
      src: "src/assets/why_choose_us/ios.webm",
      alt: "online_svg",
    },
    heading: "iOS, Android or Windows",
    details:
      "Whether you have iOS, Android, or Windows devices (Mobile or Tablet), LSAPay simply integrates and supports all platforms.",
  },
  {
    id: 3,
    icon: {
      src: "src/assets/why_choose_us/accept_wristbands.webm",
      alt: "Accept Wristbands",
    },
    heading: "Accept Wristbands",
    details:
      "Go Cardless. Issue RFID wristbands to your customers, and automatically assign a payment card improving revenue, checkout speed, customer loyalty and customer experience.",
  },

  {
    id: 4,
    icon: {
      src: "src/assets/why_choose_us/accept_cards.webm",
      alt: "Accept Cards/Wallets",
    },
    heading: "Accept Cards/Wallets",
    details:
      "Swipe, tap or insert. LSAPay safely accepts electronic payments whether your customers choose credit cards or e-wallets to run transactions.  ",
  },
  {
    id: 5,
    icon: {
      src: "src/assets/why_choose_us/configurable_data.webm",
      alt: "guarantee_svg",
    },
    heading: "Configurable Data",
    details:
      "Add relevant, searchable data to each transaction. An order number, parking lot ID, flight number, event name – whatever is important to you and your customer.",
  },

  {
    id: 6,
    icon: {
      src: "src/assets/why_choose_us/global_payments.webm",
      alt: "database_svg",
    },
    heading: "Global Payments",
    details:
      "We are a true enterprise payment solution. We enable you to take local payments in nearly all worldwide currencies. Bring your own processors or we can help you select one.",
  },
  {
    id: 7,
    icon: {
      src: "src/assets/why_choose_us/branding.webm",
      alt: "Beautiful Branding",
    },
    heading: "Beautiful Branding",
    details:
      "Represent your brand anywhere you take transactions. Brandable cases. Your Colors, Your logo.",
  },
  {
    id: 8,
    icon: {
      src: "src/assets/why_choose_us/recapture_engine.webm",
      alt: "Recapture Engine  ",
    },
    heading: "Recapture Engine",
    details:
      "We help you increase lost revenue from declined offline transactions. Our powerful recapture engine resubmits declined transactions until they are approved or expire.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-2.5 1", "0.6 1"],
  });
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <motion.div ref={ref} className="container  rounded-3xl ">
      {/* <Heading mainText="Why choose Acceptify" /> */}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
        {WhyLsaPayValues.map((item, index) => (
          <div
            className="relative overflow-hidden rounded-2xl bg-white my-4 px-5 pt-10 pb-14 flex flex-col items-start gap-3"
            key={index}>
            <div className="absolute -top-28 -right-28 w-64 h-64 border border-[#E1E1E1] rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 border border-[#E1E1E1] rounded-tl-full"></div>

            <div
              className="my-4 px-5 pt-10 pb-14 bg-white  flex flex-col items-start gap-3 rounded-2xl "
              key={item.id}>
              <p className="font-PP_Mori text-[14px] font-semibold opacity-30 ">
                0{item.id + 1}
              </p>
              <div className="w-11 h-11 ">
                <motion.video
                  src={item.icon.src}
                  alt={item.icon.alt}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 1 }}
                  loop
                  muted
                  autoPlay
                  // onMouseOver={(event) => event.target.play()}
                  // onMouseOut={(event) => event.target.pause()}
                />
              </div>
              <div>
                <h1 className="text-[16px] md:text-[24px] 2xl:text-[30px] text-dark text-left font-bold font-PP_Mori my-3">
                  {item.heading}
                </h1>
                <p className="text-[11px] md:text-[15px] lg:text-[16px] 2xl:text-[17px] text-dark text-left font-[500] font-PP_Mori">
                  {item.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
