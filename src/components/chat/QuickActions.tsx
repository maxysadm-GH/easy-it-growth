
import React from 'react';

interface QuickActionsProps {
  actions: string[];
  onActionClick: (action: string) => Promise<void>;
  isLoading: boolean;
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions, onActionClick, isLoading }) => {
  if (actions.length === 0) return null;

  return (
    <div className="flex gap-2 mb-3 flex-wrap">
      {actions.map((action) => (
        <button
          key={action}
          className="px-3 py-1 rounded-xl text-xs font-semibold transition-all duration-200 border disabled:opacity-50"
          style={{
            background: 'rgba(250, 207, 57, 0.25)',
            backdropFilter: 'blur(15px) saturate(150%)',
            border: '1px solid rgba(250, 207, 57, 0.4)',
            color: 'rgba(17, 45, 78, 0.95)',
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.background = 'rgba(250, 207, 57, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'rgba(250, 207, 57, 0.25)';
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
