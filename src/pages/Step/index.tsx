"use client";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const data = [
  {
    id: "1",
    title: "item 1",
    description: "This is Home for Pricedafom's marketplace",
    image: "/images/4-yarder-skip.jpg",
    price: 100,
  },
  {
    id: "1",
    title: "item 1",
    description: "This is Home for Pricedafom's marketplace",
    image: "/images/4-yarder-skip.jpg",
    price: 100,
  },
  {
    id: "1",
    title: "item 1",
    description: "This is Home for Pricedafom's marketplace",
    image: "/images/4-yarder-skip.jpg",
    price: 100,
  },
  {
    id: "1",
    title: "item 1",
    description: "This is Home for Pricedafom's marketplace",
    image: "/images/4-yarder-skip.jpg",
    price: 100,
  },
  {
    id: "1",
    title: "item 1",
    description: "This is Home for Pricedafom's marketplace",
    image: "/images/4-yarder-skip.jpg",
    price: 100,
  },
  {
    id: "1",
    title: "item 1",
    description: "This is Home for Pricedafom's marketplace",
    image: "/images/4-yarder-skip.jpg",
    price: 100,
  },
  {
    id: "1",
    title: "item 1",
    description: "This is Home for Pricedafom's marketplace",
    image: "/images/4-yarder-skip.jpg",
    price: 100,
  },
  {
    id: "1",
    title: "item 1",
    description: "This is Home for Pricedafom's marketplace",
    image: "/images/4-yarder-skip.jpg",
    price: 100,
  },
  {
    id: "1",
    title: "item 1",
    description: "This is Home for Pricedafom's marketplace",
    image: "/images/4-yarder-skip.jpg",
    price: 100,
  },
  {
    id: "1",
    title: "item 1",
    description: "This is Home for Pricedafom's marketplace",
    image: "/images/4-yarder-skip.jpg",
    price: 100,
  },
  {
    id: "1",
    title: "item 1",
    description: "This is Home for Pricedafom's marketplace",
    image: "/images/4-yarder-skip.jpg",
    price: 100,
  },
];
const StepPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(true);
    setIsFocused(true);
    console.log("Card clicked", isSelected, isFocused);
  }
  return (
    <div className="max-w-[1170px] 2xl:max-w-[1450px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-col items-center justify-between py-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-dark py-4">
          Choose a skip
        </h1>
        <p className="text-sm text-muted-foreground pb-4">
          Please select a skip to continue
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-6 mb-9">
        {data.map((item) => (
          <Card
            key={item.id}
            className={`w-full h-full ${isFocused ? "border border-white  border-gray-200 " : "border border-white shadow-2xl "} rounded-md transition-all duration-300 ease-in-out`}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => !isSelected && setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => !isSelected && setIsFocused(false)}
            onClick={handleClick}
            tabIndex={0}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2 relative">
              <div className="w-full h-full text-center py-4 ">
                <div className="w-full mx-auto">
                  <h2 className="text-dark font-bold text-xl py-2">
                    {item.title}
                  </h2>
                  <p className=" text-sm text-muted-foreground ">
                    {item.description}
                  </p>
                  <p className="text-red text-2xl font-bold py-2">
                    £{item.price}
                  </p>
                  <div
                    aria-expanded={isFocused}
                    className={`absolute top-2  right-2 ${isFocused ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                  >
                    <Badge
                      variant={"outline"}
                      className="text-green uppercase p-2 bg-white border boder-b-[#FFD700] w-[100px] h-[30px] text-xs font-extrabold shadow-lg"
                    >
                     { isSelected ? "deselect" : "select" }
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative w-full h-[300px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover lg:object-fill rounded-md"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
               <div
                    aria-expanded={!isFocused}
                    className={`absolute top-2  left-2 ${!isFocused ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                  >
                    <Badge
                      variant={"outline"}
                      className="text-red uppercase py-4 bg-white border boder-dark w-[100px] h-[30px] text-xs font-extrabold shadow-lg"
                    >
                     4 yards
                    </Badge>
                  </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between py-0 bg-yellow-light">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 lg:max-w-[600px] w-full  p-6 rounded-lg shadow-lg">
          <p className="text-dark font-bold">Imagery and information shown throughout this website may not reflect the exact shape or size 
          specification, colours may vary, options and/or accessories may be featured at additional cost.</p>
        </div>
        <div className="text-green-dark py-4">
          <p>40 Yard Skip</p>
          <p className="text-2xl font-bold">£877</p>
          <p>7 days hire</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 ">
          <button
            className="mb-4 md:mb-0 md:mr-2 font-semibold bg-white text-dark px-10 h-full py-4 rounded-md hover:text-white hover:bg-blue-light transition-colors duration-300"
            onClick={() => alert("Proceeding to next step...")}
          >
             Back 
          </button>
          <button
            className="font-semibold bg-green text-white px-6 py-4 rounded-md hover:bg-blue-light transition-colors duration-300"
            onClick={() => alert("Proceeding to previous step...")}
          >
             <span className="ml-1 whitespace-nowrap">Continue →</span>
          </button>
        </div>
        
        </div>
    </div>
  );
};

export default StepPage;
