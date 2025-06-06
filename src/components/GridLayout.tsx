import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Item } from "@/types/product";
import { useEffect, useState } from "react";
import { calculatePrice } from "@/lib/utils";

type IGridLayout = {
  products: Item[];
  selectedCardId: number | null;
  setSelectedCardId: (id: number | null) => void;
};

const GridLayout: React.FC<IGridLayout> = ({
  products,
  selectedCardId,
  setSelectedCardId,
}) => {
  const [focusedCardId, setFocusedCardId] = useState<number | null>(null);
  const cols = 4;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter"].includes(
          e.key,
        )
      )
        return;

      e.preventDefault();
      if (!products || products.length === 0) return;
      const currentIndex = products.findIndex(
        (item) => item.id === focusedCardId,
      );
      let nextIndex = 0;

      switch (e.key) {
        case "ArrowRight":
          nextIndex = (currentIndex + 1) % products.length;
          break;
        case "ArrowLeft":
          nextIndex = (currentIndex - 1 + products.length) % products.length;
          break;
        case "ArrowDown":
          nextIndex = Math.min(currentIndex + cols, products.length - 1);
          break;
        case "ArrowUp":
          nextIndex = Math.max(currentIndex - cols, 0);
          break;
        case "Enter":
          if (focusedCardId) {
            setSelectedCardId(
              focusedCardId === selectedCardId ? null : focusedCardId,
            );
          }
          return;
      }

      setFocusedCardId(products[nextIndex].id);
      document
        .getElementById(`card-${products[nextIndex].id}`)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [focusedCardId, selectedCardId, products]);

  useEffect(() => {
    if (!products || products.length === 0) return;
    if (products.length > 0 && !focusedCardId) {
      setFocusedCardId(products[0].id);
    }
  }, [products]);

  return (
    <>
      {products?.map((item) => (
        <Card
          aria-selected={selectedCardId === item.id}
          role="option"
          key={item.id}
          className={`hover:shadow-2xl hover:bg-white ${focusedCardId === item.id ? "ring ring-[#800020] border-none" : ""} rounded-md transition-all duration-300 ease-in-out`}
          onClick={(e) => {
            setSelectedCardId(item.id === selectedCardId ? null : item.id);
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
                  {item?.hire_period_days}{" "}
                  {`day${item?.hire_period_days > 1 ? "s" : ""} hire period`}
                </p>
                <p className="text-[#800020] text-2xl font-bold py-2">
                  £{calculatePrice(item)}
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
              className={`absolute top-3  right-2 ${!(selectedCardId === item.id) ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
            >
              <Badge
                variant={"outline"}
                className="bg-[#800020] text-white uppercase py-4 border boder-dark w-[100px] h-[30px] text-xs font-extrabold shadow-lg"
              >
                {item.size} yards
              </Badge>
            </div>
            {!item.allowed_on_road && (
              <div
                aria-expanded={!(selectedCardId === item.id)}
                className={`absolute bottom-3  left-2 ${!(selectedCardId === item.id) ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
              >
                <p className="bg-dark text-[#FFD700] capitalize px-4 py-4 border boder-dark w-full h-[30px] text-xs font-extrabold shadow-lg flex items-center justify-center rounded-md">
                  <span>not allowed on the road</span>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default GridLayout;
