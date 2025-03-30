type Props = {
  title: string;
  choice: string[];
  handleSelect: (option:string) => void;
  name: string;
};

function Question({ title, choice, handleSelect, name }: Props) {
  return (
    <>
      {/* คำถาม */}
      <div className="space-y-1 my-4">
        <h3>{title}</h3>
        <p className="text-custom-gray">
          Please select one of the following options:
        </p>
      </div>

      {/* ตัวเลือก */}
      <div className="space-y-2">
        {choice.map((option, idx) => (
          <div
            key={idx}
            className="flex items-center ps-4 border border-slate-300 bg-slate-50 rounded-xl"
            onClick={() => handleSelect(option)}
          >
            <input
              type="radio"
              id={option}
              name={name}
              value={option}
              className="w-4 h-4 text-blue-600"
            />
            <label
              htmlFor={option}
              className="w-full py-4 ms-2 text-sm font-medium"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default Question;
