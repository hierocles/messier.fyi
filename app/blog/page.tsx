import { BlogMdxFrontmatter, getAllBlogs } from "@/lib/markdown";
import { stringToDate } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Messier - Pages",
};

export default async function BlogIndexPage() {
  const blogs = (await getAllBlogs()).sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return stringToDate(b.date).getTime() - stringToDate(a.date).getTime();
  });
  return (
    <div className="w-full mx-auto flex flex-col gap-1 sm:min-h-[91vh] min-h-[88vh] pt-2">
      <div className="mb-7 flex flex-col gap-2">
        <h1 className="sm:text-3xl text-2xl font-extrabold">
          Pages
        </h1>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 mb-5">
        {blogs.map((blog) => (
          <BlogCard {...blog} slug={blog.slug} key={blog.slug} />
        ))}
      </div>
    </div>
  );
}

function BlogCard({
  title,
  description,
  slug,
}: BlogMdxFrontmatter & { slug: string }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-col gap-2 items-start border rounded-md py-5 px-3"
    >
      <h3 className="text-md font-semibold -mt-1 pr-7">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
