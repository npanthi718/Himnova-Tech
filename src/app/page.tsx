import React from "react";
import { HeroModule } from "@/modules/HeroModule";
import { VisionMission } from "@/modules/VisionMission";
import { CapabilitiesStrip } from "@/modules/CapabilitiesStrip";
import { ServicesModule } from "@/modules/ServicesModule";
import { NicheProductsModule } from "@/modules/NicheProductsModule";
import { ProjectsModule } from "@/modules/ProjectsModule";
import { BlogModule } from "@/modules/BlogModule";
import { DirectorMessage } from "@/modules/DirectorMessage";
import { CareersModule } from "@/modules/CareersModule";
import { GovernanceModule } from "@/modules/GovernanceModule";
import { ContactModule } from "@/modules/ContactModule";

export default function HomePage() {
  return (
    <>
      <HeroModule />
      <VisionMission />
      <CapabilitiesStrip />
      <ServicesModule />
      <NicheProductsModule />
      <ProjectsModule />
      <BlogModule />
      <DirectorMessage />
      <CareersModule />
      <GovernanceModule />
      <ContactModule />
    </>
  );
}
