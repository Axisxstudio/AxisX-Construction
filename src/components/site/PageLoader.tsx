import logo from "@/assets/logo.png";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] gradient-hero flex items-center justify-center">
      <div className="text-center px-6">
        <div className="relative mx-auto mb-5 w-24 h-24 sm:w-28 sm:h-28">
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl animate-orb-pulse" />
          <div className="absolute -inset-3 rounded-full border-2 border-white/20 border-t-accent animate-spin" />
          <div className="absolute -inset-5 rounded-full border border-white/10 border-b-blue-300/70 animate-spin [animation-duration:2.8s] [animation-direction:reverse]" />
          <img
            src={logo}
            alt="SSGROUP logo"
            width={112}
            height={112}
            className="relative w-full h-full object-contain animate-fade-in"
          />
        </div>
        <h2 className="font-display text-white text-2xl sm:text-3xl font-bold tracking-wide">SSGROUP</h2>
        <p className="text-white/70 text-sm sm:text-base mt-1">Engineering & Construction</p>
      </div>
    </div>
  );
}
