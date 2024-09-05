import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./assets/icons/HeroSvg";
import Job from "./components/pages/Job";
import Social from "./components/shared/Social";
import { Slide } from "./animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import ContributionGraph from "./components/pages/GithubCalendarComponent";
import  About  from "./about/page"
export default async function Home() {
  const profile: ProfileType[] = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <><About/></>
  );
}
