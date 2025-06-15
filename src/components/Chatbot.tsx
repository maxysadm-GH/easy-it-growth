
import React from "react";
import { Send, Calendar, FileText, HelpCircle, DollarSign, User2 } from "lucide-react";

const actions = [
  { label: "Schedule Consultation", icon: Calendar, value: "schedule" },
  { label: "FAQs", icon: HelpCircle, value: "faq" },
  { label: "Billing", icon: DollarSign, value: "billing" },
  { label: "Support", icon: FileText, value: "support" },
];

const defaultWelcome = "👋 Hi! I’m the MBACIO Assistant. How can I help you today?";

const Chatbot = () => {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { from: "bot", text: defaultWelcome },
  ]);
  const [input, setInput] = React.useState("");

  const askBot = (question: string) => {
    let response = "";
    switch (question) {
      case "schedule":
        response = "Great! You can schedule a free consultation by clicking [here](/#contact) or let me know your preferred date/time.";
        break;
      case "faq":
        response = "Common FAQ:\n• What services do you offer?\n• Where do you operate?\n• Are you certified for HIPAA or CMMC? You can ask me any question below!";
        break;
      case "billing":
        response = "Billing help: For invoices, payment methods, and estimates, please leave details below or email billing@mbacio.com.";
        break;
      case "support":
        response = "Support: Please describe your issue or request and our California team will respond quickly! (Priority for LA & OC clients)";
        break;
      default:
        response = "Thank you for your message! Our team typically replies within a few minutes during business hours (Pacific Time). For urgent issues, call (855) 855-9224.";
    }
    setMessages((msgs) => [...msgs, { from: "bot", text: response }]);
  };

  const handleAction = (action: string) => {
    setMessages((msgs) => [...msgs, { from: "user", text: action }]);
    askBot(action);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    askBot(input.trim().toLowerCase());
    setInput("");
  };

  return (
    <>
      <button
        aria-label="Open chat"
        className="fixed bottom-7 right-7 z-40 bg-accent text-navy p-4 rounded-full shadow-xl hover:scale-110 focus:outline-none transition"
        onClick={() => setOpen((o) => !o)}
      >
        <User2 className="w-7 h-7" />
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 max-w-xs w-full bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
          <div className="flex items-center px-4 py-3 border-b bg-accent text-navy rounded-t-2xl font-bold">
            <User2 className="w-5 h-5 mr-2" />
            MBACIO Assistant
            <button
              className="ml-auto text-navy hover:text-red-500"
              onClick={() => setOpen(false)}
              aria-label="Close Chat"
            >
              ×
            </button>
          </div>
          <div className="p-4 space-y-2 max-h-80 overflow-y-auto font-inter">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`mb-2 max-w-[85%] rounded-lg px-3 py-2 break-words ${
                  m.from === "bot"
                    ? "bg-navy/5 text-navy ml-0"
                    : "bg-accent/20 text-navy ml-auto mr-0"
                }`}
              >
                {m.text.split("\n").map((x, idx) => <div key={idx}>{x}</div>)}
              </div>
            ))}
          </div>
          <div className="px-4 pb-3">
            <div className="flex gap-2 mb-2 flex-wrap">
              {actions.map((a) => (
                <button
                  key={a.value}
                  className="bg-accent/90 text-navy px-3 py-1 rounded-xl flex items-center gap-1 text-xs font-semibold shadow hover:bg-navy hover:text-accent transition"
                  onClick={() => handleAction(a.value)}
                >
                  <a.icon className="w-4 h-4" />
                  {a.label}
                </button>
              ))}
            </div>
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <input
                className="flex-1 border border-gray-200 rounded-xl px-3 py-1 text-navy focus:outline-accent"
                placeholder="Type your message…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
              />
              <button type="submit" className="text-accent hover:text-navy" aria-label="Send">
                <Send className="w-5 h-5" />
              </button>
            </form>
            <div className="text-[10px] text-muted-foreground pt-1 pl-1">California-based live support.</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
