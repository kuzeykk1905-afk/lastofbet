import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';
import { 
  Zap, 
  Globe, 
  TrendingUp, 
  Target,
  Gamepad2,
  Trophy,
  LineChart,
  Users,
  Shield,
  Mail 
} from 'lucide-react';
import { submitOffer } from '../services/mockData';

const Landing = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    offer: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitOffer(formData);
      toast({
        title: "Başarılı!",
        description: "Teşekkürler! En kısa sürede sizinle iletişime geçilecektir.",
      });
      setFormData({ name: '', email: '', offer: '', message: '' });
    } catch (error) {
      toast({
        title: "Hata",
        description: "Bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const domainValues = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Kısa ve akılda kalıcı",
      description: "Yalnızca 3 kelimeden oluşur, kolay telaffuz edilir."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Sektörle birebir uyumlu",
      description: "'Bet' kelimesi, bahis / oyun / eğlence endüstrisiyle direkt ilişkilidir."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global uzantı (.com)",
      description: "En güvenilir ve ticari değeri en yüksek domain uzantısıdır."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO avantajı",
      description: "Anahtar kelime içeriği sayesinde arama motorlarında güçlü konum elde edebilir."
    }
  ];

  const useCases = [
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Online bahis veya casino markası"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Spor tahmin platformu"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Oyun, e-spor veya analiz sitesi"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Affiliate (gelir ortaklığı) projesi"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Marka koruma veya yatırım amaçlı domain portföyü"
    }
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container-custom">
          <div className="logo-container">
            <img src="/logo.png" alt="lastofbet.com" className="logo-image" />
            <div className="logo">lastofbet.com</div>
          </div>
          <a href="mailto:lastofbet@proton.me" className="contact-link">
            <Mail className="w-4 h-4" />
            lastofbet@proton.me
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom">
          <div className="sale-badge">SATILIK</div>
          <h1 className="hero-title">lastofbet.com</h1>
          <p className="hero-subtitle">Kısa, akılda kalıcı ve güçlü bir marka ismi.</p>
          <p className="hero-supporting">Bu premium domain şu anda satılıktır.</p>
          <div className="hero-cta">
            <Button 
              onClick={() => document.getElementById('offer-section').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary-custom"
            >
              Teklif Gönder
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = 'mailto:lastofbet@proton.me'}
              className="btn-secondary-custom"
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>

      {/* Domain Value Section */}
      <section className="value-section">
        <div className="container-custom">
          <h2 className="section-title">Neden Bu Domain?</h2>
          <div className="value-grid">
            {domainValues.map((item, index) => (
              <Card key={index} className="value-card">
                <div className="value-icon">{item.icon}</div>
                <h3 className="value-title">{item.title}</h3>
                <p className="value-description">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Potential Use Section */}
      <section className="use-section">
        <div className="container-custom">
          <h2 className="section-title">Kullanım Alanı</h2>
          <div className="use-grid">
            {useCases.map((item, index) => (
              <div key={index} className="use-card">
                <div className="use-icon">{item.icon}</div>
                <p className="use-title">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer-section" className="offer-section">
        <div className="container-custom">
          <div className="offer-content">
            <div className="offer-text">
              <h2 className="section-title">Teklif Gönderin</h2>
              <p className="offer-description">
                Bu değerli domain'e sahip olmak için teklifinizi gönderin. 
                En kısa sürede sizinle iletişime geçeceğiz.
              </p>
              <div className="contact-info">
                <Mail className="w-5 h-5" />
                <a href="mailto:lastofbet@proton.me">lastofbet@proton.me</a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="offer-form">
              <div className="form-group">
                <Input
                  type="text"
                  name="name"
                  placeholder="Ad"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <Input
                  type="email"
                  name="email"
                  placeholder="E-posta"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <Input
                  type="text"
                  name="offer"
                  placeholder="Teklif Tutarı (USD)"
                  value={formData.offer}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <Textarea
                  name="message"
                  placeholder="Mesaj (isteğe bağlı)"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={4}
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-submit-custom"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container-custom">
          <p className="footer-copyright">© 2025 lastofbet.com</p>
          <div className="footer-disclaimer">
            <p>Bu web sitesi yalnızca domain satışı amacıyla yayınlanmaktadır.</p>
            <p>Hiçbir şekilde bahis veya şans oyunları hizmeti sunmamaktadır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;