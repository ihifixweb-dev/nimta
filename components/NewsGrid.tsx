import Link from 'next/link';
import ImgSlot from '@/components/ImgSlot';
import { newsImageMap } from '@/lib/data/images';
import type { NewsArticle } from '@/lib/data/news';

type NewsGridProps = {
  articles: NewsArticle[];
  href?: string;
};

export default function NewsGrid({ articles, href = '#' }: NewsGridProps) {
  return (
    <div className="news-g">
      {articles.map((article) => (
        <Link key={article.title} href={href} className="news-c">
          <div className="news-img">
            <ImgSlot
              label={article.imageType}
              src={newsImageMap[article.imageType]}
              alt={article.title}
            />
          </div>
          <div className="news-b">
            <div className="news-meta">
              <span className="news-cat">{article.category}</span>
              <span className="news-date">{article.date}</span>
            </div>
            <div className="news-t">{article.title}</div>
            <div className="news-x">{article.excerpt}</div>
            <span className="news-more">
              Read More{' '}
              <svg viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
