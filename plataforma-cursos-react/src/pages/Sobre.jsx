import React from 'react';
import Header from '../components/Header';
import Motivacional from '../components/MotivacionalSection';
import Footer from '../components/Footer';
import '../styles/Sobre.css';

export default function Sobre() {
  return (
    <>
      <Header />

       <div className="container">
  <div className="sobre">
    <h1>Sobre o SICAD</h1>
    <p className="Texto">
      O SICAD (Sistema Integrado de Capacitação e Desenvolvimento) é uma plataforma inovadora desenvolvida pela SEJUSC por meio do setor de Tecnologia da Informação (GTI), com o propósito de democratizar o acesso à capacitação, ao desenvolvimento pessoal e à formação contínua de servidores, colaboradores, gestores públicos e, de forma especial, do público em geral.<br></br>
<br></br>
A proposta do SICAD vai além da capacitação tradicional: seu objetivo é proporcionar uma experiência de aprendizagem moderna, acessível e direcionada às reais necessidades da administração pública e da sociedade. Por isso, os cursos oferecidos são pensados para atender diferentes faixas etárias e públicos, com conteúdos adaptados para todos os níveis de conhecimento, desde a formação básica até temas mais avançados voltados à qualificação profissional.<br></br>
<br></br>
A plataforma também está integrada ao SEDCA (Sistema Estadual de Desenvolvimento de Crianças e Adolescentes), ampliando seu alcance para crianças e jovens em situação de vulnerabilidade social, em escolas públicas ou em centros de apoio. Através desta parceria, o SICAD oferece cursos voltados ao desenvolvimento educacional, socioemocional e tecnológico para crianças, com foco em habilidades do século XXI, como pensamento crítico, cidadania digital, criatividade, leitura, escrita e matemática básica.<br></br>
<br></br>
Essa ação busca fortalecer a inclusão digital e educacional desde a infância, preparando essas crianças para os desafios do futuro e para o pleno exercício da cidadania. Com conteúdos lúdicos, interativos e elaborados por educadores e especialistas, os cursos infantis do SICAD foram planejados para estimular o interesse pelo conhecimento e promover a igualdade de oportunidades no acesso à educação.<br></br>
<br></br>
Nosso compromisso é com a transformação social por meio da educação. Acreditamos que capacitar é investir no presente com os olhos voltados para um futuro mais justo, preparado e participativo. Por isso, o SICAD segue firme em sua missão de oferecer uma plataforma acessível, intuitiva e com conteúdos de qualidade, constantemente atualizados e alinhados às demandas sociais, administrativas e pedagógicas do nosso tempo.</p>

    </div>
    </div>

      <Motivacional />
      <Footer />
    </>
  );
}