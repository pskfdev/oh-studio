import { useEffect, useState } from "react";
//Components
import ProductCard from "../card/ProductCard";
//type
import { DataType } from "../../types/response";

function Products() {
  const [data, setData] = useState<DataType[]>([]);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10",
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json: DataType[] = await response.json();
      console.log(json);

      setData(json);
    } catch (error) {
      console.error("Fetch data fail!", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 py-10 px-5 lg:px-28">
      {data ? (
        data.map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <p className="text-center">No, Data product.</p>
      )}
    </div>
  );
}

export default Products;
