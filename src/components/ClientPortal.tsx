
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ClientPortal = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Client Portal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure access to your IT dashboard, reports, and documentation. Coming soon with enhanced features.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Login Form */}
          <Card className="max-w-md mx-auto lg:mx-0">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-bold text-navy text-center">
                Client Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" placeholder="Enter your username" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <Button className="w-full bg-navy text-white hover:bg-deep-blue" size="lg">
                  Login to Portal
                </Button>
                <div className="text-center">
                  <a href="#" className="text-sm text-accent hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Portal Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                What's Inside Your Portal
              </h3>
              <p className="text-muted-foreground mb-6">
                Your personalized dashboard provides real-time insights and secure access to all your IT resources.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Secure Onboarding",
                  description: "Streamlined setup process with guided tours and resource allocation"
                },
                {
                  title: "AI-Powered Reporting", 
                  description: "Real-time analytics and intelligent insights about your IT infrastructure"
                },
                {
                  title: "Document Access",
                  description: "Centralized repository for policies, procedures, and technical documentation"
                },
                {
                  title: "Support Tickets",
                  description: "Track and manage all support requests with full transparency"
                },
                {
                  title: "Performance Metrics",
                  description: "Monitor system health, uptime, and key performance indicators"
                },
                {
                  title: "Automated Alerts",
                  description: "Proactive notifications for system events and maintenance schedules"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-navy">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-poppins font-bold text-navy mb-4">
              Not a client yet?
            </h4>
            <p className="text-muted-foreground mb-6">
              Experience the power of our comprehensive IT management platform with a free consultation.
            </p>
            <Button className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold" size="lg">
              Schedule Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortal;
