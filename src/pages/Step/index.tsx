"use client";
import BottomLayout from "@/components/BottomLayout";
import GridLayout from "@/components/GridLayout";
import { calculatePrice } from "@/lib/utils";
import { Item } from "@/types/product";
import React, { use, useEffect, useRef, useState } from "react";

const StepPage = () => {
  const [products, setProducts] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const selectedItem =
    products.find((item) => item.id === selectedCardId) || null;

  useEffect(() => {
    if (products.length > 0) {
        setLoading(true);
      }
  }, [products.length]);

  useEffect(() => {
    const fetchData = async () => {
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
          {Array.from({ length: 5 }).map((_, index) => (
              // eslint-disable-next-line react-x/no-array-index-key
              <div key={index} className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-md bg-muted animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-[250px] bg-muted animate-pulse rounded" />
                  <div className="h-4 w-[200px] bg-muted animate-pulse rounded" />
                </div>
              </div>
            ))}
        </div>
      ) : products?.length > 0 ? (
        <GridLayout
          products={products}
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
        />
      ) : (
        <div className="flex items-center justify-center py-10">
          <p className="text-lg text-muted-foreground">No skips available</p>
        </div>
      )}
      <BottomLayout
        selectedCardId={selectedCardId}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default StepPage;
