
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BlogPostShareProps {
  title: string;
  url?: string;
}

const BlogPostShare: React.FC<BlogPostShareProps> = ({ title, url = window.location.href }) => {
  const [shareStatus, setShareStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      // Check if Web Share API is available and we have permission
      if (navigator.share && navigator.canShare) {
        const shareData = {
          title: title || 'Check out this article',
          url: url
        };
        
        if (navigator.canShare(shareData)) {
          await navigator.share(shareData);
          setShareStatus('success');
          toast({
            title: "Shared successfully!",
            description: "Article shared via your device's native sharing.",
            duration: 3000,
          });
          return;
        }
      }
      
      // Fallback to clipboard API
      await navigator.clipboard.writeText(url);
      setShareStatus('success');
      toast({
        title: "Link copied!",
        description: "Article link has been copied to your clipboard.",
        duration: 3000,
      });
      
      // Reset status after 2 seconds
      setTimeout(() => setShareStatus('idle'), 2000);
    } catch (error) {
      console.error('Share failed:', error);
      setShareStatus('error');
      toast({
        title: "Share failed",
        description: "Unable to share the article. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
      
      // Reset status after 2 seconds
      setTimeout(() => setShareStatus('idle'), 2000);
    }
  };

  const getShareButtonText = () => {
    switch (shareStatus) {
      case 'success':
        return 'Copied!';
      case 'error':
        return 'Failed';
      default:
        return 'Share';
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleShare}
      disabled={shareStatus !== 'idle'}
      className={`border-navy text-navy hover:bg-navy hover:text-white transition-colors ${
        shareStatus === 'success' ? 'bg-green-50 border-green-500 text-green-600' : ''
      } ${
        shareStatus === 'error' ? 'bg-red-50 border-red-500 text-red-600' : ''
      }`}
    >
      <Share2 className="w-4 h-4 mr-2" />
      {getShareButtonText()}
    </Button>
  );
};

export default BlogPostShare;
