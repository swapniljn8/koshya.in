import React, { useState } from "react";

const occasions = [
  "New Joinee Kits",
  "Work Anniversary",
  "Diwali Hampers",
  "Client Gifting",
  "Employee Birthdays",
];
const tiers = [
  [
    "prakash",
    "Prakash",
    "From ₹499 / box",
    "Diyas, dry fruits, and a handwritten note — the essential festive gesture.",
  ],
  [
    "utsav",
    "Utsav",
    "From ₹1,200 / box",
    "A fuller celebration set with premium sweets, decor, and Koshya's signature seal.",
  ],
  [
    "shubh",
    "Shubh Labh",
    "From ₹2,500 / box",
    "The leadership hamper — artisanal, boxed for prosperity, built for lasting impressions.",
  ],
];
const differentiators = [
  [
    "Curated to Your Brand",
    "Every hamper aligned to your colours, values, and campaign story.",
  ],
  [
    "End-to-End Execution",
    "From concept to doorstep — sourcing, packing, and dispatch handled for you.",
  ],
  [
    "Pan-India Delivery",
    "Multi-location shipping for distributed teams, handled from one sheet.",
  ],
  [
    "A Dedicated Partner",
    "One point of contact from first enquiry through festival-season scale-up.",
  ],
];
const testimonials = [
  [
    "The onboarding kits landed exactly on brand — our new hires posted about it before we did.",
    "People Team Lead",
    "Series A SaaS Startup",
  ],
  [
    "Diwali hampers were ready two days early, every box identical in finish. Zero follow-ups needed.",
    "HR Business Partner",
    "Pune-based Fintech",
  ],
  [
    "Koshya understood our budget and still made it feel premium. That balance is rare.",
    "Co-founder",
    "D2C Consumer Brand",
  ],
];
const faqs = [
  [
    "What's the minimum order quantity?",
    "MOQ starts at 100 units. For larger orders, we can recommend the most cost-effective packaging and delivery plan.",
  ],
  [
    "How long does a bulk order take?",
    "7–10 business days for orders up to 200 units. Custom, heavily personalised kits may need 12–15 days.",
  ],
  [
    "Can you deliver to multiple employee addresses?",
    "Yes — share an address sheet and we handle multi-location dispatch across India.",
  ],
  [
    "Can I see a sample before placing a bulk order?",
    "Yes, sample approval is available, usually on a paid basis, for premium or large-volume orders.",
  ],
];

function DiyaIcon() {
  return (
    <svg
      className="diya"
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="#6B1E2B"
      strokeWidth="1.3"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="15" rx="8" ry="2.4" />
      <path d="M12 10c-1.4-1.6-1-3.4 0-5 1 1.6 1.4 3.4 0 5z" />
    </svg>
  );
}

function Header() {
  return (
    <header>
      <nav className="nav" aria-label="Main navigation">
        <a href="#top" className="logo">
          KOSHYA
        </a>
        <div className="navlinks">
          <a href="#occasions">Gifting</a>
          <a href="#tiers">Collections</a>
          <a href="#differentiators">Why Koshya</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="nav-cta" href="#enquire">
          Start an Enquiry
        </a>
      </nav>
    </header>
  );
}

