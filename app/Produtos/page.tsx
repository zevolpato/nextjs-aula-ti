import Image from "next/image"
import  MinhaImage from './1.png'


export default function Produtos(props) {
    return(
<section className="flex justify-center p-10 items-center">
<article className="flex w-2/5 border-2 shadow-2xl">
<div className="bg-white  h-44 p-10">
<Image
        src={MinhaImage}
        width={500}
        height={500}
        alt="Picture of the author"
/>

</div>
<div className="bg-white p-10">
  <h1>{ props.nome1 }</h1>
  <p className="pt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem labore enim voluptatibus molestiae ipsam.</p>
</div>
</article>


<article className="flex w-2/5 border-2 shadow-2xl">
<div className="bg-white  h-44 p-10">
<Image
        src={MinhaImage}
        width={500}
        height={500}
        alt="Picture of the author"
/>

</div>
<div className="bg-white p-10">
  <h1>{props.nome2}</h1>
  <p className="pt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem labore enim voluptatibus molestiae ipsam.</p>
</div>
</article>





</section>


    )
}