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
          className="px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium hover:bg-secondary/80 transition-all duration-200 disabled:opacity-50 border border-border"
          onClick={() => onActionClick(action)}
          disabled={isLoading}
          aria-label={`Quick action: ${action}`}
        >
          {action}
        </button>
      ))}
    </div>
  );
};

export default QuickActions;