import {
  LuArrowRight,
  LuBell,
  LuCircleCheckBig,
  LuCirclePlus,
  LuClock,
  LuListPlus,
  LuShare2,
  LuShield,
  LuSmartphone,
  LuStar,
  LuStore,
  LuTrendingUp,
  LuUsers,
  LuWallet,
} from "react-icons/lu";
import StepsSection from "./StepsSection";

const features = [
  {
    icon: LuCircleCheckBig,
    title: "Smart Lists",
    description:
      "Create and manage multiple shopping lists with smart categorization and priority settings.",
  },
  {
    icon: LuClock,
    title: "Price History",
    description:
      "Track price changes over time and get notified when your favorite items go on sale.",
  },
  {
    icon: LuSmartphone,
    title: "Mobile Ready",
    description:
      "Access your lists anywhere with our mobile-friendly design and offline support.",
  },
];

const benefits = [
  { icon: LuStore, text: "Organize by store" },
  { icon: LuShare2, text: "Share with family" },
  { icon: LuBell, text: "Set reminders" },
];

const LandingPage = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        {/*======= HERO SECTION ===========*/}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Smart Grocery Shopping,{" "}
              <span className="text-emerald-600">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Organize your grocery lists, track prices, and save money with our
              intelligent shopping assistant. Join over 50,000 smart shoppers
              saving time and money every day.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg shadow-lg hover:bg-emerald-700 transition-colors">
                Get Started Free
              </button>
              <button className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="flex items-center">
                <LuStar className="h-5 w-5 text-yellow-400" />
                <span className="ml-2 text-gray-600">4.9/5 rating</span>
              </div>
              <div className="flex items-center">
                <LuUsers className="h-5 w-5 text-emerald-600" />
                <span className="ml-2 text-gray-600">50K+ users</span>
              </div>
              <div className="flex items-center">
                <LuShield className="h-5 w-5 text-emerald-600" />
                <span className="ml-2 text-gray-600">Secure &amp; Private</span>
              </div>
            </div>
          </div>
        </div>
        {/*======= FEATURES SECTION ===========*/}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to shop smarter
            </h2>
            <p className="text-xl text-gray-600">
              Simple yet powerful features to make grocery shopping a breeze
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features?.map(({ icon: Icon, title, description }, index) => (
              <div
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                key={index}
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
        {/*======= STEPS SECTION ===========*/}
        <StepsSection />
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Loved by Shoppers
              </h2>
              <p className="text-xl text-gray-600">
                See what our users have to say about GrocerySave
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">S</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-600">Busy Mom</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  {`"GrocerySave has completely transformed how I shop for my
                  family. I save both time and money every week!"`}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">M</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Mike Chen</h4>
                    <p className="text-gray-600">Budget Conscious</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  {`"The price tracking feature is amazing. I've saved over $200
                  in the past month alone."`}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">E</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Emily Davis</h4>
                    <p className="text-gray-600">Health Enthusiast</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  {`"I love how I can organize my shopping lists by category.
                  Makes healthy shopping so much easier!"`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-emerald-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Calculate Your Savings
              </h2>
              <p className="text-xl text-gray-600">
                See how much you could save with GrocerySave
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Monthly Grocery Spend</h4>
                  <p className="text-3xl font-bold text-emerald-600">$600</p>
                  <p className="text-sm text-gray-600">
                    Average household spend
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Potential Savings</h4>
                  <p className="text-3xl font-bold text-emerald-600">$180</p>
                  <p className="text-sm text-gray-600">30% average savings</p>
                </div>
              </div>
              <button className="w-full py-3 bg-emerald-600 text-white font-medium rounded-lg shadow-lg hover:bg-emerald-700 transition-colors">
                Start Saving Today
              </button>
            </div>
          </div>
        </div>
        <div className="bg-emerald-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start saving on groceries today
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of smart shoppers who are already saving time and
              money with GrocerySave. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
                Sign Up Now - It&#39;s Free
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
