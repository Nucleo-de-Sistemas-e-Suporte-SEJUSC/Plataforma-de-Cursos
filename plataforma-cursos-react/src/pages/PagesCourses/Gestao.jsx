import CoursePage from '../../components/CoursePage';
import Video from '../../assets/Videos/GESTAO.mp4';

export default function CursoCostura() {
  const sections = [
    {
      title: "Seção 1: Introdução",
      lessons: [
        { title: "1. Bem-vindo ao curso", duration: "4min" },
        { title: "2. Como o curso funciona", duration: "3min" }
      ]
    },
    {
      title: "Seção 2: Técnicas básicas",
      lessons: [
        { title: "1. Materiais necessários", duration: "5min" },
        { title: "2. Primeiros pontos", duration: "7min" }
      ]
    }
  ];

  return (
    <CoursePage
      title="Gestão de Negócios"
      description="Descubra os pilares da administração moderna, com foco em planejamento estratégico, liderança, gestão financeira e tomada de decisões eficazes."
      videoUrl={Video}
      category="Tag/Categoria"
      duration="2h 15min"
      audience="Iniciantes e interessados"
      sections={sections}
    />
  );
}