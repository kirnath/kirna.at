import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";

export const metadata: Metadata = {
  title: "Blog | Indra Purnama",
  metadataBase: new URL("https://kirna.at/blog"),
  description: "Read latest stories from Indra Purnama's Blog",
  openGraph: {
    title: "Blog | Indra Purnama",
    url: "https://kirna.at/blog",
    description: "Read latest stories from Indra Purnama's Blog",
    images:
      "https://res.cloudinary.com/kirnath/image/upload/v1692636087/kirnath/blog.png",
  },
};

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Blog"
        description="Welcome to my blog domain where I share personal stories about things I've learned, projects I'm hacking on and just general findings. I also write for other publications."
      >
      </PageHeading>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        <Posts />
      </Slide>
    </main>
  );
}
