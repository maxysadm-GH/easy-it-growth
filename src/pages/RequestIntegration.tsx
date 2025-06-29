
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface IntegrationFormData {
  // Customer Information
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone?: string;
  
  // Integration Details
  integrationName: string;
  integrationWebsite?: string;
  currentVersion?: string;
  description: string;
  businessUseCase: string;
  
  // Technical Details
  apiAvailable: 'yes' | 'no' | 'unknown';
  dataTypes: string;
  frequency: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

const RequestIntegration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IntegrationFormData>();

  const onSubmit = async (data: IntegrationFormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send to your backend/CRM
      console.log('Integration Request Submitted:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Request Submitted Successfully!",
        description: "Our team will review your integration request and contact you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/integrations" className="inline-flex items-center gap-2 text-navy hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Integrations
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Request Custom Integration
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't see your favorite tool in our integration library? Let us know what you need, 
              and we'll work on adding it to our platform.
            </p>
          </div>

          <Card className="border-accent/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Customer Information Section */}
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-6">
                    Your Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        {...register('firstName', { required: 'First name is required' })}
                        className="mt-2"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        {...register('lastName', { required: 'Last name is required' })}
                        className="mt-2"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Please enter a valid email address'
                          }
                        })}
                        className="mt-2"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        className="mt-2"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        {...register('company', { required: 'Company name is required' })}
                        className="mt-2"
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Integration Details Section */}
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-6">
                    Integration Details
                  </h3>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="integrationName">Integration Name *</Label>
                        <Input
                          id="integrationName"
                          {...register('integrationName', { required: 'Integration name is required' })}
                          placeholder="e.g., Custom ERP System"
                          className="mt-2"
                        />
                        {errors.integrationName && (
                          <p className="text-red-500 text-sm mt-1">{errors.integrationName.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="integrationWebsite">Integration Website</Label>
                        <Input
                          id="integrationWebsite"
                          type="url"
                          {...register('integrationWebsite')}
                          placeholder="https://example.com"
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="currentVersion">Current Version (if applicable)</Label>
                      <Input
                        id="currentVersion"
                        {...register('currentVersion')}
                        placeholder="e.g., v2.1, 2024 Edition"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Tool Description *</Label>
                      <Textarea
                        id="description"
                        {...register('description', { required: 'Description is required' })}
                        placeholder="Briefly describe what this tool does and how your company uses it..."
                        className="mt-2 h-24"
                      />
                      {errors.description && (
                        <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="businessUseCase">Business Use Case *</Label>
                      <Textarea
                        id="businessUseCase"
                        {...register('businessUseCase', { required: 'Business use case is required' })}
                        placeholder="Explain how this integration would benefit your business operations, reporting, or decision-making..."
                        className="mt-2 h-24"
                      />
                      {errors.businessUseCase && (
                        <p className="text-red-500 text-sm mt-1">{errors.businessUseCase.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Technical Details Section */}
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-6">
                    Technical Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="apiAvailable">Does this tool have an API? *</Label>
                      <select
                        id="apiAvailable"
                        {...register('apiAvailable', { required: 'Please select an option' })}
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes, it has an API</option>
                        <option value="no">No API available</option>
                        <option value="unknown">I'm not sure</option>
                      </select>
                      {errors.apiAvailable && (
                        <p className="text-red-500 text-sm mt-1">{errors.apiAvailable.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="dataTypes">What type of data do you want to sync? *</Label>
                      <Textarea
                        id="dataTypes"
                        {...register('dataTypes', { required: 'Data types are required' })}
                        placeholder="e.g., Customer records, inventory levels, financial transactions, project data..."
                        className="mt-2 h-20"
                      />
                      {errors.dataTypes && (
                        <p className="text-red-500 text-sm mt-1">{errors.dataTypes.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="frequency">How often should data sync? *</Label>
                        <select
                          id="frequency"
                          {...register('frequency', { required: 'Please select a frequency' })}
                          className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                        >
                          <option value="">Select frequency</option>
                          <option value="real-time">Real-time</option>
                          <option value="hourly">Every hour</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                        {errors.frequency && (
                          <p className="text-red-500 text-sm mt-1">{errors.frequency.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="priority">Priority Level *</Label>
                        <select
                          id="priority"
                          {...register('priority', { required: 'Please select a priority' })}
                          className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                        >
                          <option value="">Select priority</option>
                          <option value="low">Low - Nice to have</option>
                          <option value="medium">Medium - Important for efficiency</option>
                          <option value="high">High - Critical for operations</option>
                          <option value="urgent">Urgent - Blocking current processes</option>
                        </select>
                        {errors.priority && (
                          <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-accent text-navy hover:bg-accent/90 font-bold text-lg px-10 py-4"
                  >
                    {isSubmitting ? (
                      <>Submitting...</>
                    ) : (
                      <>
                        Submit Request
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Have questions about this integration request?
            </p>
            <p className="text-sm text-gray-500">
              Our technical team will review your request and contact you within 24 hours to discuss 
              feasibility, timeline, and next steps.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestIntegration;
