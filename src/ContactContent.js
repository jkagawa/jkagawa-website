function ContactContent() {

  return (
    <div class="page-row">
        <div>Contact Me</div>
        <div class="contact-form" style={{width: "95%", maxWidth: "720px", margin: "auto"}}>
        <form action="https://formspree.io/xzbkzzgg" method="POST">
            <label for="name">Name</label>
            <input type="text" name="name" required />
            <label for="email">Email Address</label>
            <input type="email" name="_replyto" required />
            <label for="message">Message</label>
            <textarea name="message" required></textarea>
            <input type="submit" value="Submit" />
        </form>
        </div>
    </div>
  );
}

export default ContactContent;
