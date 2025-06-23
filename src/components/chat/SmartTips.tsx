
import React from 'react';
import { Lightbulb } from 'lucide-react';

interface SmartTip {
  id: string;
  title: string;
  content: string;
  action: string;
  category: string;
}

interface SmartTipsProps {
  tips: SmartTip[];
  onTipClick: (tip: SmartTip) => void;
  isVisible: boolean;
}

const SmartTips: React.FC<SmartTipsProps> = ({ tips, onTipClick, isVisible }) => {
  if (!isVisible || tips.length === 0) return null;

  return (
    <div className="px-4 py-3 bg-gradient-yellow/10 border-t border-accent/20">
      <div className="flex items-center gap-2 mb-2">
        <Lightbulb className="w-4 h-4 text-navy" />
        <span className="text-xs font-semibold text-navy">💡 Smart Tip</span>
      </div>
      
      <div className="space-y-2">
        {tips.slice(0, 2).map((tip) => (
          <button
            key={tip.id}
            className="w-full text-left p-2 bg-white rounded-lg border border-accent/20 hover:bg-gradient-yellow/20 transition-colors"
            onClick={() => onTipClick(tip)}
          >
            <div className="text-xs font-medium text-navy mb-1">{tip.title}</div>
            <div className="text-xs text-navy/80 line-clamp-2">{tip.content}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SmartTips;
