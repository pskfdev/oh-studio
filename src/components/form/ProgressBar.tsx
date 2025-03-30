type Props = {
  width?: number;
};

function ProgressBar({ width = 0 }: Props) {
  return (
    <div className="w-full bg-gray-200 h-1 rounded-full">
      <div
        className="bg-blue-500 h-1 rounded-full transition-all"
        style={{ width: `${width * 100}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
