import { useState } from "react";
//Components
import ButtonForm from "./ButtonForm";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import ResultForm from "./ResultForm";
//type
import { DataFormType } from "../../types/response";
import { OptionType } from "../../types/response";

const dataForm: DataFormType[] = [
  {
    id: 1,
    question: "What's your role ?",
    options: [
      "Founder",
      "Executive",
      "Product Manager",
      "Product Owner",
      "Software Engineer",
    ],
  },
  {
    id: 2,
    question: "What's your company size ?",
    options: [
      "only me",
      "1-5 employees",
      "6-10 employees",
      "11-100 employees",
      "over 100 employees",
    ],
  },
  {
    id: 3,
    question: "How did you hear about us first ?",
    options: [
      "Recommendation",
      "Social Media",
      "Ads",
      "Google Search",
      "In a Podcast",
    ],
  },
];

function QuestionForm() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<OptionType>({});
  const [isFinish, setIsFinish] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    setAnswers({ ...answers, [dataForm[step].id]: option });
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    if (step < dataForm.length - 1) setStep(step + 1);
  };

  return (
    <>
      {isFinish ? (
        <ResultForm dataForm={dataForm} answers={answers} />
      ) : (
        <>
          <Question
            title={dataForm[step]?.question}
            choice={dataForm[step]?.options}
            handleSelect={handleSelect}
            name={dataForm[step]?.question}
          />

          <ButtonForm
            step={step}
            previousStep={previousStep}
            nextStep={nextStep}
            answers={answers}
            idData={dataForm[step]?.id}
            setIsFinish={setIsFinish}
          />

          <div className="mt-4">
            <ProgressBar width={(step + 1) / dataForm.length} />
          </div>
        </>
      )}
    </>
  );
}

export default QuestionForm;
