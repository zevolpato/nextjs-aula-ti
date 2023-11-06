import Image from 'next/image'
import Menu from './Menu/page'
import Footer from './Footer/page'
import Produtos from './Produtos/page'


export default function Home() {
  return (
<>
<Menu />
<Produtos nome1="Risoto" nome2="Nhoque"/>

<Produtos />

<Footer />
</>

    )
}
