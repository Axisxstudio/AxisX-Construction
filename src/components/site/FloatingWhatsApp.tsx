import { useState } from "react";
import { X } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .15 5.35.15 11.91c0 2.1.55 4.16 1.6 5.98L0 24l6.29-1.65a11.9 11.9 0 0 0 5.77 1.47h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.46-8.43Zm-8.45 18.34h-.01a9.91 9.91 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.88 9.88 0 0 1-1.55-5.29c0-5.47 4.45-9.92 9.92-9.92a9.83 9.83 0 0 1 7.03 2.91 9.83 9.83 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.93 9.92Zm5.44-7.44c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.67.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.52-1.8-1.7-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.33.45-.49.15-.16.2-.28.3-.48.1-.2.05-.38-.03-.53-.08-.15-.69-1.67-.94-2.29-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.51 0 1.48 1.08 2.92 1.23 3.12.15.2 2.13 3.26 5.16 4.56.72.31 1.28.49 1.72.62.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.44.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.59-.36Z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const sampleMessage = "👋 Hi from AxisX Studio!";
  const [showSample, setShowSample] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {showSample ? (
        <div className="max-w-[240px] rounded-lg bg-white text-foreground text-xs px-3 py-2 shadow-soft border flex items-start gap-2">
          <span className="leading-relaxed">{sampleMessage}</span>
          <button
            type="button"
            onClick={() => setShowSample(false)}
            className="mt-0.5 shrink-0 text-muted-foreground hover:text-foreground transition-smooth"
            aria-label="Close WhatsApp message"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowSample(true)}
          className="rounded-full bg-white border px-3 py-1 text-xs font-semibold text-foreground shadow-soft hover:bg-secondary transition-smooth"
          aria-label="Show WhatsApp message"
        >
          Hi!
        </button>
      )}
      <a
        href={whatsappLink(sampleMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title={sampleMessage}
        className="relative h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1fb958] text-white shadow-elegant flex items-center justify-center animate-float transition-smooth hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>
    </div>
  );
}
