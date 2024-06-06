import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xvoejykk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4"
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
        className="w-full rounded-lg text-center sm:text-start h-8 px-2 bg-[#014040] focus:border-none"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
