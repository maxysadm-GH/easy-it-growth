
import React from 'react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';
import CTAButton from '@/components/ui/cta-button';

interface EnhancedQuickActionsProps {
  actions: string[];
  onActionClick: (action: string) => Promise<void>;
  onDirectCTA: (ctaId: string) => void;
  isLoading: boolean;
}

const EnhancedQuickActions: React.FC<EnhancedQuickActionsProps> = ({ 
  actions, 
  onActionClick, 
  onDirectCTA,
  isLoading 
}) => {
  const backgroundContext = useBackgroundDetection();
  
  if (actions.length === 0) return null;

  const getCTAForAction = (action: string): string | null => {
    const actionMap: Record<string, string> = {
      'Take IT Assessment': 'book-assessment',
      'Calculate ROI': 'automation-roi',
      'Schedule Consultation': 'book-assessment',
      'Book Assessment': 'book-assessment',
      'Get Service Pricing': 'book-assessment',
      'Schedule Demo': 'book-assessment',
      'Book Your Free Assessment': 'book-assessment',
      'Talk with Engineer': 'book-assessment',
    };
    
    return actionMap[action] || null;
  };

  const handleActionClick = async (action: string) => {
    const ctaId = getCTAForAction(action);
    
    // Always prioritize booking actions - they work without AI
    if (ctaId === 'book-assessment' || action.toLowerCase().includes('book') || 
        action.toLowerCase().includes('schedule') || action.toLowerCase().includes('consultation')) {
      onDirectCTA(ctaId || 'book-assessment');
    } else if (ctaId) {
      onDirectCTA(ctaId);
    } else {
      await onActionClick(action);
    }
  };

  return (
    <div className="flex gap-2 mb-2 flex-wrap">
      {actions.slice(0, 3).map((action) => {
        const ctaId = getCTAForAction(action);
        
        // Prioritize booking/consultation actions with CTAButton
        if (ctaId === 'book-assessment' || action.toLowerCase().includes('book') || 
            action.toLowerCase().includes('schedule') || action.toLowerCase().includes('consultation')) {
          return (
            <CTAButton
              key={action}
              ctaId="book-assessment"
              variant="yellow"
              size="sm"
              showIcon={false}
              className="px-2 py-1 text-xs font-semibold"
              customConfig={{ text: action }}
            />
          );
        }

        // Regular action buttons
        return (
          <button
            key={action}
            className="px-2 py-1 rounded text-xs font-semibold transition-all duration-200 border disabled:opacity-50"
            style={{
              background: backgroundContext.isBlueBackground 
                ? 'rgba(250, 207, 57, 0.3)' 
                : 'rgba(250, 207, 57, 0.25)',
              borderColor: backgroundContext.isBlueBackground 
                ? 'rgba(250, 207, 57, 0.5)' 
                : 'rgba(250, 207, 57, 0.4)',
              color: backgroundContext.isBlueBackground 
                ? 'rgba(17, 45, 78, 0.98)' 
                : 'rgba(17, 45, 78, 0.95)',
            }}
            onClick={() => handleActionClick(action)}
            disabled={isLoading}
            aria-label={action}
          >
            {action}
          </button>
        );
      })}
    </div>
  );
};

export default EnhancedQuickActions;
