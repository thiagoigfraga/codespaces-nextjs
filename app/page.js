import Image from 'next/image'

import FirstImage from '../images/imagem1.png'
import SecondImage from '../images/imagem2.png'
import ThirdImage from '../images/imagem3.png'
import ForthImage from '../images/imagem4.png'
import FifthImage from '../images/imagem5.png'
import SixthImage from '../images/imagem6.png'

export default function Page() {
    return(

      <div>
        <div style={{
                  display: 'grid',
                  gridGap: '8px',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, auto))',
        }}>
          <div style={{ position: 'relative', height: '200px' }}>
          <Image src={FirstImage} fill sizes="(min-width: 808px) 50vw, 100vw"/>
          </div>
          <div style={{ position: 'relative', height: '200px' }}>
          <Image src={SecondImage} fill sizes="(min-width: 808px) 50vw, 100vw"/>
          </div>
          <div style={{ position: 'relative', height: '200px' }}>
          <Image src={ThirdImage} fill sizes="(min-width: 808px) 50vw, 100vw"/>
          </div>
          <div style={{ position: 'relative', height: '200px' }}>
          <Image src={ForthImage} fill sizes="(min-width: 808px) 50vw, 100vw"/>
          </div>
          <div style={{ position: 'relative', height: '200px' }}>
          <Image src={FifthImage} fill sizes="(min-width: 808px) 50vw, 100vw"/>
          </div>
          <div style={{ position: 'relative', height: '200px' }}>
          <Image src={SixthImage} fill sizes="(min-width: 808px) 50vw, 100vw"/>
          </div>

        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', columnGap: '10px'}}>
        <h1>Herd Control</h1>
        <div style={{ width: "400px", display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
          <input type="text" name="Email" placeholder="E-mail ou Usuário"/>
          <input type="password"  placeholder="Senha"/> 
          <form action="./HomeAdministrador.html">
              <button>Acessar</button>
          </form>
        </div>
        </div>


      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div>
       <center>
       <table>
          <button>Esqueci minha senha</button>
          <form action="./CadastroPessoas.html">
              <button>Quero me cadastrar!</button>
          </form>
       </table> 
       </center>
      </div>
  </div>
  <div style={{textAlign: 'center'}}>
      <br/>
      (42)9999-9999<br/>
      contato@herdcontrol.com<br/>
      
  </div>
  </div>
    ) 

  }