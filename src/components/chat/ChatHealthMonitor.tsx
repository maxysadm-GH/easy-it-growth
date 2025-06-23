
import React, { useState, useEffect } from 'react';
import { AlertTriangle, Wifi, WifiOff } from 'lucide-react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';
import { supabase } from '@/integrations/supabase/client';

interface ChatHealthMonitorProps {
  onHealthChange: (isHealthy: boolean) => void;
}

const ChatHealthMonitor: React.FC<ChatHealthMonitorProps> = ({ onHealthChange }) => {
  const [isHealthy, setIsHealthy] = useState(true);
  const [isChecking, setIsChecking] = useState(false);
  const backgroundContext = useBackgroundDetection();

  const checkAIHealth = async (): Promise<boolean> => {
    if (isChecking) return isHealthy;
    
    setIsChecking(true);
    try {
      const { data, error } = await supabase.functions.invoke('chat-assistant', {
        body: { message: 'health check' }
      });

      // Fix: Check for status === 'healthy' instead of just data?.reply
      const healthy = !error && data?.status === 'healthy';
      console.log('AI Health Check:', { healthy, error, data });
      return healthy;
    } catch (error) {
      console.error('AI health check failed:', error);
      return false;
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    const performHealthCheck = async () => {
      const healthy = await checkAIHealth();
      if (healthy !== isHealthy) {
        setIsHealthy(healthy);
        onHealthChange(healthy);
      }
    };

    // Initial check after a brief delay
    const initialTimer = setTimeout(performHealthCheck, 2000);

    // Check every 60 seconds (less frequent to avoid spam)
    const interval = setInterval(performHealthCheck, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [onHealthChange, isHealthy]);

  // Simple, unobtrusive indicator
  return (
    <div className="flex items-center gap-1 text-xs">
      {isHealthy ? (
        <Wifi className="w-3 h-3 text-green-500" />
      ) : (
        <WifiOff className="w-3 h-3 text-orange-500" />
      )}
      <span 
        className="text-xs opacity-75"
        style={{ color: backgroundContext.adaptiveColors.textColor }}
      >
        {isHealthy ? 'AI' : 'Offline'}
      </span>
    </div>
  );
};

export default ChatHealthMonitor;
