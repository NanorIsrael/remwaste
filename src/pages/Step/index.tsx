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
      
    </div>
  );
};

export default StepPage;
