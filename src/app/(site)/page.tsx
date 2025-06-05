import { Metadata } from "next";
import StepPage from "@/pages/Step";

export const metadata: Metadata = {
  title: "Pricedafom | Pricedafom Marketplace",
  description: "This is Home for Pricedafom's marketplace",
  // other metadata
};

export default function Home() {
  return (
    <>
      <main>
        <div className="overflow-hidden pt-15 bg-gray-100">
          <StepPage />
        </div>
      </main>
    </>
  );
}
