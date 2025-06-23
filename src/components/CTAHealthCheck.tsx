
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { validateAllCTAs, type CTAValidationResult } from '@/utils/cta-validator';
import { CTA_CONFIGS } from '@/config/cta';

const CTAHealthCheck: React.FC = () => {
  const [validationResults, setValidationResults] = useState<Record<string, CTAValidationResult>>({});
  const [isRefreshing, setIsRefreshing] = useState(false);

  const runValidation = () => {
    setIsRefreshing(true);
    const results = validateAllCTAs();
    setValidationResults(results);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  useEffect(() => {
    runValidation();
  }, []);

  const getStatusIcon = (result: CTAValidationResult) => {
    if (!result.isValid) {
      return <AlertTriangle className="w-4 h-4 text-red-500" />;
    }
    if (result.warnings.length > 0) {
      return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    }
    return <CheckCircle className="w-4 h-4 text-green-500" />;
  };

  const getStatusBadge = (result: CTAValidationResult) => {
    if (!result.isValid) {
      return <Badge variant="destructive">Error</Badge>;
    }
    if (result.warnings.length > 0) {
      return <Badge className="bg-yellow-500">Warning</Badge>;
    }
    return <Badge className="bg-green-500">Valid</Badge>;
  };

  const errorCount = Object.values(validationResults).filter(r => !r.isValid).length;
  const warningCount = Object.values(validationResults).filter(r => r.isValid && r.warnings.length > 0).length;
  const validCount = Object.values(validationResults).filter(r => r.isValid && r.warnings.length === 0).length;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">CTA Health Check</CardTitle>
          <Button 
            onClick={runValidation} 
            disabled={isRefreshing}
            size="sm"
            className="flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
        
        <div className="flex gap-4 text-sm">
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            {validCount} Valid
          </span>
          <span className="flex items-center gap-1">
            <AlertCircle className="w-4 h-4 text-yellow-500" />
            {warningCount} Warnings
          </span>
          <span className="flex items-center gap-1">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            {errorCount} Errors
          </span>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {Object.entries(validationResults).map(([ctaId, result]) => {
            const config = CTA_CONFIGS[ctaId];
            return (
              <div key={ctaId} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(result)}
                    <span className="font-medium">{config?.text || ctaId}</span>
                    {getStatusBadge(result)}
                  </div>
                  <Badge variant="outline">{config?.category}</Badge>
                </div>
                
                <div className="text-sm text-gray-600 mb-2">
                  <strong>URL:</strong> {config?.url}
                </div>
                
                {result.errors.length > 0 && (
                  <div className="mb-2">
                    <strong className="text-red-600">Errors:</strong>
                    <ul className="list-disc list-inside text-sm text-red-600 ml-2">
                      {result.errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {result.warnings.length > 0 && (
                  <div>
                    <strong className="text-yellow-600">Warnings:</strong>
                    <ul className="list-disc list-inside text-sm text-yellow-600 ml-2">
                      {result.warnings.map((warning, index) => (
                        <li key={index}>{warning}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default CTAHealthCheck;
