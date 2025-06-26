const CONTENTFUL_SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'le164yvriu1o';
const CONTENTFUL_ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'qVxcteoMxbh9SDAsHfa3GbfNjWDpaNdXMa-ULiFO-iI';

export interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface ContentfulBlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    body: any;
    publishedDate: string;
    coverImage?: ContentfulAsset;
  };
}

export interface ContentfulResponse<T> {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: T[];
  includes?: {
    Asset?: ContentfulAsset[];
  };
}

class ContentfulClient {
  private baseUrl: string;
  private spaceId: string;
  private accessToken: string;

  constructor() {
    this.spaceId = CONTENTFUL_SPACE_ID;
    this.accessToken = CONTENTFUL_ACCESS_TOKEN;
    this.baseUrl = `https://cdn.contentful.com/spaces/${this.spaceId}`;
  }

  private async request<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    url.searchParams.append('access_token', this.accessToken);
    
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`Contentful API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async getBlogPosts(limit: number = 10, skip: number = 0): Promise<ContentfulResponse<ContentfulBlogPost>> {
    return this.request<ContentfulResponse<ContentfulBlogPost>>('/entries', {
      content_type: 'blog',
      limit: limit.toString(),
      skip: skip.toString(),
      order: '-fields.publishedDate',
      include: '2'
    });
  }

  async getBlogPostBySlug(slug: string): Promise<ContentfulResponse<ContentfulBlogPost>> {
    return this.request<ContentfulResponse<ContentfulBlogPost>>('/entries', {
      content_type: 'blog',
      'fields.slug': slug,
      include: '2'
    });
  }

  getAssetUrl(asset: ContentfulAsset): string {
    if (!asset || !asset.fields || !asset.fields.file || !asset.fields.file.url) {
      return 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&w=600&h=300&fit=crop';
    }
    const url = asset.fields.file.url;
    return url.startsWith('//') ? `https:${url}` : url;
  }

  formatRichText(richText: any): any[] {
    // Enhanced rich text formatting that preserves structure
    if (!richText || !richText.content) return [];
    
    return richText.content.map((node: any, index: number) => {
      const key = `node-${index}`;
      
      switch (node.nodeType) {
        case 'heading-1':
          return {
            type: 'h1',
            key,
            content: node.content?.map((c: any) => c.value || '').join('') || ''
          };
        case 'heading-2':
          return {
            type: 'h2',
            key,
            content: node.content?.map((c: any) => c.value || '').join('') || ''
          };
        case 'heading-3':
          return {
            type: 'h3',
            key,
            content: node.content?.map((c: any) => c.value || '').join('') || ''
          };
        case 'heading-4':
          return {
            type: 'h4',
            key,
            content: node.content?.map((c: any) => c.value || '').join('') || ''
          };
        case 'heading-5':
          return {
            type: 'h5',
            key,
            content: node.content?.map((c: any) => c.value || '').join('') || ''
          };
        case 'heading-6':
          return {
            type: 'h6',
            key,
            content: node.content?.map((c: any) => c.value || '').join('') || ''
          };
        case 'paragraph':
          return {
            type: 'p',
            key,
            content: node.content?.map((c: any) => c.value || '').join('') || ''
          };
        case 'unordered-list':
          return {
            type: 'ul',
            key,
            items: node.content?.map((listItem: any, itemIndex: number) => ({
              key: `${key}-item-${itemIndex}`,
              content: listItem.content?.map((paragraph: any) => 
                paragraph.content?.map((c: any) => c.value || '').join('') || ''
              ).join('') || ''
            })) || []
          };
        case 'ordered-list':
          return {
            type: 'ol',
            key,
            items: node.content?.map((listItem: any, itemIndex: number) => ({
              key: `${key}-item-${itemIndex}`,
              content: listItem.content?.map((paragraph: any) => 
                paragraph.content?.map((c: any) => c.value || '').join('') || ''
              ).join('') || ''
            })) || []
          };
        default:
          return {
            type: 'p',
            key,
            content: node.content?.map((c: any) => c.value || '').join('') || ''
          };
      }
    }).filter(node => node.content || node.items?.length);
  }

  formatRichTextSimple(richText: any): string {
    // Simple text extraction for reading time calculation
    if (!richText || !richText.content) return '';
    
    return richText.content
      .map((node: any) => {
        if (node.nodeType === 'paragraph') {
          return node.content?.map((c: any) => c.value || '').join('') || '';
        }
        if (node.nodeType.startsWith('heading-')) {
          return node.content?.map((c: any) => c.value || '').join('') || '';
        }
        return '';
      })
      .join(' ');
  }
}

export const contentfulClient = new ContentfulClient();
