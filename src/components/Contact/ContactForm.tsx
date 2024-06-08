import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xvoejykk");
  if (state.succeeded) {
    return <p className="text-4xl text-ivory">Thanks for joining!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-lg flex flex-col justify-center items-center gap-4 w-full sm:w-[700px]"
    >
      <h3 className="text-ivory text-3xl w-full text-center mb-10">
        Contact <span>Me</span>
      </h3>
      <label htmlFor="email" className="text-ivory">
        Your Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="john.doe@email.com"
        className="w-full rounded-lg text-center text-ivory h-8 px-2 bg-[#014040]"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" className="text-ivory">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Your message here..."
        className="w-full h-[300px] sm:h-[500px] bg-[#014040] text-ivory rounded-lg text-start p-4"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="border-2 border-ivory py-2 px-3 text-pine bg-ivory font-bold transition-all duration-300 hover:text-ivory hover:bg-transparent"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
