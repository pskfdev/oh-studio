import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact | HO.STUDIO";
  }, []);

  return (
    <section className="w-full h-[60vh] text-center flex justify-center items-center">
      <article className="space-y-2">
        <h1 className="opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]">
          Let's work together.
        </h1>
        <h1 className="text-custom-gray opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards]">
          Get in touch.
        </h1>
      </article>
    </section>
  );
}

export default Contact;
