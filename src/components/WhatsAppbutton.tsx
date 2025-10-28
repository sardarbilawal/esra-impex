import Image from "next/image";

export default function WhatsAppButton() {
  const phoneNumber = "+923484300929";
  const message = "Hello! I’d like to know more about your services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition"
    >
        <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width={28}
        height={28}
        />
      
    </a>
  );
}