function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  function submit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <form className="enquiry-form" onSubmit={submit}>
      {submitted ? (
        <div className="form-success" role="status">
          <strong>Thank you!</strong>
          <br />
          We will be in touch within 24 hours.
        </div>
      ) : (
        <>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              required
              name="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              required
              name="company"
              type="text"
              placeholder="Company name"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              required
              name="phone"
              type="tel"
              placeholder="+91"
            />
          </div>
          <div>
            <label htmlFor="quantity">Estimated Quantity</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              placeholder="e.g. 50"
            />
          </div>
          <div>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" defaultValue="New Joinee">
              <option>New Joinee</option>
              <option>Work Anniversary</option>
              <option>Diwali Gifting</option>
              <option>Employee Birthdays</option>
              <option>Client Gifting</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget">Budget per Gift</label>
            <select id="budget" name="budget" defaultValue="₹500 – ₹1000">
              <option>₹500 – ₹1000</option>
              <option>₹1000 – ₹2000</option>
              <option>₹2000 – ₹3500</option>
              <option>₹3500+</option>
            </select>
          </div>
          <button className="full" type="submit">
            Send Enquiry
          </button>
        </>
      )}
    </form>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="faq" id="faq">
      <div className="section-head">
        <div className="eyebrow">Key Questions</div>
        <h2>Frequently Asked</h2>
      </div>
      {faqs.map(([question, answer], index) => (
        <details
          className="faq-item"
          key={question}
          open={openIndex === index}
          onToggle={(event) => event.currentTarget.open && setOpenIndex(index)}
        >
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="logo">KOSHYA</div>
            <p className="footer-tagline">From our treasure to yours.</p>
          </div>
          <div>
            <h4>Gifting</h4>
            <ul>
              <li>
                <a href="#tiers">Diwali Collection</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#top">About Us</a>
              </li>
              <li>
                <a href="#enquire">Contact</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Get in Touch</h4>
            <ul>
              <li>gifting@koshya.in</li>
              <li>+91 9096099442</li>
              <li>Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Koshya. All rights reserved.</span>
          <span>Made for teams who gift with intention.</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div className="hero-text">
              <div className="eyebrow">Corporate Gifting, Reimagined</div>
              <h1>
                Thoughtful gifts.
                <br />
                <em>Lasting impressions.</em>
              </h1>
              <p>
                From new-joiner kits to Diwali hampers, Koshya turns every
                business occasion into a moment worth remembering.
              </p>
              <div className="hero-btns">
                <a className="btn-primary" href="#enquire">
                  Start an Enquiry
                </a>
                <a className="btn-secondary" href="#tiers">
                  Explore Collections
                </a>
              </div>
            </div>
            <div
              className="hero-visual"
              aria-label="Koshya corporate gift collection"
            >
              <div className="hero-mark">
                KOSHYA<span>Curated corporate gifting</span>
              </div>
            </div>
          </div>
        </section>
        <section className="trust">
          <div className="wrap">
            <div className="eyebrow">
              Trusted by growing teams across Pune &amp; Delhi NCR
            </div>
            <div className="trust-logos">
              <span>Startup A</span>
              <span>Startup B</span>
              <span>Startup C</span>
              <span>Startup D</span>
              <span>Startup E</span>
            </div>
          </div>
        </section>
        <section className="enquiry" id="enquire">
          <div className="wrap">
            <div className="enquiry-copy">
              <div className="eyebrow">Let's Curate Together</div>
              <h2>Tell us the occasion, we'll design the moment</h2>
              <p>
                Share a few details and our team will put together curated
                options within 24 hours — no minimum quantity too small to
                matter.
              </p>
            </div>
            <EnquiryForm />
          </div>
        </section>
        <section className="occasions" id="occasions">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Gifting Solutions</div>
              <h2>Every business moment, covered</h2>
            </div>
            <div className="occ-grid">
              {occasions.map((item) => (
                <article className="occ-card" key={item}>
                  <DiyaIcon />
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="tiers" id="tiers">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Diwali Collection 2026</div>
              <h2>Three tiers, one festive spirit</h2>
            </div>
            <div className="tier-grid">
              {tiers.map(([variant, title, price, description]) => (
                <article className="tier-card" key={title}>
                  <div className={`tier-top ${variant}`}>
                    <div className="word">{title}</div>
                  </div>
                  <div className="tier-body">
                    <div className="price">{price}</div>
                    <p>{description}</p>
                    <a href="#enquire">Enquire →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="diff" id="differentiators">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Why Koshya</div>
              <h2>Key Differentiators</h2>
            </div>
            <div className="diff-grid">
              {differentiators.map(([title, description]) => (
                <article className="diff-card" key={title}>
                  <DiyaIcon />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="testi">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Client Voices</div>
              <h2>Trusted by growing teams</h2>
            </div>
            <div className="testi-grid">
              {testimonials.map(([quote, name, role]) => (
                <article className="testi-card" key={name}>
                  <div className="stars" aria-label="Five stars">
                    ★★★★★
                  </div>
                  <p>“{quote}”</p>
                  <div className="who">{name}</div>
                  <div className="role">{role}</div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="stats">
          <div className="wrap">
            {[
              ["50+", "Companies Partnered"],
              ["3", "Diwali Tiers"],
              ["10+", "Cities Delivered To"],
              ["24h", "Enquiry Response Time"],
            ].map(([number, label]) => (
              <div className="stat" key={label}>
                <h3>{number}</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
