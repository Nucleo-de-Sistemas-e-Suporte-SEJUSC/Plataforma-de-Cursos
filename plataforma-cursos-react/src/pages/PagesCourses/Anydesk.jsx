import CoursePage from '../../components/CoursePage';
import Video from '../../assets/Videos/Anydesk.mp4';

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
      title="Como instalar o Anydesk"
      description="Um guia prático e direto ao ponto sobre como instalar, configurar e utilizar o Anydesk para acesso remoto com segurança e eficiência."
      videoUrl={Video}
      category="Tag/Categoria"
      duration="2h 15min"
      audience="Iniciantes e interessados"
      sections={sections}
    />
  );
}