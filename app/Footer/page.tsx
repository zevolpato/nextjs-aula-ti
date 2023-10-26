export default function Footer(){
    return(
        <>
        <div className="bg-black flex pt-8 justify-between pl-40 pr-40">
<p className="text-white">Still You Need Our Support ?</p>
<form>
<input value="Digite seu e-mail" className="bg-white text-sm rounded-l-xl p-1" /><button className="bg-amber-400 rounded-r-xl p-1">Enviar</button>
</form>      
        </div>

        <div className=" text-white bg-black inline-flex justify-between pl-20 pr-20 pt-20">
        <article className="w-3/12 ">
            <h1>About</h1>
            <p className="w-full">Corporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>
        </article>
        <article className="w-3/12 pl-40">
            <h1>Useful Links</h1>
                <ul>
                    <li>About</li>
                    <li>News</li>
                    <li>Patners</li>
                    <li>Team</li>
                    <li>Menu</li>
                    <li>Contact</li>

                </ul>
        </article>
        <article className="w-3/12 pl-20">
            <h1>Help?</h1>
            <ul>
                    <li>FAQ</li>
                    <li>Term & Condition</li>
                    <li>Reporting</li>
                    <li>Documentation</li>
                    <li>Support Policy</li>
                    <li>Privacy</li>

                </ul>
        
        </article>
        <article className="w-3/12">
            <h1>Recent Post</h1>
        
        </article>
        </div>

        </>
    )
}