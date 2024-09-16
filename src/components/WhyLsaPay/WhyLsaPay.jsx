import { useScroll, motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
const WhyLsaPayValues = [
  {
    id: 0,
    icon: {
      src: "src/assets/whylsa/lock_svg.svg",
      alt: "online_svg",
    },
    heading: "Simplify Your PCI",
    details:
      "Simplify your PCI-DSS Compliance with our P2PE solution. P2PE means you get to skip   75% of the PCI-DSS certification steps vastly reducing audits making them less complex, less costly, and much quicker.",
  },
  {
    id: 1,
    icon: {
      src: "src/assets/whylsa/no_wifi_svg.svg",
      alt: "no_wifi_svg",
    },
    heading: "Online / Offline",
    details:
      "No connection, no problem. LSAPay intelligently ensures that all your transactions are swift, secure, and trackable, whether your devices are online or offline.   ",
  },
  {
    id: 2,
    icon: {
      src: "src/assets/whylsa/online_svg.svg",
      alt: "online_svg",
    },
    heading: "iOS, Android or Windows",
    details:
      "Whether you have iOS, Android, or Windows devices (Mobile or Tablet), LSAPay simply integrates and supports all platforms.",
  },
  {
    id: 3,
    icon: {
      src: "src/assets/whylsa/wristband_svg.svg",
      alt: "Accept Wristbands",
    },
    heading: "Accept Wristbands",
    details:
      "Go Cardless. Issue RFID wristbands to your customers, and automatically assign a payment card improving revenue, checkout speed, customer loyalty and customer experience.",
  },

  {
    id: 4,
    icon: {
      src: "src/assets/whylsa/credit_card_svg.svg",
      alt: "Accept Cards/Wallets",
    },
    heading: "Accept Cards/Wallets",
    details:
      "Swipe, tap or insert. LSAPay safely accepts electronic payments whether your customers choose credit cards or e-wallets to run transactions.  ",
  },
  {
    id: 5,
    icon: {
      src: "src/assets/whylsa/database_svg.svg",
      alt: "guarantee_svg",
    },
    heading: "Configurable Data",
    details:
      "Add relevant, searchable data to each transaction. An order number, parking lot ID, flight number, event name – whatever is important to you and your customer.",
  },

  {
    id: 6,
    icon: {
      src: "src/assets/whylsa/money_transfer_svg.svg",
      alt: "database_svg",
    },
    heading: "Global Payments",
    details:
      "We are a true enterprise payment solution. We enable you to take local payments in nearly all worldwide currencies. Bring your own processors or we can help you select one.",
  },
  {
    id: 7,
    icon: {
      src: "src/assets/whylsa/money_transfer_svg.svg",
      alt: "Beautiful Branding",
    },
    heading: "Beautiful Branding",
    details:
      "Represent your brand anywhere you take transactions. Brandable cases. Your Colors, Your logo.",
  },
  {
    id: 8,
    icon: {
      src: "src/assets/whylsa/check_svg.svg",
      alt: "Recapture Engine  ",
    },
    heading: "Recapture Engine",
    details:
      "We help you increase lost revenue from declined offline transactions. Our powerful recapture engine resubmits declined transactions until they are approved or expire.",
  },
];
const WhyLsaPay = () => {
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
  const animationProps = isMobile
    ? {
        style: {
          opacity: 1,
        },
      }
    : {
        style: {
          scale: scrollYProgress,
          opacity: scrollYProgress,
        },
      };

  return (
    <motion.div {...animationProps} ref={ref} className="container ">
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-10  ">
        {WhyLsaPayValues.map((item) => (
          <motion.div
            className="my-4 shadow-lg rounded-2xl p-3 bg-white"
            key={item.id}>
            <div className="w-12 h-10">
              <img
                className="w-full h-full object-contain"
                src={item.icon.src}
                alt={item.icon.alt}
              />
            </div>
            <h1 className="text-[16px] md:text-[24px] 2xl:text-[30px] text-dark text-left font-bold font-Inter my-3">
              {item.heading}
            </h1>
            <p className="text-[10px] md:text-[15px] 2xl[18px] text-dark text-left font-medium font-Inter">
              {item.details}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WhyLsaPay;
