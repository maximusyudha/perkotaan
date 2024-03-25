import React from "react";

const WhatsAppButton = ({ phoneNumber, message }) => {
  const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      className="px-4 py-2 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white focus:outline-none"
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Send to WhatsApp</button>
    </a>
  );
};

export default WhatsAppButton;
