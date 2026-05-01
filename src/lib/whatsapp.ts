export const WHATSAPP_NUMBER = "94770000000"; // Replace with real number
export const PHONE_DISPLAY = "+94 77 000 0000";
export const EMAIL = "info@ssgroup.lk";
export const ADDRESS = "Trincomalee, Sri Lanka";
export const FACEBOOK_URL = "https://web.facebook.com/ssgroupenterprises/?_rdc=1&_rdr#";
export const INSTAGRAM_URL = "https://instagram.com/";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function serviceMessage(service: string) {
  return `Hi SSGROUP, I'm interested in ${service}. Can you provide more details?`;
}
