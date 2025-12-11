import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import whatsap from '../../public/whatsap.png'
import instagram from '../../public/instagram.png'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your full name.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast({
        title: "Valid email is required",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Message is required",
        description: "Please enter your message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">💬 Fale com a gente!</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Entre em contato e seja
              <span className="hero-gradient bg-clip-text text-transparent"> Sua Melhor Versão</span>
            </h2>

            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 transition text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 botao-contato-contact   md:mr-0">
              <a
                href="https://api.whatsapp.com/send/?phone=5588921796197&text&type=phone_number&app_absent=0&utm_source=ig"
                className=" flex items-center justify-center "
                aria-label="Twitter"
              >
                <img src={whatsap} className='icon-botao-contact'/>
                WhatsApp
              </a>
              
            </button>
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 transition text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 botao-contato-contact  md:mr-0">
              <a
                href="https://www.instagram.com/donasdluxo/"
                className=" flex items-center justify-center "
                aria-label="Twitter"
              >
              <img src={instagram} className='icon-botao-contact'/>
              Instagram
              </a>
            </button>
           
          </div>

          <img src="./fachada.jpg" className='contact-image' alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;