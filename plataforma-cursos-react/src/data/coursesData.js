import Course1 from "../assets/backend-python.jpg";
import Course2 from "../assets/gestao.jpg";
import Course3 from "../assets/redes.jpg";
import Course4 from "../assets/anydesk.png";
import Course5 from "../assets/meioambiente.jpg";
import Course6 from "../assets/educacao.webp";
import Course7 from "../assets/costura.webp";
import Course8 from "../assets/desenho.webp";

const coursesData = [
  { id: 1, imgSrc: Course1, title: "Back-end em Python", description: "Informática • 20h", link: "/Python", tags: ["Curso TI", "programação", "python", "backend"] },
  { id: 2, imgSrc: Course2, title: "Gestão de Negócios", description: "Administração • 10h", link: "/Gestao", tags: ["Adm", "administração", "negócios"] },
  { id: 3, imgSrc: Course3, title: "Redes do zero", description: "Redes • 45h", link: "/Redes", tags: ["Rede", "infraestrutura", "rede", "ti"] },
  { id: 4, imgSrc: Course4, title: "Como instalar o Anydesk", description: "Tutorial • 10min", link: "/Anydesk", tags: ["Tutoriais", "anydesk", "remoto"] },
  { id: 5, imgSrc: Course5, title: "Sustentabilidade e Meio Ambiente", description: "Educação • 20h", link: "/Ambiente", tags: ["Outros", "meio ambiente", "ecologia"] },
  { id: 6, imgSrc: Course6, title: "Aprendendo com Jogos: Educação Infantil Interativa", description: "Educação • 10h", link: "/Educacao", tags: ["Outros", "educação", "infantil"] },
  { id: 7, imgSrc: Course7, title: "Curso de Iniciação à Corte e Costura", description: "DIY • 45h", link: "/Costura", tags: ["DIY", "costura", "manual"] },
  { id: 8, imgSrc: Course8, title: "Artes e Criatividade: Desenho e Pintura", description: "DIY • 10min", link: "/Desenho", tags: ["DIY", "arte", "desenho", "pintura"] },
];

export default coursesData;
