
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
          className="px-3 py-1 rounded-xl text-xs font-semibold shadow hover:scale-105 transition-all duration-200 border border-navy/20 disabled:opacity-50 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(250, 207, 57, 0.9), rgba(249, 195, 7, 0.8))',
            color: '#112d4e',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
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
