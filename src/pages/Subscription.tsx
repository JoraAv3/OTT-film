import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { MOCK_PLANS } from '@/data/mocks';
import { cn } from '@/shared/lib/utils';

export const Subscription = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="pt-24 pb-20 px-4 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Choose your plan</h1>
          <p className="text-xl text-gray-500 mb-10">Flexible plans for every type of cinema lover.</p>

          <div className="inline-flex items-center p-1 bg-black/5 dark:bg-white/5 rounded-xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-bold transition-all",
                billingCycle === 'monthly' ? "bg-white dark:bg-[#1C1C24] shadow-lg" : "text-gray-500"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
                billingCycle === 'yearly' ? "bg-white dark:bg-[#1C1C24] shadow-lg" : "text-gray-500"
              )}
            >
              Yearly
              <span className="text-[10px] bg-accent text-white px-1.5 py-0.5 rounded uppercase tracking-tighter">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {MOCK_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative p-8 rounded-3xl border transition-all transform hover:scale-105",
                plan.isPopular
                  ? "bg-white dark:bg-[#1C1C24] border-accent shadow-2xl scale-105 z-10"
                  : "bg-white/50 dark:bg-[#14141A] border-black/5 dark:border-white/5"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-widest flex items-center gap-1">
                  <Star size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">
                  ${billingCycle === 'monthly' ? plan.price : (plan.price * 0.8 * 12).toFixed(2)}
                </span>
                <span className="text-gray-500 text-sm ml-2">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map(feat => (
                  <li key={feat} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-none">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-4 font-bold rounded-xl transition-all active:scale-95",
                plan.isPopular
                  ? "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20"
                  : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10"
              )}>
                {plan.isPopular ? 'Get Started' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-gray-500 max-w-2xl mx-auto">
          Demo mode. Payments are not processed. You can cancel your subscription at any time. All plans include 4K support on selected titles.
        </p>
      </div>
    </div>
  );
};
