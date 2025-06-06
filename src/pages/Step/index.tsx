"use client";
import React, { use, useEffect, useRef, useState } from "react";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Item = {
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  area: string;
  created_at: Date;
  forbidden: boolean;
  hire_period_days: number;
  id: number;
  per_tonne_cost: number | null;
  per_tonne_cost_before_vat: number | null;
  postcode: string;
  price_before_vat: number;
  size: number;
  transport_cost: number | null;
  updated_at: Date;
  vat: number;
};

const StepPage = () => {
  const [products, setProducts] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [focusedCardId, setFocusedCardId] = useState<number | null>(null);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const cols = 4; 

  const selectedItem = products.find(item => item.id === selectedCardId);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(e.key)) return;
      
      e.preventDefault();
      if (!products || products.length === 0) return;
      const currentIndex = products.findIndex(item => item.id === focusedCardId);
      let nextIndex = 0;

      switch (e.key) {
        case 'ArrowRight':
          nextIndex = (currentIndex + 1) % products.length;
          break;
        case 'ArrowLeft':
          nextIndex = (currentIndex - 1 + products.length) % products.length;
          break;
        case 'ArrowDown':
          nextIndex = Math.min(currentIndex + cols, products.length - 1);
          break;
        case 'ArrowUp':
          nextIndex = Math.max(currentIndex - cols, 0);
          break;
        case 'Enter':
          if (focusedCardId) {
            setSelectedCardId(focusedCardId === selectedCardId ? null : focusedCardId);
          }
          return;
      }

      setFocusedCardId(products[nextIndex].id);
      document.getElementById(`card-${products[nextIndex].id}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [focusedCardId, selectedCardId, products]);


  useEffect(() => {
    if (!products || products.length === 0) return;
    if (products.length > 0 && !focusedCardId) {
      setFocusedCardId(products[0].id);
    }
  }, [products]);

  const calculatePrice = (item: Item) => {
    const vatMultiplier = 1 + (item.vat || 0) / 100;
    const priceWithVat = item.price_before_vat * vatMultiplier;
    return priceWithVat.toFixed(2); 
  }

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-7.5 gap-y-6 mb-9">
          {products?.map((item) => (
            <Card
              aria-selected={selectedCardId === item.id}
              role="option"
              key={item.id}
              className={`hover:shadow-2xl hover:bg-white ${focusedCardId === item.id ? 'ring ring-[#800020] border-none' : ''} rounded-md transition-all duration-300 ease-in-out`}
              onClick={(e) => {
                setSelectedCardId(item.id === selectedCardId ? null : item.id)
              }}
               onFocus={() => setFocusedCardId(item.id)}
              tabIndex={0}
            >
              <CardHeader className=" flex flex-row items-center justify-between space-y-0 p-2 relative">
                <div className="w-full h-full text-center py-4 ">
                  <div className="w-full mx-auto">
                    <h2 className="uppercase text-[#800020] font-bold text-xl py-2">
                      {item?.size} yards
                    </h2>
                    <p className="text-dark text-sm text-muted-foreground ">
                      {item?.hire_period_days} {`day${item?.hire_period_days > 1 ? "s" : ""} hire period`}
                    </p>
                    <p className="text-[#800020] text-2xl font-bold py-2">
                      £{calculatePrice((item))}
                    </p>
                    <div
                      aria-expanded={selectedCardId === item.id}
                      className={`absolute top-2  left-2 ${selectedCardId === item.id ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                    >
                      <Badge
                        variant={"outline"}
                        className="text-white uppercase p-2 bg-[#800020] border boder-b-[#FFD700] w-[100px] h-[30px] text-xs font-extrabold shadow-lg"
                      >
                        {"selected"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative w-full h-[300px] ">
                <Image
                  src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${item?.size}-yarder-skip.jpg`}
                  alt={item?.size + " yard skip"}
                  fill
                  className="object-cover lg:object-fill rounded-md"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
                <div
                  aria-expanded={!(selectedCardId === item.id)}
                  className={`absolute top-3  right-2 ${!(selectedCardId=== item.id) ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                >
                  <Badge
                    variant={"outline"}
                    className="bg-[#800020] text-white uppercase py-4 border boder-dark w-[100px] h-[30px] text-xs font-extrabold shadow-lg"
                  >
                    {item.size} yards
                  </Badge>
                  </div>
                {(!item.allowed_on_road) && <div
                  aria-expanded={!(selectedCardId === item.id)}
                  className={`absolute bottom-3  left-2 ${!(selectedCardId=== item.id) ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                >
                  <p
                    className="bg-dark text-[#FFD700] capitalize px-4 py-4 border boder-dark w-full h-[30px] text-xs font-extrabold shadow-lg flex items-center justify-center rounded-md"
                  >
                    <span>not allowed on the road</span>
                  </p>
                </div>}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
        {selectedCardId === selectedItem?.id && ( 
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
          <p className="text-2xl font-bold">£{calculatePrice((selectedItem))}</p>
          <p>{selectedItem?.hire_period_days} {`day${selectedItem?.hire_period_days > 1 ? "s" : ""} hire period`}</p>
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
      </div>)} 
    </div>
  );
};

export default StepPage;
