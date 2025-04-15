import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out BoltCV",
    features: [
      "5 resume uploads per month",
      "Basic JSON output",
      "Standard API access",
      "Community support"
    ]
  },
  {
    name: "Pro",
    price: "$19",
    description: "For professional developers",
    features: [
      "Unlimited resume uploads",
      "Advanced JSON parsing",
      "Priority API access",
      "Enhanced search visibility",
      "Email support",
      "Custom categories"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Custom API endpoints",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "Team management"
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that best fits your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="p-8 backdrop-blur border-primary/10 hover:border-primary/20 transition-colors">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>
              <p className="text-muted-foreground mb-8">{plan.description}</p>
              <Button className="w-full mb-8">
                Get Started
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}