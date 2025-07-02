import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import NavBar from '@/components/NavBar';
import { 
  Leaf, 
  Rocket, 
  Briefcase, 
  Building, 
  Bolt, 
  Search, 
  Headset, 
  CheckCircle 
} from 'lucide-react';

// Mock subscription plans data
const mockPlans = [
  {
    id: 1,
    name: 'Starter',
    price: 29,
    description: 'Perfect for freelancers and small teams getting started with task management.',
    boost_points: 100,
    search_limit: 50,
    paypal_button_id: 'STARTER_BUTTON_ID'
  },
  {
    id: 2,
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing teams that need advanced features and priority support.',
    boost_points: 500,
    search_limit: 200,
    paypal_button_id: 'PRO_BUTTON_ID'
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 299,
    description: 'For large organizations requiring maximum visibility and unlimited features.',
    boost_points: 2000,
    search_limit: 1000,
    paypal_button_id: 'ENTERPRISE_BUTTON_ID'
  }
];

const getIconForPrice = (price: number) => {
  if (price <= 100) return <Rocket className="h-8 w-8 text-emerald-500" />;
  if (price <= 200) return <Briefcase className="h-8 w-8 text-sky-500" />;
  return <Building className="h-8 w-8 text-amber-500" />;
};

// Mock testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "Skillanda transformed how our team manages projects. The boost feature helped us find top talent 3x faster!"
  },
  {
    name: "Mark Chen",
    role: "Startup Founder",
    company: "InnovateLab",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "Started with the free plan, upgraded to Professional within a week. The ROI has been incredible."
  },
  {
    name: "Lisa Rodriguez",
    role: "Team Lead",
    company: "DesignHub",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "24/7 support is game-changing. Got help at 2 AM and our project launched on time!"
  }
];

// FAQ data
const faqs = [
  {
    question: "Can I change plans anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate your billing."
  },
  {
    question: "What happens to my boost points?",
    answer: "Unused boost points roll over to the next month. They never expire as long as you maintain an active subscription."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Absolutely! We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment in full."
  },
  {
    question: "Do you offer team discounts?",
    answer: "Yes! Teams of 10+ users get special pricing. Contact our sales team for custom enterprise solutions."
  }
];

const Pricing = () => {
  const paypalUrl = "https://www.paypal.com/cgi-bin/webscr";

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-background to-teal-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              🚀 Limited Time: 30% Off First Month
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Supercharge Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600"> Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Join thousands of teams who've accelerated their success with Skillanda. 
              Find talent faster, boost visibility, and deliver projects that matter.
              <br className="hidden md:block" />
              <strong className="text-foreground">Start free, upgrade when you're ready to scale.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Start Free Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                See How It Works
              </Button>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3x</div>
              <div className="text-sm text-muted-foreground">Faster Hiring</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Choose Your Success Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every plan includes our core features. Scale up as your team grows and your projects become more ambitious.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Free Plan */}
          <Card className="relative border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
            </div>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Free Plan</CardTitle>
              <div className="text-3xl font-bold text-foreground">$0</div>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Get started for free! Create unlimited tasks visible in the Explorer. Upgrade anytime for more features.
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Boost Points:</span>
                  <span>0</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Search Limit:</span>
                  <span>0/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Task Creation:</span>
                  <span>Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Task Visibility:</span>
                  <span>Public Explorer</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Support:</span>
                  <span>Community</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                Start Free
              </Button>
            </CardContent>
          </Card>

          {/* Paid Plans */}
          {mockPlans.map((plan, index) => (
            <Card key={plan.id} className={`relative hover:shadow-lg transition-all duration-300 hover:scale-105 ${
              index === 1 ? 'border-2 border-emerald-200 bg-emerald-50/50' : ''
            }`}>
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-emerald-600 text-white">Recommended</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  {getIconForPrice(plan.price)}
                </div>
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-foreground">${plan.price}</div>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Boost Points:</span>
                    <span>{plan.boost_points.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Search Limit:</span>
                    <span>{plan.search_limit}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Support:</span>
                    <span>24/7</span>
                  </div>
                </div>
                
                <form action={paypalUrl} method="post" target="_top" className="mt-4">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value={plan.paypal_button_id} />
                  <input type="hidden" name="custom" value="user_id_here" />
                  <Button type="submit" className={`w-full ${
                    index === 1 
                      ? 'bg-emerald-600 hover:bg-emerald-700' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}>
                    Subscribe with PayPal
                  </Button>
                </form>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-gradient-to-r from-sky-50 to-teal-50 rounded-2xl p-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Loved by Teams Worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers are saying about their Skillanda experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare features across all plans and find the perfect fit for your team's ambitions
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-medium text-foreground">Feature</th>
                  <th className="text-center p-4 font-medium text-foreground">Free</th>
                  <th className="text-center p-4 font-medium text-foreground">Starter</th>
                  <th className="text-center p-4 font-medium text-foreground">Professional</th>
                  <th className="text-center p-4 font-medium text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">Task Creation</td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">Project Management</td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">Task Boosting</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">100 points</td>
                  <td className="text-center p-4">500 points</td>
                  <td className="text-center p-4">2000 points</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">Advanced Search</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">50/month</td>
                  <td className="text-center p-4">200/month</td>
                  <td className="text-center p-4">1000/month</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground">Priority Support</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Why Choose Skillanda?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 transition-colors">
              <Bolt className="h-12 w-12 text-amber-600" />
              <span className="font-semibold text-foreground text-lg">Lightning Fast</span>
              <span className="text-sm text-muted-foreground text-center">
                Boost your tasks to the top of the Explorer and get noticed instantly
              </span>
            </div>
            
            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-gradient-to-br from-sky-50 to-sky-100 hover:from-sky-100 hover:to-sky-200 transition-colors">
              <Search className="h-12 w-12 text-sky-600" />
              <span className="font-semibold text-foreground text-lg">Smart Discovery</span>
              <span className="text-sm text-muted-foreground text-center">
                Advanced search algorithms to find the perfect talent for your projects
              </span>
            </div>
            
            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 transition-colors">
              <Headset className="h-12 w-12 text-emerald-600" />
              <span className="font-semibold text-foreground text-lg">Always There</span>
              <span className="text-sm text-muted-foreground text-center">
                24/7 priority support from our expert team whenever you need help
              </span>
            </div>
            
            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-colors">
              <CheckCircle className="h-12 w-12 text-primary" />
              <span className="font-semibold text-foreground text-lg">Risk-Free</span>
              <span className="text-sm text-muted-foreground text-center">
                30-day money-back guarantee - your success is our priority
              </span>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-primary to-teal-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 50,000+ professionals who've accelerated their success with Skillanda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              Contact Sales
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            No credit card required • Cancel anytime • 30-day guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;