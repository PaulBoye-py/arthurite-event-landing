import { motion } from "framer-motion";

const EmailStatus = ({ status, message }) => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const color = status === "success" ? "text-green-500" : "text-red-500";

  return (
    <motion.div
      className={`p-4 rounded-lg ${color} bg-gray-800 shadow-lg`}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <p className="text-center text-lg">{message}</p>
    </motion.div>
  );
};

export default EmailStatus;
