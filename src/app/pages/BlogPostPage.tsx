import { useParams, Link, useNavigate } from 'react-router';
import { Clock, Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { mockBlogPosts } from '../data/blog';
import { BlogCard } from '../components/BlogCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <Button asChild>
            <Link to="/blog">Voltar para o blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));
  };

  const relatedPosts = mockBlogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="relative aspect-[21/9] bg-[var(--bosso-black)]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>

          {/* Article Header */}
          <article>
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--bosso-black)] mb-4">{post.title}</h1>
            
            {post.subtitle && (
              <p className="text-xl text-[var(--bosso-graphite)] mb-6">{post.subtitle}</p>
            )}

            <div className="flex items-center gap-6 text-[var(--bosso-graphite)] mb-8 pb-8 border-b border-[var(--bosso-warm-gray)]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt!)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min de leitura</span>
              </div>
              <span>Por {post.author}</span>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-[var(--bosso-black)] mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-[var(--bosso-graphite)] leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </article>

          {/* CTA */}
          <div className="bg-[var(--bosso-sand)] rounded-lg p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Gostou deste conteúdo?</h3>
            <p className="text-[var(--bosso-graphite)] mb-6">
              Entre em contato para uma consultoria personalizada
            </p>
            <Button asChild size="lg" className="bg-[var(--bosso-gold)] text-[var(--bosso-black)] hover:bg-[var(--bosso-gold)]/90">
              <Link to="/contato">Falar com especialista</Link>
            </Button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-8">Artigos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
