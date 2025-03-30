import ProgressBar from "./ProgressBar";

interface Props {
  setIsWelcome: (state: boolean) => void;
}

function WelcomeForm({ setIsWelcome }: Props) {
  return (
    <>
      <div className="space-y-1">
        <h3>Welcome !</h3>
        <p className="text-custom-gray">
          Thanks for providing your feedback - let's go !
        </p>
      </div>

      <div className="w-full mt-4 flex items-center space-x-4 py-5">
        <button
          className="w-20 py-2 rounded-md text-white bg-blue-500 cursor-pointer"
          onClick={() => setIsWelcome(false)}
        >
          Next
        </button>

        <p className="flex items-center text-sm space-x-2 text-custom-gray">
          Press Enter <i className="bx bx-subdirectory-left"></i>
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-center text-custom-gray text-xs font-semibold">
          Powered by <span className="text-gray-600">Formbricks</span>
        </p>
        <ProgressBar />
      </div>
    </>
  );
}

export default WelcomeForm;
