"use client";
import BottomLayout from "@/components/BottomLayout";
import GridLayout from "@/components/GridLayout";
import IconFolderPlus from "@/components/icon/icon-folder-plus";
import { Item } from "@/types/product";
import React, { use, useEffect, useRef, useState } from "react";

const StepPage = ({products}: {products: Item[]}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const selectedItem =
    products.find((item) => item.id === selectedCardId) || null;

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-7.5 gap-y-6 mb-9">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse" aria-live="polite">
              <div className="bg-gray-200 rounded-lg shadow-md h-[350px]">
                <div className="h-[200px] bg-gray-200 rounded-t-lg"></div>
                <div className="p-4 space-y-3">
                  <div className="h-5 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-1/3 mt-4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-7.5 gap-y-6 mb-9">
          <GridLayout
            products={products}
            selectedCardId={selectedCardId}
            setSelectedCardId={setSelectedCardId}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
          <IconFolderPlus className="h-12 w-12 text-gray-400" />
          <h3 className="text-lg font-medium text-gray-900">No Items Here</h3>
          <p className="text-sm text-gray-500">
            Nothing to display for this category.
          </p>
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
