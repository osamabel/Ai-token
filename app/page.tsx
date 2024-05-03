import CreonPass from "@/components/CreonPass";
import Hero from "@/components/Hero";
import Launchpad from "@/components/Launchpad";
import Market from "@/components/Market";
import Navigation from "@/components/Navigation";
import Profiting from "@/components/Profiting";
import Vision from "@/components/Vision";
import React from "react";

function page() {
  return (
    <div className="">
      <Navigation />
      <Hero/>
      <CreonPass/>
      <Profiting/>
      <Vision/>
      <Launchpad/>
      <Market/>
    </div>
  );
}

export default page;
