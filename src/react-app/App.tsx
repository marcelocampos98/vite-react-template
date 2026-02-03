import './App.css';
import logCriative from './assets/logo.svg';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.png';
import whatsapp from './assets/whatsapp.svg';
import arrow from './assets/arrow.png';

function App() {
  return (
    <div className="px-2">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <img src={logCriative} />
        <div className="flex flex-col justify-center items-center gap-6">
          <p>
            Veja nossos <strong>produtos</strong> e <strong>serviços</strong>{' '}
            disponíveis
          </p>
          <a
            className="link-button"
            href="https://criativegraficacg.meloja.com.br/"
            target="_blank"
          >
            CATÁLOGO
          </a>
          <p>
            Faça seu pedido de forma <strong>rápida</strong> e{' '}
            <strong>fácil</strong> pelo WhatsApp
          </p>
          <a
            className="link-button"
            href="https://wa.me/message/EUZYOJ72F52GJ1"
            target="_blank"
          >
            REALIZAR PEDIDO
          </a>
          <p>
            Solicite um <strong>orçamento</strong> abrindo nosso app de{' '}
            <strong>agendamento</strong>
          </p>
          <a
            className="link-button flex flex-col"
            href="https://maapp.com.br/criativegraficacg"
            target="_blank"
          >
            <span>ORÇAMENTO DE FACHADA</span>
            <span className="subtitle flex justify-center items-center gap-2">
              <img src={arrow} className="h-[24px] w-[24px]" />
              Você será direcionado(a) para um aplicativo
            </span>
          </a>
          <p>
            Agende sua <strong>criação de arte</strong> diretamente em nosso app
          </p>
          <a
            className="link-button flex flex-col"
            href="https://criativegraficacg.meloja.com.br/"
            target="_blank"
          >
            <span>AGENDAR CRIAÇÃO DE ARTE</span>
            <span className="subtitle flex justify-center items-center gap-2">
              <img src={arrow} className="h-[24px] w-[24px]" />
              Você será direcionado(a) para um aplicativo
            </span>
          </a>
          <div className="flex social-container">
            <a
              href="https://www.facebook.com/share/14QubNzXQAU/?mibextid=wwXIfr"
              target="_blank"
            >
              <img src={facebook} className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/criativegraficacg?igsh=djIwNjJ3MXpnN2J4&utm_source=qr"
              target="_blank"
            >
              <img src={instagram} className="social-icon" />
            </a>
            <a href="https://wa.me/message/EUZYOJ72F52GJ1" target="_blank">
              <img src={whatsapp} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-6">
        <div className="flextext-center faq">
          <div className="text-center">Ficou com dúvidas?</div>
          <div className="text-center">
            Só{' '}
            <a
              className="underline"
              href="https://wa.me/message/EUZYOJ72F52GJ1"
              target="_blank"
            >
              clicar aqui
            </a>{' '}
            para falar conosco
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
