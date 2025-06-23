
import React, { useState, useEffect } from 'react';
import { AlertTriangle, Wifi, WifiOff } from 'lucide-react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';

interface ChatHealthMonitorProps {
  onHealthChange: (isHealthy: boolean) => void;
}

const ChatHealthMonitor: React.FC<ChatHealthMonitorProps> = ({ onHealthChange }) => {
  const [isHealthy, setIsHealthy] = useState(true);
  const [lastCheck, setLastCheck] = useState<Date>(new Date());
  const backgroundContext = useBackgroundDetection();

  const checkAIHealth = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/health-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'health check' })
      });
      
      return response.ok;
    } catch (error) {
      console.error('AI health check failed:', error);
      return false;
    }
  };

  useEffect(() => {
    const performHealthCheck = async () => {
      const healthy = await checkAIHealth();
      setIsHealthy(healthy);
      setLastCheck(new Date());
      onHealthChange(healthy);
    };

    // Initial check
    performHealthCheck();

    // Check every 30 seconds
    const interval = setInterval(performHealthCheck, 30000);

    return () => clearInterval(interval);
  }, [onHealthChange]);

  if (isHealthy) {
    return (
      <div className="flex items-center gap-1 text-xs opacity-75">
        <Wifi className="w-3 h-3 text-green-500" />
        <span style={{ color: backgroundContext.adaptiveColors.textColor }}>AI Online</span>
      </div>
    );
  }

  return (
    <div 
      className="flex items-center gap-2 p-2 rounded border-l-3 mb-2"
      style={{
        background: 'rgba(255, 165, 0, 0.1)',
        borderColor: 'rgba(255, 165, 0, 0.5)',
        color: backgroundContext.adaptiveColors.textColor
      }}
    >
      <AlertTriangle className="w-4 h-4 text-orange-500" />
      <div>
        <div className="text-xs font-medium">AI Temporarily Unavailable</div>
        <div className="text-xs opacity-75">Direct booking still available below</div>
      </div>
    </div>
  );
};

export default ChatHealthMonitor;
