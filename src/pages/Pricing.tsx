import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

const Pricing = () => {
  const paypalUrl = "https://www.paypal.com/cgi-bin/webscr";

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skillanda Subscription Plans
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. All paid plans include 24/7 support and instant activation.
            <br className="hidden md:block" />
            Upgrade anytime as your team grows!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Free Plan */}
          <Card className="relative border-2 border-primary/20 hover:border-primary/40 transition-colors">
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
          {mockPlans.map((plan) => (
            <Card key={plan.id} className="relative hover:shadow-lg transition-shadow">
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
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Subscribe with PayPal
                  </Button>
                </form>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Why Skillanda Subscriptions?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Bolt className="h-8 w-8 text-amber-500" />
              <span className="font-medium text-foreground">Task Boosting</span>
              <span className="text-sm text-muted-foreground text-center">
                Boost your tasks to the top of the Explorer
              </span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <Search className="h-8 w-8 text-sky-500" />
              <span className="font-medium text-foreground">Advanced Search</span>
              <span className="text-sm text-muted-foreground text-center">
                Find the best talent with advanced search
              </span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <Headset className="h-8 w-8 text-emerald-500" />
              <span className="font-medium text-foreground">24/7 Priority Support</span>
              <span className="text-sm text-muted-foreground text-center">
                Get help whenever you need it
              </span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <CheckCircle className="h-8 w-8 text-primary" />
              <span className="font-medium text-foreground">Satisfaction Guarantee</span>
              <span className="text-sm text-muted-foreground text-center">
                100% satisfaction guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;