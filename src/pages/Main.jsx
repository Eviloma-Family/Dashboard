import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Overview from "../components/overview/Overview";
import Transactions from "../components/transactions/Transactions";
import { motion } from "framer-motion";

function Main({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <div className="mx-4 tablet:mx-6 laptop:mx-10 desktop:mx-12 flex-1">
          <Header />
          <Overview />
          <Transactions />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default Main;
