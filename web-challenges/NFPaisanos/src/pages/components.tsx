import { Inter } from 'next/font/google'
import { Button, Divider } from '../components/common';
import { Header } from '../components/layout/header/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
        <Header />
        <Button type='main'>Place a bid</Button>
        <br />
        <br />
        <Button type='secondary'>View Item</Button>
        <br />
        <br />
        <Button type='light'>Connect Wallet</Button>
    </>
  )
}
