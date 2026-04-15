'use client';

import Link from 'next/link';
import { Heart, Shield, Sparkles, Users, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf9f6] to-white">

      {/* HERO SECTION WITH SMOOTH CSS PARALLAX */}
      <section 
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >
        <img 
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCofQHvd8XSG0PwAy5CZdxzGkqIV1Oy0yv14kKw80NhmDl_jKUy9rrKAbbbJApPvo1Tvs-GknxlJHYNz_xfrkWtzAmg9OAUpUu_ZeY69xU_THU_AdihrOHOpaHPeDVBKTE0uUVxncSAkIDMbPogOwciEuwJ9RCZvN9TgZyLKlwP_zs68pPp90Uu9D2xWwAuE0L7BWtpLrqlwn3oi5z545UXB-IdNuSdsJ5T_646gN6gpZvKlkyZYYfyyxL6jJLBF1VDnoCRyQy3I5dl"
          alt="Elegant couple in wedding attire"
        />
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto z-20 px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Title and Subtitle */}
          <div className="mb-16">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">Life Partner</span>
            </h1>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-600 text-white font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Free
            </Link>
            <Link
              href="/profiles"
              className="px-8 py-4 border-2 border-amber-500 text-amber-600 font-bold rounded-full hover:bg-amber-50 transition-all duration-300"
            >
              Browse Profiles
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-50/50 to-amber-50/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-serif text-4xl font-bold text-rose-600">50K+</p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Verified Members</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-rose-600">5K+</p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Happy Couples</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-rose-600">98%</p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Satisfaction Rate</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-rose-600">15+</p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Years of Trust</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Four simple steps to find your soulmate</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: '1',
                title: 'Register',
                desc: 'Create your account with verified identity. We ensure safety and authenticity for all members.',
              },
              {
                num: '2',
                title: 'Create Profile',
                desc: 'Tell your story. Upload photos, share preferences, and let your personality shine through.',
              },
              {
                num: '3',
                title: 'Search & Match',
                desc: 'Discover compatible matches using our smart algorithm. Browse profiles that align with your values.',
              },
              {
                num: '4',
                title: 'Connect',
                desc: 'Initiate conversations, exchange messages, and build genuine connections at your pace.',
              },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-3xl font-bold text-white">{step.num}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-center mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl font-bold text-center mb-16 text-gray-900">Why Choose SoulBind?</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Shield,
                title: 'Verified & Secure',
                desc: 'All members are verified for authenticity. Your data is encrypted and protected.',
              },
              {
                icon: Sparkles,
                title: 'Smart Matching Algorithm',
                desc: 'Our AI-powered system finds compatible matches based on values and preferences.',
              },
              {
                icon: Heart,
                title: '24/7 Support',
                desc: 'Dedicated support team ready to assist you at any time on your journey.',
              },
              {
                icon: Users,
                title: 'No Hidden Fees',
                desc: 'Transparent pricing. Know exactly what you are paying for upfront.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-4 p-6 rounded-xl hover:bg-amber-50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-amber-400 to-rose-500 text-white">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PLANS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">Premium Plans</h2>
            <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Standard',
                price: '₹0',
                period: '/month',
                desc: 'Perfect for getting started',
                features: [
                  { text: 'Profile creation', included: true },
                  { text: 'Browse 5 matches/day', included: true },
                  { text: 'Messaging', included: false },
                  { text: 'Advanced filters', included: false },
                ],
                cta: 'Get Started',
                highlight: false,
              },
              {
                name: 'Plus',
                price: '₹299',
                period: '/month',
                desc: 'Most features included',
                features: [
                  { text: 'Everything in Standard', included: true },
                  { text: 'Unlimited messaging', included: true },
                  { text: 'Advanced filters', included: true },
                  { text: 'See who viewed you', included: true },
                ],
                cta: 'Upgrade Now',
                highlight: true,
              },
              {
                name: 'Premium',
                price: '₹799',
                period: '/month',
                desc: 'For serious seekers',
                features: [
                  { text: 'Everything in Plus', included: true },
                  { text: 'Priority support', included: true },
                  { text: 'Personal matchmaker', included: true },
                  { text: 'Video verification', included: true },
                ],
                cta: 'Upgrade Now',
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-amber-50 to-rose-50 ring-2 ring-amber-400 shadow-2xl'
                    : 'bg-white shadow-lg hover:shadow-2xl'
                }`}
              >
                {plan.highlight && (
                  <div className="bg-gradient-to-r from-amber-400 to-rose-500 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.desc}</p>
                <p className="font-serif text-4xl font-bold mb-2 text-gray-900">
                  {plan.price}
                  <span className="text-lg text-gray-600 font-normal">{plan.period}</span>
                </p>
                <button
                  className={`w-full py-3 font-bold rounded-lg mb-8 transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-amber-400 to-rose-500 text-white hover:shadow-lg'
                      : 'border-2 border-amber-400 text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  {plan.cta}
                </button>
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex gap-3 text-sm">
                      <CheckCircle
                        size={18}
                        className={feature.included ? 'text-amber-500 flex-shrink-0' : 'text-gray-300 flex-shrink-0'}
                      />
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-50/50 to-amber-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real love stories from our community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya & Arjun',
                status: 'Married 2 years ago',
                quote: 'I found my soulmate through SoulBind. The platform is user-friendly and trustworthy. I couldn\'t be happier!',
                initials: 'PA',
              },
              {
                name: 'Neha & Rohit',
                status: 'Engaged 6 months ago',
                quote: 'The matching algorithm is incredible. I met someone who truly understands me. Highly recommended!',
                initials: 'NR',
              },
              {
                name: 'Anjali & Vikram',
                status: 'Dating 1 year',
                quote: 'Found love when I wasn\'t even looking. SoulBind is a game-changer for matrimony in India!',
                initials: 'AV',
              },
            ].map((story, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 text-white font-bold text-xl mx-auto mb-6">
                  {story.initials}
                </div>
                <p className="text-gray-700 italic mb-6 text-center leading-relaxed">"{story.quote}"</p>
                <p className="font-bold text-center text-gray-900">{story.name}</p>
                <p className="text-sm text-gray-500 text-center mt-1">{story.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-2xl text-white/90 mb-10 font-light">Join thousands of happy couples who found love through SoulBind</p>
          <Link
            href="/register"
            className="inline-block px-12 py-4 bg-white text-rose-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 text-lg shadow-xl"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </main>
  );
}
