import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { contentService } from '@/services/mock/content.service';
import { VideoPlayer } from '@/widgets/VideoPlayer';
import { Content } from '@/types';

export const WatchPage = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<Content | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      if (!id) return;
      const data = await contentService.getContentById(id);
      if (!data) {
        navigate('/404');
        return;
      }
      setContent(data);
      setIsLoading(false);
    };
    fetch();
  }, [id, navigate]);

  if (isLoading || !content) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-[100]">
      <VideoPlayer
        url={content.media.videoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
        title={content.title}
        onBack={() => navigate(-1)}
      />
    </div>
  );
};
