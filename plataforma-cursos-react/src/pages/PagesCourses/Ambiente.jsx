import CoursePage from '../../components/CoursePage';

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
      title=" Sustentabilidade e Meio Ambiente"
      description="Explore práticas sustentáveis e conceitos ambientais importantes para o dia a dia. Um curso voltado à conscientização e ações práticas."
      videoUrl="https://www.youtube.com/embed/RgkB7Gfh1n0"
      category="Tag/Categoria"
      duration="2h 15min"
      audience="Iniciantes e interessados"
      sections={sections}
    />
  );
}