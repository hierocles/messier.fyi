import { Typography } from "@/components/typography";
import { getAllBlogStaticPaths, getBlogForSlug } from "@/lib/markdown";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: PageProps) {
  const params = await props.params;

  const { slug } = params;

  const res = await getBlogForSlug(slug);
  if (!res) return {};
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export async function generateStaticParams() {
  const val = await getAllBlogStaticPaths();
  if (!val) return [];
  return val.map((it) => ({ slug: it }));
}

export default async function BlogPage(props: PageProps) {
  const params = await props.params;

  const { slug } = params;

  const res = await getBlogForSlug(slug);
  if (!res) notFound();
  return (
    <div className="lg:w-[60%] sm:[95%] md:[75%] mx-auto">
      <div className="!w-full">
        <Typography>{res.content}</Typography>
      </div>
    </div>
  );
}
