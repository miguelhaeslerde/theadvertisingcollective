import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { contentfulClient, ContentfulBlogPost } from '@/lib/contentful';

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 9;

  const { data: blogData, isLoading, error } = useQuery({
    queryKey: ['/api/blog-posts', currentPage],
    queryFn: async () => {
      return contentfulClient.getBlogPosts(postsPerPage, currentPage * postsPerPage);
    },
  });

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

  return (
    <Layout
      title="Blog - The Advertising Collective"
      description="Aktuelle Insights und Expertise aus der Welt der Unternehmensberatung. Bleiben Sie auf dem Laufenden mit unseren Fachartikeln und Branchenanalysen."
    >
      {/* Hero Section */}
      <section className="bg-main-bg dark:bg-main-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-bowlby text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              UNSER <span className="text-accent-yellow">BLOG</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Aktuelle Insights und Expertise aus der Welt der Unternehmensberatung
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-brightest dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="bg-main-bg dark:bg-main-dark">
                  <Skeleton className="h-48 w-full rounded-t-lg" />
                  <CardContent className="p-6">
                    <Skeleton className="h-4 w-24 mb-3" />
                    <Skeleton className="h-6 w-full mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-20" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <h3 className="font-bowlby text-2xl text-gray-900 dark:text-white mb-4">
                Blog-Beiträge konnten nicht geladen werden
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Bitte versuchen Sie es später erneut oder kontaktieren Sie uns bei anhaltenden Problemen.
              </p>
              <Button
                onClick={() => window.location.reload()}
                className="bg-accent-yellow hover:bg-yellow-300 text-gray-900"
              >
                Seite neu laden
              </Button>
            </div>
          ) : blogData?.items && blogData.items.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.items.map((post: ContentfulBlogPost) => {
                  // Find the actual asset from the includes section
                  let coverImageUrl = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&w=600&h=300&fit=crop';
                  
                  if (post.fields.coverImage && blogData.includes?.Asset) {
                    const asset = blogData.includes.Asset.find(a => a.sys.id === post.fields.coverImage?.sys.id);
                    if (asset) {
                      coverImageUrl = contentfulClient.getAssetUrl(asset);
                    }
                  }
                  
                  const excerpt = contentfulClient.formatRichTextSimple(post.fields.body).substring(0, 150) + '...';
                  const readingTime = calculateReadingTime(contentfulClient.formatRichTextSimple(post.fields.body));

                  return (
                    <Card key={post.sys.id} className="bg-main-bg dark:bg-main-dark hover:shadow-lg transition-shadow">
                      <Link href={`/blog/${post.fields.slug}`}>
                        <img
                          src={coverImageUrl}
                          alt={post.fields.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </Link>
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <time>{formatDate(post.fields.publishedDate)}</time>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{readingTime}</span>
                        </div>
                        <Link href={`/blog/${post.fields.slug}`}>
                          <h3 className="font-bowlby text-lg text-gray-900 dark:text-white mb-3 hover:text-accent-yellow transition-colors">
                            {post.fields.title}
                          </h3>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {excerpt}
                        </p>
                        <Link
                          href={`/blog/${post.fields.slug}`}
                          className="text-accent-yellow font-bold hover:underline inline-flex items-center gap-2"
                        >
                          Weiterlesen <ArrowRight className="h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Pagination */}
              {blogData.total > postsPerPage && (
                <div className="flex justify-center items-center space-x-4 mt-12">
                  <Button
                    onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                    disabled={currentPage === 0}
                    variant="outline"
                  >
                    Vorherige
                  </Button>
                  <span className="text-gray-600 dark:text-gray-300">
                    Seite {currentPage + 1} von {Math.ceil(blogData.total / postsPerPage)}
                  </span>
                  <Button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={(currentPage + 1) * postsPerPage >= blogData.total}
                    variant="outline"
                  >
                    Nächste
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="font-bowlby text-2xl text-gray-900 dark:text-white mb-4">
                Noch keine Blog-Beiträge verfügbar
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Schauen Sie bald wieder vorbei für neue Insights und Fachartikel.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
