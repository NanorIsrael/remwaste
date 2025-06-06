import { Item } from "@/types/product";
import { calculatePrice } from "@/lib/utils";

type IBottomLayout = {
  selectedCardId: number | null;
  selectedItem: Item | null;
};

const BottomLayout: React.FC<IBottomLayout> = ({
  selectedCardId,
  selectedItem,
}) => {
  return (
    <>
      {selectedItem && selectedCardId === selectedItem?.id && (
        <div className="fixed bottom-0 left-0 right-0 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between py-0 bg-yellow-light">
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 lg:max-w-[600px] w-full  p-6 rounded-lg shadow-lg">
              <p className="text-dark font-bold">
                Imagery and information shown throughout this website may not
                reflect the exact shape or size specification, colours may vary,
                options and/or accessories may be featured at additional cost.
              </p>
            </div>
            <div className="text-green-dark py-4 text-center">
              <p className="uppercase">{selectedItem?.size} yards</p>
              <p className="text-2xl font-bold">
                £{calculatePrice(selectedItem)}
              </p>
              <p>
                {selectedItem?.hire_period_days}{" "}
                {`day${selectedItem?.hire_period_days > 1 ? "s" : ""} hire period`}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 ">
              <button
                className="mb-4 md:mb-0 md:mr-2 font-semibold bg-white text-dark px-10 h-full py-4 rounded-md hover:text-white hover:bg-blue-light transition-colors duration-300"
                onClick={() => alert("Proceeding to previous step...")}
              >
                Back
              </button>
              <button
                className="font-semibold bg-[#800020] text-white px-6 py-4 rounded-md hover:bg-blue-light transition-colors duration-300"
                onClick={() => alert("Proceeding to next step...")}
              >
                <span className="ml-1 whitespace-nowrap">Continue →</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomLayout;
