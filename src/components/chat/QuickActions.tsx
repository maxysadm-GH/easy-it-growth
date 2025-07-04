
import React from 'react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';

interface QuickActionsProps {
  actions: string[];
  onActionClick: (action: string) => Promise<void>;
  isLoading: boolean;
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions, onActionClick, isLoading }) => {
  const backgroundContext = useBackgroundDetection();
  
  if (actions.length === 0) return null;

  return (
    <div className="flex gap-2 mb-3 flex-wrap">
      {actions.map((action) => (
        <button
          key={action}
          className="px-3 py-1 rounded-xl text-xs font-semibold transition-all duration-200 border disabled:opacity-50"
          style={{
            background: backgroundContext.isBlueBackground 
              ? 'rgba(250, 207, 57, 0.3)' 
              : 'rgba(250, 207, 57, 0.25)',
            backdropFilter: 'blur(15px) saturate(150%)',
            border: backgroundContext.isBlueBackground 
              ? '1px solid rgba(250, 207, 57, 0.5)' 
              : '1px solid rgba(250, 207, 57, 0.4)',
            color: backgroundContext.isBlueBackground 
              ? 'rgba(17, 45, 78, 0.98)' 
              : 'rgba(17, 45, 78, 0.95)',
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.4)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.background = backgroundContext.isBlueBackground 
              ? 'rgba(250, 207, 57, 0.4)' 
              : 'rgba(250, 207, 57, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = backgroundContext.isBlueBackground 
              ? 'rgba(250, 207, 57, 0.3)' 
              : 'rgba(250, 207, 57, 0.25)';
          }}
          onClick={() => onActionClick(action)}
          disabled={isLoading}
          aria-label={action}
        >
          {action}
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
