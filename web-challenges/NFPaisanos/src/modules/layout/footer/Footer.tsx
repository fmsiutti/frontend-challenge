import { Divider } from '@/components/common';
import { Logo } from '@/components/layout';

export default function Footer(){

return (
        <footer className="bg-main-grey md:bg-transparent">
            <Divider />

            <div className="container mx-auto">
                <div className="pt-16 md:pt-20 pb-12 flex flex-col justify-center md:items-center pr-32 md:pr-0">
                    <Logo />
                    <h4 className="mt-8 md:mt-5 font-light md:text-2xl">The New Creative Economy.</h4>
                </div>
                <Divider />
                <div className="p-8 flex flex-col justify-center items-center">
                    <p className="font-light text-light-grey text-sm">Created with ❤️ by Feli.</p>
                </div>
            </div>

        </footer>
    )
}