import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Building, 
  Code2, 
  Briefcase, 
  User, 
  MessageCircle,
  Shield,
  TrendingUp,
  Users
} from 'lucide-react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'companies', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Início', icon: User },
    { id: 'about', label: 'Sobre Mim', icon: User },
    { id: 'experience', label: 'Experiência', icon: Briefcase },
    { id: 'companies', label: 'Empresas', icon: Building },
    { id: 'contact', label: 'Contato', icon: MessageCircle },
  ];

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loading-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="loading-logo"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Code2 size={48} />
          </motion.div>
          <motion.h2
            className="loading-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Rhaynê's Website
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Navigation */}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-container">
          <motion.div
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 size={32} />
            <span>Rhaynê</span>
          </motion.div>

          <div className="nav-menu desktop-menu">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>

          <motion.button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDB8fHx8MTc1MzUwMDM1Mnww&ixlib=rb-4.1.0&q=85"
            alt="Technology workspace"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Olá, eu sou <span className="hero-name">Rhaynê</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Entusiasta em tecnologia e estudante de Engenharia de Software
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.button
                className="btn-primary"
                onClick={() => scrollToSection('about')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça Mais
              </motion.button>
              <motion.button
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Entre em Contato
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="scroll-arrow"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Sobre Mim</h2>
            <p className="section-subtitle">Conheça um pouco da minha jornada</p>
          </motion.div>

          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="about-card">
                <h3>Minha Trajetória</h3>
                <p>
                  Sou um apaixonado por tecnologia em constante evolução, atualmente cursando 
                  Engenharia de Software. Minha jornada começou com curiosidade e se transformou 
                  em uma paixão genuína por criar soluções inovadoras.
                </p>
                <p>
                  Através dos anos, desenvolvi expertise em diversas áreas tecnológicas, desde 
                  desenvolvimento de software até soluções empresariais. Acredito que a tecnologia 
                  tem o poder de transformar negócios e melhorar a vida das pessoas.
                </p>
                <p>
                  Minha abordagem combina conhecimento técnico sólido com visão estratégica de 
                  negócios, sempre buscando entregar resultados excepcionais.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="about-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1623715537870-fb4f469876e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDB8fHx8MTc1MzUwMDM1Mnww&ixlib=rb-4.1.0&q=85"
                  alt="Professional workspace"
                  className="about-img"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Experiência</h2>
            <p className="section-subtitle">Minha jornada técnica e profissional</p>
          </motion.div>

          <div className="experience-content">
            <motion.div
              className="experience-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="experience-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1623715537863-7b1441e0e2e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDB8fHx8MTc1MzUwMDM1Mnww&ixlib=rb-4.1.0&q=85"
                  alt="Technology and coding"
                  className="experience-img"
                />
              </div>
            </motion.div>

            <motion.div
              className="experience-details"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="experience-card">
                <h3>Desenvolvimento Técnico</h3>
                <div className="experience-item">
                  <h4>Engenharia de Software</h4>
                  <p>Estudante dedicado com foco em desenvolvimento full-stack, arquitetura de software e metodologias ágeis.</p>
                </div>
                <div className="experience-item">
                  <h4>Tecnologias</h4>
                  <p>Experiência com diversas linguagens e frameworks modernos, sempre atualizando conhecimentos com as últimas tendências.</p>
                </div>
                <div className="experience-item">
                  <h4>Gestão de Projetos</h4>
                  <p>Capacidade de liderança em projetos tecnológicos, desde concepção até implementação e entrega.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="companies-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Minhas Empresas</h2>
            <p className="section-subtitle">Empreendimentos que lidero e coordeno</p>
          </motion.div>

          <div className="companies-grid">
            <motion.div
              className="company-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="company-icon">
                <Users size={32} />
              </div>
              <h3>Ribeiro & Pimentel</h3>
              <p className="company-subtitle">Representação Comercial</p>
              <p className="company-description">
                Empresa de representação comercial consolidada no mercado desde 2000, 
                oferecendo soluções completas em vendas e relacionamento comercial.
              </p>
              <div className="company-background">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzUzNTAwMzU5fDA&ixlib=rb-4.1.0&q=85"
                  alt="Commercial representation"
                  className="company-bg-img"
                />
              </div>
            </motion.div>

            <motion.div
              className="company-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="company-icon">
                <Shield size={32} />
              </div>
              <h3>Kyvra Technology</h3>
              <p className="company-subtitle">Segurança Eletrônica</p>
              <p className="company-description">
                Especializada em soluções avançadas de segurança eletrônica, oferecendo 
                tecnologia de ponta para proteção residencial e empresarial.
              </p>
              <div className="company-background">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzUzNTAwMzU5fDA&ixlib=rb-4.1.0&q=85"
                  alt="Electronic security"
                  className="company-bg-img"
                />
              </div>
            </motion.div>

            <motion.div
              className="company-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="company-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Topo Brasil</h3>
              <p className="company-subtitle">Marketing Digital</p>
              <p className="company-description">
                Focada em tráfego pago, design e serviços de marketing digital, 
                ajudando empresas a alcançarem seus objetivos online.
              </p>
              <div className="company-background">
                <img 
                  src="https://images.unsplash.com/photo-1558959356-2f36c7322d3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzUzNTAwMzU5fDA&ixlib=rb-4.1.0&q=85"
                  alt="Digital marketing"
                  className="company-bg-img"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-background">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzUzNTAwMzU5fDA&ixlib=rb-4.1.0&q=85"
            alt="Contact office"
            className="contact-bg-image"
          />
          <div className="contact-overlay"></div>
        </div>

        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Entre em Contato</h2>
            <p className="section-subtitle">Vamos trabalhar juntos</p>
          </motion.div>

          <div className="contact-content">
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="contact-info-card">
                <h3>Informações de Contato</h3>
                <div className="contact-item">
                  <Mail size={20} />
                  <span>contato@rhayne.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <span>+55 (11) 9 9999-9999</span>
                </div>
                <div className="contact-item">
                  <MapPin size={20} />
                  <span>São Paulo, Brasil</span>
                </div>
                <div className="contact-social">
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Rhaynê's Website</h3>
              <p>Tecnologia, inovação e empreendedorismo</p>
            </div>
            <div className="footer-section">
              <h4>Links Rápidos</h4>
              <ul>
                <li><button onClick={() => scrollToSection('about')}>Sobre Mim</button></li>
                <li><button onClick={() => scrollToSection('experience')}>Experiência</button></li>
                <li><button onClick={() => scrollToSection('companies')}>Empresas</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contato</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Empresas</h4>
              <ul>
                <li>Ribeiro & Pimentel</li>
                <li>Kyvra Technology</li>
                <li>Topo Brasil</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Rhaynê's Website. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitStatus('');
    }, 3000);
  };

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Seu nome completo"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="seu@email.com"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="(11) 9 9999-9999"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          placeholder="Sua mensagem aqui..."
        />
      </div>
      
      <motion.button
        type="submit"
        className="submit-button"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </motion.button>
      
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Mensagem enviada com sucesso! Obrigado pelo contato.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

export default App;