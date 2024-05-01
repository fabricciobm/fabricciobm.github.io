import React, { useState } from 'react';
import './../../styles/contact.css';
import iconComponents from './../../components/icons';
import LazyBackgroundImage from './../../assets/service1.webp';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_44bzcfh', 
        'template_okd4jtn',
        e.target,
        'x8lrLLuHnsxk_vP77'
      );

      console.log(result.text);
      setSubmitStatus('success');

    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className='contact'>
      <section className='title-page-contact' style={{backgroundImage: `url(${LazyBackgroundImage})`}}>
        <div className='container-fluid'>
          <h2>Contatto</h2>
          <p>Chiama adesso per ulteriori informazioni!</p>
        </div>
      </section>
      <section className='contact-page container-fluid'>
        <div className='contact-info'>
          <h2>Chiamami</h2>
          <button className="btn btn-white" onClick={() => window.open('https://api.whatsapp.com/send/?phone=393517733589&text=fabricciobm.github.io')} type="button">
            {iconComponents.whatsapp()} <span>+393517733589</span>
          </button>
          <h2>Scrivi un'email</h2>
          <button className="btn btn-white" onClick={() => window.open('mailto:fabricciobm@outlook.com')} type="button">
            {iconComponents.mail()} <span>fabricciobm@outlook.com</span>
          </button>
          <h2>Località</h2>
          <button className="btn btn-white" onClick={() => window.open('https://www.google.com/maps/place/B%C3%A9rgamo,+It%C3%A1lia/')} type="button">
            {iconComponents.route()} <span>Bergamo - BG, Italia</span>
          </button>
        </div>
        <div className='contact-form'>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" className="form-control" id="name" name="from_name" onChange={(e) => setName(e.target.value)} value={name} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" className="form-control" id="email" name="reply_to" onChange={(e) => setEmail(e.target.value)} value={email} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Messaggio</label>
              <textarea className="form-control" id="message" rows="3" name="message" onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
            </div>
            <button type="submit" className="btn btn-white" disabled={isSubmitting}>
              {isSubmitting ? 'Invio in corso...' : 'Invia'}
            </button>
            {submitStatus === 'success' && <div className="success-message">Mensagem enviada com sucesso!</div>}
            {submitStatus === 'error' && <div className="error-message">Erro ao enviar mensagem. Por favor, tente novamente mais tarde.</div>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
