import { useState } from "react";
import { Link } from "react-router";
//Type
import { DataType } from "../../types/response";

type Props = {
  item: DataType;
};

function ProductCard({ item }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Link
      to={`/shop/${item.id}`}
      key={item.id}
      className="w-full h-full rounded-xl overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`${item?.url}`}
        alt={item?.id}
        className={`w-full h-[494px] object-cover ${
          isHovered && "blur-sm"
        } duration-300 ease-in-out`}
      />

      <div
        className={`absolute top-0 left-0 w-full p-5 duration-300 ease-in-out will-change-transform ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-between items-center">
          <p className="text-white">Test</p>
          <i
            className={`bx bx-up-arrow-alt text-xl rotate-45 p-3 bg-white rounded-full transition-transform duration-300 ease-in-out ${
              isHovered
                ? "translate-y-0 translate-x-0"
                : "translate-y-4 -translate-x-4"
            }`}
          ></i>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
