
import React from "react";
const assistantIconUrl = "/lovable-uploads/6c02622d-f929-4272-8fb2-56a68e33cc30.png";

const actions = [
  { label: "Schedule Consultation", value: "schedule" },
  { label: "FAQs", value: "faq" },
  { label: "Billing", value: "billing" },
  { label: "Support", value: "support" },
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
        response = "Great! Schedule a free consultation by clicking [here](/#contact) or suggest your preferred time.";
        break;
      case "faq":
        response = "Common Questions:\n• What IT, security, or automation services do you offer?\n• Which industries do you specialize in?\n• Are you certified for HIPAA, CMMC, SOX?\nYou can ask me anything!";
        break;
      case "billing":
        response = "For billing or invoice info, leave your question or email us at billing@mbacio.com.";
        break;
      case "support":
        response = "Please describe your issue or request—our Chicago support team will assist you shortly!";
        break;
      default:
        response = "Thanks for reaching out! We'll typically reply within a few business minutes (Central US Time). For urgent matters, call (773) 657-2300.";
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
        className="fixed bottom-7 right-7 z-40 bg-gradient-yellow text-navy p-3 rounded-full shadow-xl hover:scale-110 focus:outline-none transition"
        onClick={() => setOpen((o) => !o)}
        style={{ border: "2px solid #112d4e" }}
      >
        <img src={assistantIconUrl} alt="Assistant" className="w-8 h-8" />
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 max-w-xs w-full bg-white rounded-2xl shadow-2xl border border-accent flex flex-col animate-fade-in">
          <div className="flex items-center px-4 py-3 border-b bg-gradient-yellow text-navy rounded-t-2xl font-bold drop-shadow-header">
            <img src={assistantIconUrl} className="w-8 h-8 mr-2" alt="Assistant Icon" />
            MBACIO Assistant
            <img
              src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
              className="h-6 w-auto ml-2"
              alt="MBACIO Logo"
              draggable={false}
            />
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
                    ? "bg-gradient-yellow/25 text-navy ml-0"
                    : "bg-accent text-navy ml-auto mr-0"
                }`}
                style={
                  m.from === "bot"
                    ? { borderLeft: "4px solid #FACF39" }
                    : { borderRight: "4px solid #FACF39" }
                }
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
                  className="bg-gradient-yellow text-navy px-3 py-1 rounded-xl flex items-center gap-1 text-xs font-semibold shadow hover:bg-navy hover:text-accent transition border border-navy"
                  onClick={() => handleAction(a.value)}
                  aria-label={a.label}
                  style={{ fontWeight: 700 }}
                >
                  {a.label}
                </button>
              ))}
            </div>
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <input
                className="flex-1 border border-accent rounded-xl px-3 py-1 text-navy focus:outline-accent bg-white"
                placeholder="Type your message…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
              />
              <button type="submit" className="text-accent hover:text-navy" aria-label="Send">
                <span className="font-bold text-lg">➤</span>
              </button>
            </form>
            <div className="text-[10px] text-muted-foreground pt-1 pl-1">Chicago-based, nation-wide support.</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
