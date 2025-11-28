function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message"></textarea>
        <button className="btn">Send</button>
      </form>
    </section>
  );
}

export default Contact;
