import { motion } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';

import '../../public/styles/text-rotator.css';
export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <Script src="/scripts/text-rotator.js" strategy="afterInteractive" />
        <p id="text">shit</p>
        <Image
          id="me"
          src="/images/cartoon-chuck.png"
          alt="Chuck Chat"
          width="225"
          height="225"
        />
      </div>
    </motion.div>
  );
};
