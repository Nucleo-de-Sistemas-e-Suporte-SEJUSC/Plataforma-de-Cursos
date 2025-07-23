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
       title="Aprendendo com Jogos: Educação Infantil Interativa"
      description="Curso lúdico que ensina como usar jogos digitais e analógicos como ferramentas de aprendizagem para o desenvolvimento infantil."
      videoUrl="https://www.youtube.com/embed/RgkB7Gfh1n0"
      category="Tag/Categoria"
      duration="2h 15min"
      audience="Iniciantes e interessados"
      sections={sections}
    />
  );
}