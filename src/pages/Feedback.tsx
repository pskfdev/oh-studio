import { useEffect, useState } from "react";
//Components
import WelcomeForm from "../components/form/WelcomeForm";
import QuestionForm from "../components/form/QuestionForm";

function Feedback() {
  const [isWelcome, setIsWelcome] = useState<boolean>(true);

  useEffect(() => {
    document.title = "Feedback | HO.STUDIO";
  }, []);

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center">
      <div className="p-6 rounded-lg shadow-md w-full max-w-md opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
        {isWelcome ? <WelcomeForm setIsWelcome={setIsWelcome} /> : <QuestionForm />}
      </div>
    </section>
  );
}

export default Feedback;
