import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex justify-center items-center py-6 mt-16 bg-teal overflow-x-hidden"
    >
      <motion.div
        className=""
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.58 }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default Contact;
