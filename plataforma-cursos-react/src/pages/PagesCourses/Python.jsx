import CoursePage from '../../components/CoursePage';
import Video from '../../assets/Videos/Python.mp4';

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
      title="Back-end em Python"
      description="Aprenda a desenvolver aplicações robustas utilizando Python. Este curso aborda fundamentos de lógica, estruturas de dados, APIs e integração com bancos de dados."
      videoUrl={Video}
      category="Tag/Categoria"
      duration="2h 15min"
      audience="Iniciantes e interessados"
      sections={sections}
    />
  );
}