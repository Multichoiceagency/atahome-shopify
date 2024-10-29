'use client';

import { useRouter } from 'next/navigation';

const blogs = [
  { id: 1, title: "Furniture Trends 2023", excerpt: "Discover the latest furniture trends for this year.", image: "/images/blog-1.jpg", url: "/blog/furniture-trends-2023" },
  { id: 2, title: "How to Style Your Living Room", excerpt: "Tips and tricks to create a stylish living room.", image: "/images/blog-2.jpg", url: "/blog/style-living-room" },
  { id: 3, title: "Best Wooden Furniture", excerpt: "Find out why wooden furniture is the best choice.", image: "/images/blog-3.jpg", url: "/blog/wooden-furniture" },
];

const BlogSection = () => {
  const router = useRouter();

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => router.push(blog.url)}
            className="block rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
