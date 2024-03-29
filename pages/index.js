import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home({products}) {

  return (
    <main>
      <HeroBanner />
      
      <Wrapper>
        {/*Heading and paragraph starts*/}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div
            className="text-[28px] md;text-[34px] mb- font-semibold
                leading-tight"
          >
            "MAUS Lifestyle: Elevate Your Everyday"
          </div>
          <div className="text-md md:text-xl">
            <p>
              "Discover MAUS Lifestyle: where quality meets style. Elevate your
              daily essentials with our curated collection."
            </p>
          </div>
        </div>
        {/*Heading and paragraph ends*/}

        {/*Check our products starts*/}
        <p className="text-center text-[20px] md:text-[30px]">
          Check our products
        </p>
        {/*Check our products end*/}



        {/*Products grid starts*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14
        px-5 md:px-0"
        >
          {products?.data?.map((product)=> (
            <ProductCard key={product.id} data={product} />
          ))}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        {/*Products grid ends*/}
      </Wrapper>
    </main>
  );
}


export async function getStaticProps() {
  const products = await fetchDataFromApi('/api/products?populate=*');
  return {
    props: {products}
  }
}