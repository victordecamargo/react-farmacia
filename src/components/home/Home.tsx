import farmacia from '../../assets/Farmacia.png'


export function Home() {
  return (
    <main className="max-w-7xl mx-auto space-y-8 mt-10">
      <h1 className="text-[#4be31d9c] text-6xl font-bold text-center">Farmácia Verde</h1>


      <div className="flex items-center gap-4">
        <img className='size-[550px] object-cover' src={farmacia} alt="farmácia" />
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            <strong className='text-center text-xl'>Serviços</strong>
            <p className='text-xl px-12'>
            Oferecemos assistência farmacêutica completa para atender às suas necessidades. Nossa equipe está preparada para fornecer orientações, aplicar vacinas, e garantir que você receba os medicamentos corretos com segurança. Conte com nosso suporte especializado para uma saúde mais eficaz e segura..</p>
          </div>
          <div className='flex flex-col gap-4'>
            <strong className='text-center text-xl'>Produtos</strong>
            <p className='text-xl px-12'>Disponibilizamos uma vasta gama de medicamentos e itens de saúde, com qualidade garantida. Nossos produtos incluem remédios, suplementos e artigos de cuidado pessoal, todos selecionados para oferecer eficácia e bem-estar. Encontre tudo o que precisa para sua saúde em um só lugar.




</p>
          </div>
          <div className='flex flex-col gap-4'>
            <strong className='text-center text-xl'>Categorias</strong>
            <p className='text-xl px-12'>Oferecemos uma ampla variedade de categorias para atender suas necessidades de saúde. Entre nossos segmentos estão medicamentos, suplementos nutricionais, cuidados pessoais e produtos específicos para tratamentos. Explore nossas opções para encontrar o que melhor se adapta às suas exigências e preferências.</p>
          </div>
        </div>


      </div>
    </main >
  )
}

export default Home