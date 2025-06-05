"use client";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const data = [
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

  // const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, []);

  return (
    <div className="max-w-[1170px] 2xl:max-w-[1450px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-">
        {data.map((item) => (
          <Card key={item.id} className={`w-full h-full ${isFocused ? "border border-white  border-gray-200 " : "border border-white shadow-2xl "} rounded-md transition-all duration-300 ease-in-out`}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
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
                  <p className="text-[#000] text-2xl font-bold py-2">
                    ${item.price}
                  </p>
                  <div className={`absolute top-0  right-0 ${isFocused ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
                    Hidden content revealed.
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative w-full h-[300px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StepPage;
