
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { integrations } from '../data/integrations';

const LogoDiagnostic = () => {
  // All uploaded logo files from the read-only files list
  const uploadedLogos = [
    '1ab91a6b-e3f8-43f8-9178-1fbd96d033d3.png',
    '1d9f3afd-8528-4663-b663-8ca0cf42bb4c.png',
    '31fd0b08-30e1-4290-93b6-8547b1d4cfb5.png',
    '4196e0cf-1a9d-4697-b7f3-dbb3b3f867c7.png',
    '444b256c-f552-4b14-aecd-395d6963a3ae.png',
    '494ff85e-e7cd-44ec-bc15-19691a2bc978.png',
    '6c02622d-f929-4272-8fb2-56a68e33cc30.png',
    '76149f2e-0b85-4889-9a76-c7f2a3926d7c.png',
    '9047d06d-8e00-44f9-a949-19b842c87735.png',
    'ae564825-4d4f-43ea-b2f9-a67a15532b80.png',
    'b96e5d58-1268-4350-90f9-e2f5f1b25c2f.png',
    'c529216b-8e7e-41e1-a770-a5fc7bf00c58.png',
    'ce3f28ff-97cd-41cf-9b02-622f72b9cc0b.png',
    'ec151905-4eae-4fed-8284-05f239474d3c.png',
    'ffe520da-678f-47c4-ae10-5aa2728c4b2e.png'
  ];

  // Find which integration currently uses each logo
  const getIntegrationForLogo = (logoFile: string) => {
    const logoPath = `/lovable-uploads/${logoFile}`;
    return integrations.find(integration => integration.logo === logoPath);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-poppins font-bold text-navy mb-4">
                Logo Diagnostic Page
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Identify which logo file belongs to which brand
              </p>
              <Link 
                to="/integrations"
                className="inline-flex items-center gap-2 bg-accent text-navy px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                ← Back to Integrations
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uploadedLogos.map((logoFile) => {
                const currentIntegration = getIntegrationForLogo(logoFile);
                const logoPath = `/lovable-uploads/${logoFile}`;
                
                return (
                  <div key={logoFile} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gray-50 rounded-lg p-4 flex items-center justify-center border">
                      <img
                        src={logoPath}
                        alt={`Logo file: ${logoFile}`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="text-gray-400 text-sm text-center">Failed to load</div>';
                          }
                        }}
                      />
                    </div>
                    
                    <div className="text-center space-y-2">
                      <div className="text-sm font-mono text-gray-600 bg-gray-100 p-2 rounded break-all">
                        {logoFile}
                      </div>
                      
                      {currentIntegration ? (
                        <div className="text-sm">
                          <span className="text-gray-500">Currently assigned to:</span>
                          <br />
                          <span className="font-semibold text-navy">{currentIntegration.name}</span>
                          <br />
                          <span className="text-xs text-gray-400">({currentIntegration.category})</span>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-400">
                          Not currently assigned
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-navy mb-3">Instructions:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Look at each logo image above</li>
                <li>Note the UUID filename for each brand you can identify</li>
                <li>Tell me which filename belongs to which brand (e.g., "4196e0cf-1a9d-4697-b7f3-dbb3b3f867c7.png is QuickBooks")</li>
                <li>I'll update the integrations.ts file with the correct mappings</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoDiagnostic;
