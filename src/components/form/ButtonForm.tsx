import { OptionType } from "../../types/response";

type Props = {
  step: number;
  previousStep: () => void;
  nextStep: () => void;
  answers: OptionType;
  idData: number;
  dataLength: number;
  setIsFinish: (state: boolean) => void;
};

function ButtonForm({
  step,
  previousStep,
  nextStep,
  answers,
  idData,
  dataLength,
  setIsFinish,
}: Props) {
  return (
    <div className="w-full flex justify-between items-center mt-4">
      <button
        type="button"
        className={`w-20 py-2 rounded-md cursor-not-allowed text-white ${step != 0 ? "bg-gray-400 cursor-pointer" : "bg-gray-300 cursor-not-allowed"}`}
        onClick={previousStep}
        disabled={step === 0}
      >
        Back
      </button>

      {step < dataLength - 1 ? (
        <button
          type="button"
          onClick={nextStep}
          className={`w-20 py-2 rounded-md text-white ${
            answers[idData]
              ? "bg-blue-500 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!answers[idData]}
        >
          Next
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsFinish(true)}
          className={`w-20 py-2 rounded-md text-white bg-blue-500 cursor-pointer`}
        >
          Finish
        </button>
      )}
    </div>
  );
}

export default ButtonForm;
