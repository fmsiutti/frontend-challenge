import Logo from "@/assets/Logo"
import Link from "next/link";
import Divider from '../../common/Divider';

export const Footer = function(){

return (<footer>
    <Divider />
    <div className="p-10 flex flex-col justify-center items-center">
        <Link className="flex items-center" href="/" >
            <Logo />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NFPaisanos</span>
        </Link>
        <h4 className="pt-3 font-light text-xl">The New Creative Economy.</h4>
    </div>
    <Divider className="w-[80%] ml-[10%]" />
    <div className="p-8 flex flex-col justify-center items-center">
        <p className="font-light text-light-grey text-sm">Created with ❤️ by Feli.</p>
    </div>

</footer>)
}