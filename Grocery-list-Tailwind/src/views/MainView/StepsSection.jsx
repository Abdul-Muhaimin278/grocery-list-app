import { useState } from "react";
import {
  LuArrowRight,
  LuBell,
  LuCircleCheck,
  LuCirclePlus,
  LuListPlus,
  LuSearch,
  LuShare,
  LuShare2,
  LuSmartphone,
  LuStore,
  LuTag,
  LuTrendingUp,
  LuWallet,
} from "react-icons/lu";

const steps = [
  {
    title: "Create Lists",
    content: "Create custom shopping lists for different stores or occasions",
    icon: LuListPlus,
    triIcons: [
      { icon: LuStore, text: "Organize by store" },
      { icon: LuShare, text: "Share with family" },
      { icon: LuBell, text: "Set reminders" },
    ],
  },
  {
    title: "Add Items",
    content: "Quickly add items with our smart autocomplete feature.",
    icon: LuCirclePlus,
    triIcons: [
      { icon: LuSearch, text: "Smart Search" },
      { icon: LuTag, text: "Auto-categorize" },
      { icon: LuSmartphone, text: "Voice Input" },
    ],
  },
  {
    title: "Track Prices",
    content: "Monitor price changes and find the best deals",
    icon: LuTrendingUp,
    triIcons: [
      { icon: LuBell, text: "Price alerts" },
      { icon: LuStore, text: "Compare stores" },
      { icon: LuTag, text: "Deal finder" },
    ],
  },
  {
    title: "Save Money",
    content: "Save up to 30% on your grocery bills.",
    icon: LuWallet,
    triIcons: [
      { icon: LuCircleCheck, text: "Track savings" },
      { icon: LuTrendingUp, text: "Spending insights" },
      { icon: LuBell, text: "Budget alerts" },
    ],
  },
];

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How GrocerySave Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes and save hours every week
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {steps.map(({ icon: Icon, title }, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 border-emerald-500 bg-white/50 hover:bg-white ${
                      activeStep === index
                        ? `border-l-4 shadow-lg`
                        : `hover:shadow-md hover:bg-white`
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center bg-${
                          activeStep === index ? "emerald" : "gray"
                        }-100`}
                      >
                        <Icon className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <span
                            className={`text-sm font-medium text-${
                              activeStep === index ? "emerald" : "gray"
                            }-600`}
                          >
                            Step {index + 1}
                          </span>
                          {activeStep === index && (
                            <LuArrowRight className="h-4 w-4 ml-2 text-emerald-600" />
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg px-8 py-12 border-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-600 mb-8">
                  {steps[activeStep].content}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {steps[activeStep].triIcons.map(
                    ({ icon: Icon, text }, index) => (
                      <div
                        className="bg-gray-50 p-4 rounded-lg text-center hover:bg-emerald-50 transition-colors duration-300"
                        key={index}
                      >
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                          <Icon className="h-5 w-5 text-emerald-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">
                          {text}
                        </p>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium text-gray-400 ${
                      activeStep <= 0
                        ? "cursor-not-allowed"
                        : "text-gray-600 hover:bg-gray-10 cursor-pointer"
                    }`}
                    onClick={() => setActiveStep(activeStep - 1)}
                    disabled={activeStep <= 0}
                  >
                    Previous Step
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      activeStep >= steps.length - 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
                    }`}
                    onClick={() => setActiveStep(activeStep + 1)}
                    disabled={activeStep >= steps.length - 1}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsSection;
