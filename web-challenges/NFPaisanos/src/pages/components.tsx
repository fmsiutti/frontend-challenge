import { Inter } from 'next/font/google'
import { Button, Divider } from '../components/common';
import { Header } from '../components/layout/header/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
        <Header />
        <Button type='main' text="Place a bid" />
        <br />
        <br />
        <Button type='secondary' text="View Item" />
        <br />
        <br />
        <Button type='light' text="Connect Wallet" />
    </>
  )
}
