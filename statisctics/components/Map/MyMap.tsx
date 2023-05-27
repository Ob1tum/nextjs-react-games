"use client";
import dynamic from "next/dynamic"
const Map = dynamic(() => import("../Map/Map"), { ssr:false })
const MyMap = () => {
  return <Map/>
};

export default MyMap;