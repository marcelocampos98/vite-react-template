import './App.css';
import logCriative from './assets/logo.svg';

function App() {
  return (
    <>
      <div className="flex justify-center">
        <img src={logCriative} />
        <div className="flex flex-col justify-center items-center gap-6">
          <p>
            Veja nossos <strong>produtos</strong> e <strong>serviços</strong>{' '}
            disponíveis
          </p>
          <a
            className="link-button"
            href="https://criativegraficacg.meloja.com.br/"
          >
            CATÁLOGO
          </a>
          <p>
            Faça seu pedido de forma <strong>rápida</strong> e{' '}
            <strong>fácil</strong> pelo WhatsApp
          </p>
          <a
            className="link-button"
            href="https://criativegraficacg.meloja.com.br/"
          >
            REALIZAR PEDIDO
          </a>
          <p>
            Solicite um <strong>orçamento</strong> abrindo nosso app de{' '}
            <strong>agendamento</strong>
          </p>
          <a
            className="link-button"
            href="https://criativegraficacg.meloja.com.br/"
          >
            ORÇAMENTO DE FACHADA
          </a>
          <p>
            Agende sua <strong>criação de arte</strong> diretamente em nosso app
          </p>
          <a
            className="link-button"
            href="https://criativegraficacg.meloja.com.br/"
          >
            AGENDAR CRIAÇÃO DE ARTE
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
