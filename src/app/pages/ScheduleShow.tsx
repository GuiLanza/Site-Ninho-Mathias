import { useState } from 'react';
import { Calendar, MapPin, User, Phone, Briefcase, Send } from 'lucide-react';

export function ScheduleShow() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    whatsapp: '',
    eventType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formata a mensagem para WhatsApp
    const message = `Olá! Gostaria de agendar um show com as seguintes informações:

📝 *Nome:* ${formData.name}
📅 *Data do Evento:* ${formData.date}
📍 *Local:* ${formData.location}
📱 *WhatsApp:* ${formData.whatsapp}
🎭 *Tipo de Evento:* ${formData.eventType}

Aguardo retorno!`;

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Redireciona para WhatsApp
    window.open(`https://wa.me/553184578989?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AGENDE SEU SHOW
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato via WhatsApp
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div className="group">
              <label htmlFor="name" className="flex items-center gap-2 text-white mb-2 font-semibold">
                <User className="w-5 h-5 text-amber-400" />
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all"
                placeholder="Digite seu nome"
              />
            </div>

            {/* Data do Evento */}
            <div className="group">
              <label htmlFor="date" className="flex items-center gap-2 text-white mb-2 font-semibold">
                <Calendar className="w-5 h-5 text-amber-400" />
                Data do Evento
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all"
              />
            </div>

            {/* Local */}
            <div className="group">
              <label htmlFor="location" className="flex items-center gap-2 text-white mb-2 font-semibold">
                <MapPin className="w-5 h-5 text-amber-400" />
                Local do Evento
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all"
                placeholder="Ex: São Paulo - SP"
              />
            </div>

            {/* WhatsApp */}
            <div className="group">
              <label htmlFor="whatsapp" className="flex items-center gap-2 text-white mb-2 font-semibold">
                <Phone className="w-5 h-5 text-amber-400" />
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all"
                placeholder="(00) 00000-0000"
              />
            </div>

            {/* Tipo de Evento */}
            <div className="group">
              <label htmlFor="eventType" className="flex items-center gap-2 text-white mb-2 font-semibold">
                <Briefcase className="w-5 h-5 text-amber-400" />
                Tipo de Evento
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all"
              >
                <option value="" disabled className="bg-zinc-900">
                  Selecione o tipo de evento
                </option>
                <option value="Empresarial" className="bg-zinc-900">
                  Empresarial
                </option>
                <option value="Aniversário" className="bg-zinc-900">
                  Aniversário
                </option>
                <option value="Show" className="bg-zinc-900">
                  Show
                </option>
                <option value="Casamento" className="bg-zinc-900">
                  Casamento
                </option>
                <option value="Outro" className="bg-zinc-900">
                  Outro
                </option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 text-lg"
            >
              <Send className="w-5 h-5" />
              Enviar pelo WhatsApp
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/70 text-center text-sm">
              Ao clicar em "Enviar pelo WhatsApp", você será redirecionado para uma conversa com nossa equipe, 
              onde poderemos discutir todos os detalhes do seu evento.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <Phone className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Telefone</h3>
            <p className="text-white/70">(31) 8457-8989</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <Calendar className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Disponibilidade</h3>
            <p className="text-white/70">Consulte nossa agenda</p>
          </div>
        </div>
      </section>
    </div>
  );
}
