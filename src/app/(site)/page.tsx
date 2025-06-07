import { Metadata } from "next";
import StepPage from "@/pages/Step";

export const metadata: Metadata = {
  title: "Pricedafom | Pricedafom Marketplace",
  description: "This is Home for Pricedafom's marketplace",
  // other metadata
};

async function getProducts() {
  try {
    const response = await fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft",
    {
  next: { revalidate: 3600 },
});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return [];
}

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <main>
        <div className="overflow-hidden pt-15 bg-gray-100">
          <StepPage products={}/>
        </div>
      </main>
    </>
  );
}
