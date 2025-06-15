
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AssessmentAutomation = () => {
  const [step, setStep] = useState<"register"|"questions">("register");
  const [email, setEmail] = useState("");

  // Registration before continuing to questions
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-xl p-8 mt-20">
        {step === "register" && (
          <>
            <h1 className="font-bold text-2xl text-navy mb-4">Register to Access Automation Assessment</h1>
            <p className="text-gray-600 mb-6">
              Enter your email to begin the IT Automation Assessment. We'll keep it confidential.
            </p>
            <form
              onSubmit={e => {
                e.preventDefault();
                if (email && /\S+@\S+\.\S+/.test(email)) {
                  setStep("questions");
                }
              }}
              className="space-y-4"
            >
              <Input
                type="email"
                required
                placeholder="Your business email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Button className="w-full bg-navy text-white" size="lg" type="submit">
                Register & Start
              </Button>
            </form>
          </>
        )}
        {step === "questions" && (
          <div>
            {/* You can import and reuse your automation assessment questions form here */}
            <h2 className="font-bold text-xl text-navy mb-2">Assessment Questions Go Here</h2>
            {/* ... */}
          </div>
        )}
      </div>
    </main>
  );
};

export default AssessmentAutomation;
