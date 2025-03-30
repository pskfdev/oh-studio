import { DataFormType } from "../../types/response";
import { OptionType } from "../../types/response";

type Props = {
  steps: DataFormType[];
  answers: OptionType;
};

function ResultForm({ steps, answers }: Props) {
  return (
    <>
      <div className="space-y-4 my-2 text-center">
        <i className="bx bx-check-circle text-5xl text-green-500"></i>
        <div>
          <h3>Thank you !</h3>
          <p className="text-custom-gray">We appreciate your feedback.</p>
        </div>
      </div>

      <div className="space-y-6 pt-5">
        {steps &&
          steps.map((item) => (
            <div key={item.id} className="space-y-2">
              <p className="text-custom-gray">{item.question}</p>
              <p>{answers[item.id]}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default ResultForm;
