import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in-left">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl">🏀</span>
            </div>
            <span className="text-2xl font-bold text-white">HOOP MASTERS</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('team')} className="text-white hover:text-primary transition-colors">Команда</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-primary transition-colors">Контакты</button>
          </div>
        </nav>
      </header>

      <section id="home" className="relative pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-9xl">🏀</div>
          <div className="absolute bottom-20 right-20 text-9xl">🏀</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ТВОЯ ДОРОГА К <span className="text-primary">ПОБЕДЕ</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Профессиональная баскетбольная академия для детей и взрослых. 
              Раскрой свой потенциал вместе с лучшими тренерами!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 animate-scale-in">
                Записаться на тренировку
              </Button>
              <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6 animate-scale-in">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-secondary mb-6">О нас</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HOOP MASTERS — это современная баскетбольная академия с 10-летним опытом. 
              Мы готовим чемпионов и помогаем каждому раскрыть свой потенциал. 
              Наши воспитанники играют в профессиональных лигах и сборных команд.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Trophy', title: '50+ наград', desc: 'Наши команды — победители региональных и национальных турниров' },
              { icon: 'Users', title: '500+ учеников', desc: 'Тренируем детей и взрослых всех уровней подготовки' },
              { icon: 'Target', title: '10 лет опыта', desc: 'Проверенная методика и профессиональные тренеры' }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-xl animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-secondary mb-6">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите программу, которая подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Групповые тренировки',
                price: '3 500 ₽',
                period: 'в месяц',
                features: ['8 занятий в месяц', 'Группы до 12 человек', 'Все уровни подготовки', 'Игровая практика'],
                icon: 'Users'
              },
              {
                title: 'Индивидуальные занятия',
                price: '2 000 ₽',
                period: 'за занятие',
                features: ['Персональный подход', 'Гибкое расписание', 'Быстрый прогресс', 'Работа над техникой'],
                icon: 'User',
                featured: true
              },
              {
                title: 'Летний лагерь',
                price: '25 000 ₽',
                period: 'за смену',
                features: ['2 недели интенсива', 'Проживание и питание', 'Мастер-классы', 'Турниры и призы'],
                icon: 'Flame'
              }
            ].map((service, idx) => (
              <Card 
                key={idx} 
                className={`relative overflow-hidden transition-all hover:shadow-2xl animate-fade-in ${service.featured ? 'border-4 border-primary scale-105' : 'border-2 hover:border-primary'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bold">
                    ПОПУЛЯРНОЕ
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{service.price}</span>
                    <span className="text-muted-foreground ml-2">{service.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={() => scrollToSection('contact')} className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-secondary mb-6">Наша команда</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональные тренеры с международным опытом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Алексей Волков',
                role: 'Главный тренер',
                experience: '15 лет опыта',
                achievements: 'Мастер спорта, тренер сборной России U-18',
                emoji: '👨‍🏫'
              },
              {
                name: 'Мария Соколова',
                role: 'Тренер по технике',
                experience: '12 лет опыта',
                achievements: 'ЗМС, бронзовый призёр Чемпионата Европы',
                emoji: '👩‍🏫'
              },
              {
                name: 'Дмитрий Орлов',
                role: 'Тренер молодежи',
                experience: '8 лет опыта',
                achievements: 'КМС, специалист по развитию юных игроков',
                emoji: '🧑‍🏫'
              }
            ].map((coach, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-xl animate-fade-in group" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                    {coach.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">{coach.name}</h3>
                  <p className="text-primary font-semibold mb-3">{coach.role}</p>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center justify-center gap-2">
                      <Icon name="Award" size={16} />
                      {coach.experience}
                    </p>
                    <p className="text-sm">{coach.achievements}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-secondary mb-6">Обратная связь</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Заполните форму, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 animate-fade-in-left">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Отправить заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-secondary">Ваше имя</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Иван Иванов"
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-secondary">Email</label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="ivan@example.com"
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-secondary">Телефон</label>
                    <Input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-secondary">Сообщение</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о своих целях и опыте в баскетболе..."
                      rows={4}
                      className="border-2"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8 animate-fade-in-right">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-6">Контакты</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-secondary">Адрес</p>
                        <p className="text-muted-foreground">г. Москва, ул. Спортивная, 15</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-secondary">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-secondary">Email</p>
                        <p className="text-muted-foreground">info@hoopmasters.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-secondary">Режим работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 09:00 - 21:00<br />Сб-Вс: 10:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-muted relative">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=1234567890"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Карта"
                      className="absolute inset-0"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xl">🏀</span>
                </div>
                <span className="text-xl font-bold">HOOP MASTERS</span>
              </div>
              <p className="text-white/80">
                Профессиональная баскетбольная академия для всех возрастов
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block hover:text-primary transition-colors">О нас</button>
                <button onClick={() => scrollToSection('services')} className="block hover:text-primary transition-colors">Услуги</button>
                <button onClick={() => scrollToSection('team')} className="block hover:text-primary transition-colors">Команда</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 HOOP MASTERS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
