export default function Footer(){
    return(
        <>
        <div className="bg-black flex pt-8 justify-between pl-40 pr-40">
<p className="text-amber-400">Still You Need Our Support ?</p>
<form className="items-center">
<input value=" Digite seu e-mail" className="bg-white text-sm rounded-l-xl p-1" /><button className="bg-amber-400 rounded-r-xl p-1">Enviar</button>
</form>      
        </div>

        <div className=" text-white bg-black inline-flex justify-between pl-20 pr-20 pt-20 pb-5">
        <article className="w-3/12 ">
            <h1><a className="text-4xl text-amber-400">A</a>bout</h1>
        <hr className="text-yellow-400" />  
        <p className="w-full mt-2">Corporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>
        <hr className="text-yellow-400" />
        </article>
        
        <article className="w-3/12 pl-40">
            <h1>Useful Links</h1>
                <ul className="mt-1">
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
            <ul className="mt-1">
                    <li>FAQ</li>
                    <li>Term & Condition</li>
                    <li>Reporting</li>
                    <li>Documentation</li>
                    <li>Support Policy</li>
                    <li>Privacy</li>

                </ul>
        
        </article>
        <article className="w-3/12 text-yellow-500">
            <h1>Recent Post</h1>
        
        </article>
        </div>

        </>
    )
}