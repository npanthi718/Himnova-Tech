import React from "react";
import { HeroModule } from "@/modules/HeroModule";
import { CapabilitiesStrip } from "@/modules/CapabilitiesStrip";
import { ServicesModule } from "@/modules/ServicesModule";
import { NicheProductsModule } from "@/modules/NicheProductsModule";
import { ProjectsModule } from "@/modules/ProjectsModule";
import { BlogModule } from "@/modules/BlogModule";
import { VisionMission } from "@/modules/VisionMission";
import { DirectorMessage } from "@/modules/DirectorMessage";
import { CareersModule } from "@/modules/CareersModule";
import { GovernanceModule } from "@/modules/GovernanceModule";
import { ContactModule } from "@/modules/ContactModule";

export default function HomePage() {
  return (
    <>
      <HeroModule />
      <CapabilitiesStrip />
      <ServicesModule />
      <NicheProductsModule />
      <ProjectsModule />
      <BlogModule />
      <VisionMission />
      <DirectorMessage />
      <CareersModule />
      <GovernanceModule />
      <ContactModule />
    </>
  );
}
