
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
          className="bg-gradient-yellow text-navy px-3 py-1 rounded-xl text-xs font-semibold shadow hover:bg-navy hover:text-accent transition border border-navy disabled:opacity-50"
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
