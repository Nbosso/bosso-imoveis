import { Link } from 'react-router';
import { mockBlogPosts } from '../data/blog';
import { BlogCard } from '../components/BlogCard';

export function BlogPage() {
  const featuredPost = mockBlogPosts.find((p) => p.featured);
  const otherPosts = mockBlogPosts.filter((p) => p.id !== featuredPost?.id);

  return (
    <div className="min-h-screen bg-[var(--bosso-off-white)] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--bosso-black)] mb-4">Blog</h1>
          <p className="text-xl text-[var(--bosso-graphite)]">
            Inteligência de mercado, análises e insights sobre o mercado imobiliário
          </p>
        </div>

        {featuredPost && (
          <div className="mb-16">
            <BlogCard post={featuredPost} featured />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
