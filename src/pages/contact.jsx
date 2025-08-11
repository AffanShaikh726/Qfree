export default function Contact() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.6" }}>
      <h1 style={{ color: "#0044cc" }}>Contact Us</h1>
      <p>
        We’re here to help! If you have any questions, concerns, or feedback, feel free to reach out to us 
        using the information below.
      </p>

      <h2>Customer Support</h2>
      <p>
        <strong>Email:</strong> support@qfree.com <br />
        <strong>Phone:</strong> +91-7845885794<br />
        <strong>Working Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM
      </p>

      <h2>Office Address</h2>
      <p>
        Q free<br />
        R2FV+6Q7, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203 <br />
        India
      </p>

      <h2>Send Us a Message</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
        <input type="text" placeholder="Your Name" style={inputStyle} />
        <input type="email" placeholder="Your Email" style={inputStyle} />
        <textarea placeholder="Your Message" rows="5" style={inputStyle}></textarea>
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
  width: "100%",
};

const buttonStyle = {
  backgroundColor: "#0044cc",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

