import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="pt-32 px-6 md:px-10 pb-24">
      <h1 className="font-display text-4xl md:text-5xl text-ink">Get in touch</h1>
      <p className="mt-4 max-w-md text-muted">
        Prints, licensing, or just want to talk about light and lenses —
        send a note.
      </p>
      <ContactForm />
    </div>
  );
}
