import { Link } from 'react-router';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import { Badge } from './ui/badge';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));
  };

  if (featured) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="block group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-[var(--bosso-warm-gray)] hover:border-[var(--bosso-gold)]"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-[var(--bosso-sand)]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <Badge className="absolute top-4 left-4 bg-[var(--bosso-gold)] text-[var(--bosso-black)] border-0">
              Destaque
            </Badge>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit mb-4">{post.category}</Badge>
            <h2 className="text-2xl font-bold mb-3 text-[var(--bosso-black)] group-hover:text-[var(--bosso-gold)] transition-colors">
              {post.title}
            </h2>
            {post.subtitle && (
              <p className="text-[var(--bosso-graphite)] mb-4">{post.subtitle}</p>
            )}
            <p className="text-[var(--bosso-graphite)] mb-6 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-[var(--bosso-graphite)] mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt!)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[var(--bosso-gold)] font-semibold group-hover:gap-3 transition-all">
              <span>Ler artigo</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[var(--bosso-warm-gray)] hover:border-[var(--bosso-gold)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bosso-sand)]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge variant="secondary" className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm">
          {post.category}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 text-[var(--bosso-black)] group-hover:text-[var(--bosso-gold)] transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-[var(--bosso-graphite)] mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-[var(--bosso-graphite)]">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(post.publishedAt!)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
