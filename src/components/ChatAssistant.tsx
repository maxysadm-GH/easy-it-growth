
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Clock, Calendar, Headphones } from 'lucide-react';

const ChatAssistant = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-accent/10 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            24/7 AI-Powered Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet your intelligent assistant - available around the clock to help with questions, schedule meetings, and escalate urgent issues.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Chat Interface Mockup */}
          <div className="relative">
            <Card className="bg-white shadow-2xl max-w-md mx-auto lg:mx-0">
              <CardContent className="p-0">
                {/* Chat Header */}
                <div className="bg-navy text-white p-4 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-yellow rounded-full flex items-center justify-center">
                      <Headphones className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold">MBACIO Assistant</h3>
                      <div className="flex items-center space-x-1 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Online</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 h-80 overflow-y-auto">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Hi! I'm here to help with any IT questions or schedule a consultation. What can I assist you with today?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-navy text-white rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Can you help me understand your automation services?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Absolutely! Our automation services help businesses reduce manual work by 80% on average. Would you like to schedule a free assessment to see what we can automate for you?</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-accent/20 rounded-lg p-3 max-w-xs">
                      <p className="text-sm font-medium">Quick Actions:</p>
                      <div className="mt-2 space-y-1">
                        <Button size="sm" variant="outline" className="w-full text-xs">
                          📅 Schedule Consultation
                        </Button>
                        <Button size="sm" variant="outline" className="w-full text-xs">
                          📊 Request Assessment
                        </Button>
                        <Button size="sm" variant="outline" className="w-full text-xs">
                          ❓ Common Questions
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      placeholder="Type your message..."
                      className="flex-1 border rounded-lg px-3 py-2 text-sm"
                    />
                    <Button size="sm" className="bg-navy text-white">
                      Send
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating notification */}
            <div className="absolute -top-4 -right-4 bg-accent text-navy px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
              Try me!
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                Your Intelligent IT Assistant
              </h3>
              <p className="text-muted-foreground mb-6">
                More than just a chatbot - our AI assistant is trained on IT best practices and can help with complex technical questions.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: MessageSquare,
                  title: "Instant Answers",
                  description: "Get immediate responses to common IT questions and troubleshooting guidance"
                },
                {
                  icon: Calendar,
                  title: "Smart Scheduling",
                  description: "Book consultations, assessments, and support sessions directly through chat"
                },
                {
                  icon: Clock,
                  title: "24/7 Availability",
                  description: "Round-the-clock support for urgent issues and after-hours questions"
                },
                {
                  icon: Headphones,
                  title: "Escalation to Experts",
                  description: "Seamlessly connect with human specialists when advanced help is needed"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold" size="lg">
                Start Chatting Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatAssistant;
