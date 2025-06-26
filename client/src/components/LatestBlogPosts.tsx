import { useQuery } from '@tanstack/react-query';
import { contentfulClient } from '@/lib/contentful';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function LatestBlogPosts() {
  const { data: blogData, isLoading, isError } = useQuery({
    queryKey: ['/api/blog/latest'],
    queryFn: () => contentfulClient.getBlogPosts(3), // Get latest 3 posts
  });

  if (isLoading) {
    return (
      <section className="py-24 bg-brightest dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bowlby text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              AKTUELLE BLOG-BEITRÄGE
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError || !blogData?.items.length) {
    return (
      <section className="py-24 bg-brightest dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bowlby text-4xl md:text-5xl text-gray-900 dark:text-white mb-8">
            AKTUELLE BLOG-BEITRÄGE
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Derzeit werden neue Inhalte vorbereitet. Schauen Sie bald wieder vorbei!
          </p>
          <Link href="/blog">
            <Button className="bg-accent-yellow hover:bg-accent-yellow/90 text-gray-900 font-bold">
              ALLE BEITRÄGE ANSEHEN
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadingTime = (content: any) => {
    // Simple estimation: ~200 words per minute
    const textContent = contentfulClient.formatRichTextSimple(content);
    const wordCount = textContent.split(' ').length;
    return Math.ceil(wordCount / 200);
  };

  return (
    <section className="py-24 bg-brightest dark:bg-gray-800 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(255,236,65,0.1)_0%,_transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(255,236,65,0.08)_0%,_transparent_50%)] animate-float"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-20">
          <h2 className="font-bowlby text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6 leading-tight">
            AKTUELLE BLOG-BEITRÄGE
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Insights, Trends und Expertenwissen aus der Welt der Unternehmensberatung
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-accent-yellow rounded-full animate-expand-glow"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {blogData.items.map((post: any) => {
            // Find the actual asset from the includes section
            let coverImageUrl = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&w=600&h=300&fit=crop';
            
            if (post.fields.coverImage && blogData.includes?.Asset) {
              const asset = blogData.includes.Asset.find((a: any) => a.sys.id === post.fields.coverImage?.sys.id);
              if (asset) {
                coverImageUrl = contentfulClient.getAssetUrl(asset);
              }
            }

            return (
              <Card
                key={post.sys.id}
                className="bg-white dark:bg-gray-900 hover:shadow-2xl hover:shadow-accent-yellow/10 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              >
                <Link href={`/blog/${post.fields.slug}`}>
                  <div className="relative h-48 overflow-hidden cursor-pointer">
                    <img
                      src={coverImageUrl}
                      alt={post.fields.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </Link>
                
                <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(post.fields.publishedDate)}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>{estimateReadingTime(post.fields.body)} Min. Lesezeit</span>
                </div>
                
                <Link href={`/blog/${post.fields.slug}`}>
                  <h3 className="font-bowlby text-xl text-gray-900 dark:text-white mb-3 group-hover:text-accent-yellow transition-colors line-clamp-2 cursor-pointer">
                    {post.fields.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {contentfulClient.formatRichTextSimple(post.fields.body).substring(0, 150)}...
                </p>
                
                <Link
                  href={`/blog/${post.fields.slug}`}
                  className="text-accent-yellow font-bold hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300"
                >
                  Weiterlesen <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-accent-yellow hover:bg-accent-yellow/90 text-gray-900 font-bold px-8 py-4 text-lg group">
              ALLE BLOG-BEITRÄGE ANSEHEN
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}