import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'wouter';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { contentfulClient, ContentfulBlogPost } from '@/lib/contentful';

export default function BlogPost() {
  const { slug } = useParams();

  const { data: blogData, isLoading, error } = useQuery({
    queryKey: ['/api/blog-post', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      return contentfulClient.getBlogPostBySlug(slug);
    },
    enabled: !!slug,
  });

  const post = blogData?.items?.[0];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const calculateReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const wordCount = text.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} Min. Lesezeit`;
  };

  if (isLoading) {
    return (
      <Layout>
        <article className="py-20 bg-brightest dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skeleton className="h-8 w-24 mb-8" />
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-6 w-48 mb-8" />
            <Skeleton className="h-64 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </article>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout
        title="Artikel nicht gefunden - The Advertising Collective"
        description="Der angeforderte Blog-Artikel konnte nicht gefunden werden."
      >
        <div className="py-20 bg-brightest dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-bowlby text-3xl text-gray-900 dark:text-white mb-4">
              Artikel nicht gefunden
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Der angeforderte Blog-Artikel konnte nicht gefunden werden.
            </p>
            <Link href="/blog">
              <Button className="bg-accent-yellow hover:bg-yellow-300 text-gray-900">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück zum Blog
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Find the actual asset from the includes section
  let coverImageUrl = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&w=1200&h=600&fit=crop';
  
  if (post.fields.coverImage && blogData.includes?.Asset) {
    const asset = blogData.includes.Asset.find(a => a.sys.id === post.fields.coverImage?.sys.id);
    if (asset) {
      coverImageUrl = contentfulClient.getAssetUrl(asset);
    }
  }

  const content = contentfulClient.formatRichText(post.fields.body);
  const readingTime = calculateReadingTime(content);

  return (
    <Layout
      title={`${post.fields.title} - The Advertising Collective Blog`}
      description={content.substring(0, 160) + '...'}
    >
      <article className="py-20 bg-brightest dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8 text-gray-600 dark:text-gray-300 hover:text-accent-yellow"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zum Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="font-bowlby text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">
              {post.fields.title}
            </h1>
            
            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-8">
              <Calendar className="h-5 w-5 mr-2" />
              <time>{formatDate(post.fields.publishedDate)}</time>
              <span className="mx-4">•</span>
              <Clock className="h-5 w-5 mr-2" />
              <span>{readingTime}</span>
            </div>

            {/* Cover Image */}
            <img
              src={coverImageUrl}
              alt={post.fields.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <h3 className="font-bowlby text-2xl text-gray-900 dark:text-white mb-4">
                Haben Sie Fragen zu diesem Thema?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Kontaktieren Sie uns für eine kostenlose Beratung zu Ihren 
                individuellen Herausforderungen.
              </p>
              <Link href="/contact">
                <Button className="bg-accent-yellow hover:bg-yellow-300 text-gray-900 font-bold">
                  JETZT KONTAKT AUFNEHMEN
                </Button>
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </Layout>
  );
}
