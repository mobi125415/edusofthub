export default function WhatsAppButton() {
  const whatsappNumber = "923010012627";

  const message = encodeURIComponent(
    "Assalam-o-Alaikum, mujhe EduSoftHub ke bare mein information chahiye."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact EduSoftHub on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition duration-300 hover:scale-110 hover:bg-green-600"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-9 w-9 fill-white"
        aria-hidden="true"
      >
        <path d="M16.04 2.67A13.25 13.25 0 0 0 4.56 22.5L2.7 29.33l7-1.83a13.29 13.29 0 1 0 6.34-24.83Zm0 23.87a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.15 1.09 1.11-4.05-.25-.42a10.58 10.58 0 1 1 9.08 5.09Zm5.81-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.68.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.67.76.24 1.44.21 1.99.13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}