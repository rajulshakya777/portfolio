
import '../assets/styles/Connect.scss';

// 
function Connect() {
  // Use Formspree endpoint for direct HTML POST
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnnzrowy';
  return (
  <div id="connect">
      <div className="items-container">
  <div className="connect_wrapper">
          <h1>Connect</h1>
          <p className="connect-instructions">Reach me at <a href="mailto:rshakywar@nebraska.edu">rshakywar@nebraska.edu</a> or through the form.</p>
          <form
            className="connect-form custom-connect-form full-width-form"
            action={FORMSPREE_ENDPOINT}
            method="POST"
            autoComplete="off"
            style={{
              background: '#fff',
              padding: 24,
              borderRadius: 12,
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.07)',
              width: '100%',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 18
            }}
          >
            <label htmlFor="name" className="connect-label">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="What's your name?"
              style={{
                padding: '12px 10px',
                fontSize: 16,
                border: '1.5px solid #bbb',
                borderRadius: 6,
                color: '#181818',
                background: '#fff',
                marginBottom: 10
              }}
            />
            <label htmlFor="email" className="connect-label">Email / Phone</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder="Enter your email address or phone number"
              pattern={
                // Email: simple regex, Phone: 10-15 digits, optional +, spaces, dashes, parentheses
                "(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)|(^[+]?[(]?[0-9]{1,4}[)]?[-\s0-9]{7,15}$)"
              }
              title="Please enter a valid email address or phone number."
              style={{
                padding: '12px 10px',
                fontSize: 16,
                border: '1.5px solid #bbb',
                borderRadius: 6,
                color: '#181818',
                background: '#fff',
                marginBottom: 10
              }}
            />
            <label htmlFor="message" className="connect-label">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Send me any inquiries or questions"
              rows={8}
              style={{
                padding: '12px 10px',
                fontSize: 16,
                border: '1.5px solid #bbb',
                borderRadius: 6,
                color: '#181818',
                background: '#fff',
                marginBottom: 10,
                resize: 'vertical',
                minHeight: 120
              }}
            />
            <button
              type="submit"
              style={{
                background: '#6c63ff',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '12px 0',
                fontWeight: 700,
                fontSize: 16,
                cursor: 'pointer',
                marginTop: 8
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connect;