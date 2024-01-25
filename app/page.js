import Image from 'next/image'

import FirstImage from '../images/imagem1.png'
import SecondImage from '../images/imagem2.png'
import ThirdImage from '../images/imagem3.png'
import ForthImage from '../images/imagem4.png'
import FifthImage from '../images/imagem5.png'
import SixthImage from '../images/imagem6.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  return (

    <div>
      <div style={{
        display: 'grid',
        gridGap: '8px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, auto))',
      }}>
        <div style={{ position: 'relative', height: '200px' }}>
          <Image src={FirstImage} fill sizes="(min-width: 808px) 50vw, 100vw" />
        </div>
        <div style={{ position: 'relative', height: '200px' }}>
          <Image src={SecondImage} fill sizes="(min-width: 808px) 50vw, 100vw" />
        </div>
        <div style={{ position: 'relative', height: '200px' }}>
          <Image src={ThirdImage} fill sizes="(min-width: 808px) 50vw, 100vw" />
        </div>
        <div style={{ position: 'relative', height: '200px' }}>
          <Image src={ForthImage} fill sizes="(min-width: 808px) 50vw, 100vw" />
        </div>
        <div style={{ position: 'relative', height: '200px' }}>
          <Image src={FifthImage} fill sizes="(min-width: 808px) 50vw, 100vw" />
        </div>
        <div style={{ position: 'relative', height: '200px' }}>
          <Image src={SixthImage} fill sizes="(min-width: 808px) 50vw, 100vw" />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 className={inter.className}>Herd Control</h1>
          <form style={{ display: 'flex', gap: '10px', flexDirection: 'column', alignContent: 'stretch' }}>
            <TextField type="text" name="Email" placeholder="E-mail ou Usuário" />
            <TextField type="password" placeholder="Senha" />
            <Button variant="contained">Acessar</Button>
            <Button variant="contained">Esqueci minha senha</Button>
            <Link href="./CadastroPessoas.html" style={{display: 'contents'}}>
              <Button variant="contained">Quero me cadastrar!</Button>
            </Link>
          </form>
        </div>
      </div>


      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '5px'}}>
        <p className={inter.className} style={{fontWeight: 'bold'}}>(42)9999-9999</p>
        <p className={inter.className} style={{fontWeight: 'bold'}}>contato@herdcontrol.com</p>

      </div>
    </div>
  )

}