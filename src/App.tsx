import { useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";

const phone = "+918376009912";
const whatsapp = "918376009912";
const email = "mehandi758@gmail.com";

const products = [
  { id: "rice", name: "Basmati & Non-Basmati Rice", category: "Rice", image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1000&q=80", text: "Long-grain, aromatic and commercial rice varieties for retail, foodservice and wholesale buyers." },
  { id: "spices", name: "Whole & Ground Spices", category: "Spices", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80", text: "Aromatic Indian spices sourced for consistent colour, flavour, purity and export specifications." },
  { id: "pulses", name: "Pulses & Lentils", category: "Pulses", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBZ6rMoI33EG6iRtky4kNRQRpqpF_1EdBboZCjQtWxQ&s=10", text: "Toor, moong, masoor, chickpeas and other staples for dependable bulk supply." },
  { id: "millets", name: "Millets & Coarse Grains", category: "Millets", image: "https://img.etimg.com/thumb/width-420,height-315,imgsize-62996,resizemode-75,msid-55700561/news/economy/agriculture/millets-are-good-no-doubt-but-they-neednt-be-miracle-food.jpg" , text: "Nutritious grains for modern food brands, distributors and health-focused markets." },
  { id: "seeds", name: "Oilseeds & Other Agro Products", category: "Agro Products", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=1000&q=80", text: "Flexible sourcing for additional agricultural commodities based on buyer requirements." },
];

const benefits = [
  ["01", "Quality-focused sourcing", "Supplier network and product checks designed around buyer specifications."],
  ["02", "Export-ready documentation", "Clear coordination for specifications, packaging, inspection and shipping documentation."],
  ["03", "Flexible private label", "Packaging and branding options can be discussed for retail and distribution programmes."],
  ["04", "One accountable partner", "A single point of coordination from enquiry and samples through shipment."],
];

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["/", "Home"],
    ["/products", "Products"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];

  return (
    <>
     
      <header className="header">
        <div className="container nav-wrap">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark"><img src="https://cdn.brands.live/small/v2/category_media/image_17682846326443.jpeg" alt="" /></span>
            <span><strong>Nature Harvest</strong><small>Pure For Sure</small></span>
          </Link>
          <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
          <nav className={open ? "nav open" : "nav"}>
            {nav.map(([path, label]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({isActive}) => isActive ? "active" : ""}>{label}</NavLink>
            ))}
            <Link className="btn btn-small" to="/contact" onClick={() => setOpen(false)}>Request a Quote</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-mark">NH</span><span><strong>Nature Harvest</strong><small>Pure For Sure</small></span></div>
          <p>Indian agricultural products sourced for quality-conscious international buyers.</p>
          <a className="footer-wa" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">Chat on WhatsApp →</a>
        </div>
        <div><h4>Explore</h4><Link to="/products">Products</Link><Link to="/about">About us</Link><Link to="/contact">Request a quote</Link></div>
        <div><h4>Product groups</h4><Link to="/products#rice">Rice</Link><Link to="/products#spices">Spices</Link><Link to="/products#pulses">Pulses</Link><Link to="/products#millets">Millets</Link></div>
        <div><h4>Contact</h4><p>Gurugram, Haryana, India</p><a href={`tel:${phone}`}>{phone}</a><a href={`mailto:${email}`}>{email}</a></div>
      </div>
      <div className="container copyright"><span>© {new Date().getFullYear()} Nature Harvest. All rights reserved.</span><span>Built for a clearer B2B buyer journey.</span></div>
    </footer>
  );
}

function CTA() {
  return 
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="eyebrow light">QUALITY AGRO EXPORT • INDIA</span>
          <h1>From Indian farms<br /><em>to global shelves.</em></h1>
          <p>Reliable sourcing of rice, spices, pulses, millets and other agricultural products — aligned to your market, specification and shipment needs.</p>
          <div className="hero-actions"><Link className="btn btn-primary" to="/products">View Products</Link><Link className="btn btn-outline" to="/contact">Request a Quote</Link></div>
          <div className="hero-trust"><span>✓ Buyer-focused sourcing</span><span>✓ Flexible packaging</span><span>✓ Export coordination</span></div>
        </div>
      </section>

    

      <section className="section">
        <div className="container split">
          <div><span className="eyebrow">Why Nature Harvest</span><h2>A sourcing partner, not just a supplier.</h2></div>
          <div><p className="lead">We connect international buyers with Indian agricultural supply through a practical, transparent export workflow.</p><p>From product selection and specifications to packaging, quality checks and shipment coordination, our focus is to make cross-border sourcing easier to manage.</p><Link className="text-link" to="/about">Learn about our approach →</Link></div>
        </div>
        <div className="container benefit-grid">{benefits.map(([n,t,d]) => <article className="benefit" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="section section-soft">
        <div className="container section-head"><div><span className="eyebrow">Product portfolio</span><h2>Products buyers can source</h2></div><Link className="text-link" to="/products">View all products →</Link></div>
        <div className="container product-grid">{products.slice(0,4).map(ProductCard)}</div>
      </section>

      <section className="section">
        <div className="container process">
          <div><span className="eyebrow">Simple enquiry process</span><h2>From requirement to shipment, with fewer steps.</h2><p className="lead">Share your product, quantity, packaging and destination. We can then align the offer and next steps with your requirements.</p><Link className="btn btn-primary" to="/contact">Start an Enquiry</Link></div>
          <div className="process-list">{["Share your requirement", "Confirm product & specification", "Review quote / samples", "Coordinate packing & shipment"].map((x,i)=><div key={x}><b>{String(i+1).padStart(2,"0")}</b><span>{x}</span></div>)}</div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function ProductCard(p: typeof products[number]) {
  return <article className="product-card" key={p.id}><img src={p.image} alt={`${p.category} agricultural products`} loading="lazy" /><div className="product-card-body"><span className="tag">{p.category}</span><h3>{p.name}</h3><p>{p.text}</p></div></article>;
}

function Products() {
  return <>
    <PageHero eyebrow="PRODUCT PORTFOLIO" title="Agricultural products, presented for business buyers." text="Explore the main product groups we can source and supply. Final varieties, grades, packaging and quantities are confirmed against each buyer enquiry." />
    <section className="section"><div className="container product-grid product-grid-large">{products.map(ProductCard)}</div></section>
    <section className="section section-soft"><div className="container spec-panel"><div><span className="eyebrow">Need a specific grade?</span><h2>Share the specification instead of searching through dozens of pages.</h2></div><div><p>Tell us the product, grade/variety, quantity, packaging preference and destination market. We can use that information to shape the enquiry.</p><Link className="btn btn-primary" to="/contact">Request a Quote</Link></div></div></section>
  </>;
}

function About() {
  return <>
    <PageHero eyebrow="ABOUT NATURE HARVEST" title="Indian sourcing with a global buyer mindset." text="Nature Harvest positions itself as an agri-export partner connecting Indian agricultural supply with buyers worldwide." />
    <section className="section"><div className="container about-grid"><div><span className="eyebrow">Our role</span><h2>Make agricultural sourcing easier to understand and easier to transact.</h2></div><div><p className="lead">We work across rice, spices, pulses, millets and other agro products, with sourcing and supply decisions shaped around buyer requirements.</p><p>The improved site intentionally makes product discovery, trust information and enquiry steps more visible, so a buyer does not need to hunt through long pages before starting a conversation.</p></div></div></section>
    <section className="section section-dark"><div className="container"><span className="eyebrow light">What buyers need to know</span><div className="facts-grid">{["Product scope", "Quality expectations", "Packaging options", "Destination market", "Quantity / MOQ", "Inspection & documentation"].map((x,i)=><div key={x}><span>0{i+1}</span><h3>{x}</h3><p>Discuss the requirement with the export team and confirm the applicable specification.</p></div>)}</div></div></section>
    <CTA />
  </>;
}

function PageHero({eyebrow,title,text}:{eyebrow:string,title:string,text:string}) {
  return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}

function Contact() {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [submitted, setSubmitted] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string,string> = {};
    if (!String(data.get("name")).trim()) next.name = "Name is required.";
    const mail = String(data.get("email")).trim();
    if (!mail) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(mail)) next.email = "Enter a valid email.";
    if (!String(data.get("product")).trim()) next.product = "Please select or enter a product.";
    if (!String(data.get("message")).trim()) next.message = "Please add your requirement.";
    setErrors(next);
    if (Object.keys(next).length) { setStatus("Please correct the highlighted fields."); setSubmitted(false); return; }
    setStatus("Thanks — your enquiry is ready to be connected to the Nature Harvest team.");
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return <>
    <PageHero eyebrow="CONTACT / REQUEST A QUOTE" title="Tell us what you want to source." text="The enquiry form is structured around the information an export team needs to start a useful conversation." />
    <section className="section"><div className="container contact-grid">
      <div className="contact-info"><span className="eyebrow">Direct contact</span><h2>Let's discuss your requirement.</h2><p>For a faster conversation, use WhatsApp or call the team. For a formal enquiry, use the form and include quantity, packaging and destination where possible.</p><div className="contact-card"><b>Phone / WhatsApp</b><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">{phone}</a></div><div className="contact-card"><b>Email</b><a href={`mailto:${email}`}>{email}</a></div><div className="contact-card"><b>Location</b><span>Gurugram, Haryana, India</span></div></div>
      <form className="quote-form" onSubmit={submit} noValidate><div className="form-row"><Field name="name" label="Your name *" error={errors.name}/><Field name="company" label="Company / organisation"/></div><div className="form-row"><Field name="email" label="Business email *" type="email" error={errors.email}/><Field name="phone" label="Phone / WhatsApp"/></div><div className="form-row"><Field name="product" label="Product required *" placeholder="e.g. Basmati rice, cumin, moong dal" error={errors.product}/><Field name="quantity" label="Approx. quantity" placeholder="e.g. 20 MT"/></div><div className="form-row"><Field name="destination" label="Destination country / port" placeholder="e.g. Dubai / Jebel Ali"/></div><label>Requirement / specification *<textarea name="message" rows={5} placeholder="Grade, packaging, private label, target timeline, etc."></textarea>{errors.message && <small className="error">{errors.message}</small>}</label><button className="btn btn-primary" type="submit">Send Enquiry →</button>{status && <p className={submitted ? "form-status success" : "form-status"} role="status">{status}</p>}</form>
    </div></section>
  </>;
}

function Field({name,label,type="text",placeholder,error}:{name:string,label:string,type?:string,placeholder?:string,error?:string}) {
  return <label>{label}<input name={name} type={type} placeholder={placeholder}/>{error && <small className="error">{error}</small>}</label>;
}

function App() {
  const location = useLocation();
  return <><Header /><main key={location.pathname}><Routes><Route path="/" element={<Home/>}/><Route path="/products" element={<Products/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></main><Footer/><a className="floating-wa" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_MCo9ANqa_D6PiA1wVINjrZMQjeg5hAIEl9318Sjig&s=10" alt="" /></a></>;
}

export default App;