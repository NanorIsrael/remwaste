"use client";
import GridLayout from "@/components/GridLayout";
import { Item } from "@/types/product";
import React, { use, useEffect, useRef, useState } from "react";

const StepPage = () => {
  const [products, setProducts] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const selectedItem = products.find((item) => item.id === selectedCardId);

  const calculatePrice = (item: Item) => {
    const vatMultiplier = 1 + (item.vat || 0) / 100;
    const priceWithVat = item.price_before_vat * vatMultiplier;
    return priceWithVat.toFixed(2);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft",
        );
        const data = await response.json();
        if (data) {
          console.log(data);
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-[1170px] 2xl:max-w-[1450px] w-full mx-auto px-4 sm:px-8 xl:px-0 relative">
      <div className="flex flex-col items-center justify-between py-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#800020] py-4">
          Choose a skip
        </h1>
        <p className="text-sm text-muted-foreground pb-4">
          Please select a skip to continue
        </p>
      </div>
      {loading ? (
        <div className="flex items-center justify-center py-10">
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      ) : products?.length === 0 ? (
        <div className="flex items-center justify-center py-10">
          <p className="text-lg text-muted-foreground">No skips available</p>
        </div>
      ) : (
        <GridLayout
          products={products}
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
          calculatePrice={calculatePrice}
        />
      )}
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
    </div>
  );
};

export default StepPage;
