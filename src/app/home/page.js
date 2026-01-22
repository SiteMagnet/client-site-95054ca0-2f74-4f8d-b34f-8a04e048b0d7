import fs from "fs";
import path from "path";
import HomeHeroSection from "../components/HomeHeroSection";
import PastClients from "../components/PastClients";
import KeyProblem from "../components/KeyProblem";
import Testimony from "../components/Testimony";
import Plan from "../components/Plan";
import ClientShowcase from "../components/ClientShowCase";
import Packages from "../components/Packages";
import PersonalStory from "../components/PersonalStory";
import FAQ from "../components/FAQ";
import Reassurance from "../components/Reassurance";
import ContentProvider from "../components/ContentProvider";

export default async function Home() {
  const filePath = path.join(process.cwd(), "content.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const content = JSON.parse(fileContents);

  return (
    <>
      <HomeHeroSection content={content} />
      <PastClients content={content} />
      <KeyProblem content={content} />
      <Testimony content={content} />
      <Plan content={content.plan} />
      <ClientShowcase />
      <Packages content={content} />
      <PersonalStory content={content} />
      <FAQ/>
      <Reassurance content={content} />
    </>
  );
}
