import "./index.css";

import { logo, crown, ShieldCheck, Truck, card, vector, Heart, UserCircle, ShoppingCart, pc, supermercado, whiskey, ferramentas, saude, esportes, moda  } from './img.js';


function App() {
  return (
    <div className="App">
      <main>

        <header>

          <section className="desc">
            <section className="buy">
              {ShieldCheck()} <h1>Compra </h1><h1 className="red"> 100% segura</h1>
            </section>
            <section className="buy">
              {Truck()}<h1 className="red">Frete grátis </h1> <h1> acima de R$ 200</h1>
            </section>
            <section className="buy">
              {card()}<h1 className="red">Parcele </h1> <h1> suas compras</h1>
            </section>
          </section>

          <nav>
            <hr></hr>

            <div className="search">
              <section className="logo">
                {logo()}
              </section>

              <form action="" method="" className="formSearch">
                <input type="text" id="txtSearch" className="search" placeholder="O que você está buscando?"></input>
                <button type="button"><img src="img/MagnifyingGlass.png"></img></button>
              </form>

              <section className="icons">
                <div className="icon"><a href="">{vector()}</a></div>
                <div className="icon"><a href="">{Heart()}</a></div>
                <div className="icon"><a href="">{UserCircle()}</a></div>
                <div className="icon"><a href="">{ShoppingCart()}</a></div>
              </section>
            </div>
            
            <hr></hr>

            <section className="links">
              <a href="">TODAS CATEGORIAS</a>
              <a href="">SUPERMERCADO</a>
              <a href="">LIVROS</a>
              <a href="">MODA</a>
              <a href="">LANÇAMENTOS</a>
              <a href="">OFERTAS DO DIA</a>
              <section className="icon">
                <a href="">
                  {crown()}
                ASSINATURA</a>
              </section>
            </section>
          </nav>
        </header>
        
        <section className="content">

          <img src="img/banner.png" className="banner"></img>

          <section className="category">

            <section className="card">
              <div className="imgCategory">
                <a href="">{pc()}</a>
              </div>
              <h1>Tecnologia</h1>
            </section>
            <section className="card">
              <div className="imgCategory">
                {supermercado()}
              </div>
              <h1>Supermercado</h1>
            </section>
            <section className="card">
              <div className="imgCategory">
                {whiskey()}
              </div>
              <h1>Bebidas</h1>
            </section>
            <section className="card">
              <div className="imgCategory">
                {ferramentas()}
              </div>
              <h1>Ferramentas</h1>
            </section>
            <section className="card">
              <div className="imgCategory">
                {saude()}
              </div>
              <h1>Saúde</h1>
            </section>
            <section className="card">
              <div className="imgCategory">
                {esportes()}
              </div>
              <h1>Esportes e Fitness</h1>
            </section>
            <section className="card">
              <div className="imgCategory">
                {moda()}
              </div>
              <h1>Moda</h1>
            </section>

          </section>
          
          <h2 className="title">Produtos relacionados</h2>

          <section className="topics">
              <a href="">CELULAR</a>
              <a href="">ACESSÓRIOS</a>
              <a href="">TABLETS</a>
              <a href="">NOTEBOOKS</a>
              <a href="">TVS</a>
              <a href="">VER TODOS</a>
          </section>
          
          <section className="products">

            <section className="cards">

              <section className="card">
                <section className="cont">
                  <img src="img/"></img>
                  <h2 className="nameProduct">Name</h2>
                  <h1 className="valueTrue">Valor sem desconto</h1>
                  <h1 className="valueFinal">Valor a vista</h1>
                  <h1 className="installments">Parcelas</h1>
                  <h1 className="frete">Frete grátis</h1>
                  <button className="btn">COMPRAR</button>
                </section>
              </section>

            </section>

          </section>

          <section className="partners">

            <section className="card">
              <h2>Parceiros</h2>
              <h1>loren</h1>
              <button>Confira</button>
            </section>

            <section className="card">
              <h2>Parceiros</h2>
              <h1>loren</h1>
              <button>Confira</button>
            </section>

          </section>

          <h2 className="title">Produtos relacionados</h2>
          <h1>Ver todos</h1>

          <section className="products-related">

          <section className="card">
              <h2>Produtos</h2>
              <h1>loren</h1>
              <button>Confira</button>
            </section>

            <section className="card">
              <h2>Produtos</h2>
              <h1>loren</h1>
              <button>Confira</button>
            </section>

          </section>

          <section className="brands">
            <h1>Navegue por marcas</h1>

            <section className="icons">
              <section className="icon">
                <img src="img/logo.png"></img>
              </section>
              <section className="icon">
                <img src="img/logo.png"></img>
              </section>
              <section className="icon">
                <img src="img/logo.png"></img>
              </section>
              <section className="icon">
                <img src="img/logo.png"></img>
              </section>
              <section className="icon">
                <img src="img/logo.png"></img>
              </section>
            </section>
          </section>

          <footer>
            
            <section className="footer">
              <section className="about">
                <h1 className="">Sobre nós</h1>
                <h2>CONHEÇA</h2>
                <h2>COMO COMPRAR</h2>
                <h2>INDICAÇÃO E DESCONTO</h2>

                <img src="img/facebook.png" className="iconSocial"></img>
                <img src="img/instagram.png" className="iconSocial"></img>
                <img src="img/youtube.png" className="iconSocial"></img>

              </section>
              <section className="information">
                <h1 className="">INFORMAÇÕES ÚTEIS</h1>
                <h2>FALE CONOSCO</h2>
                <h2>DÚVIDAS</h2>
                <h2>PRAZOS DE ENTREGA</h2>
                <h2>FORMAS DE PAGAMENTO</h2>
                <h2>POLÍTICA DE PRIVACIDADE</h2>
                <h2>TROCAS E DEVOLUÇÕES</h2>
              </section>

              <section className="payment">
                <h1 className="">FORMAS DE PAGAMENTO</h1>

                <section className="img">
                  <img src="img/Group 1351.png" className="imgPayment"></img>
                  <img src="img/elo.png" className="imgPayment"></img>
                  <img src="img/alelo.png" className="imgPayment"></img>
                  <img src="img/dinners.png" className="imgPayment"></img>
                  <img src="img/ifood.png" className="imgPayment"></img>
                  <img src="img/mastercard.png" className="imgPayment"></img>
                  <img src="img/pix.png" className="imgPayment"></img>
                  <img src="img/amex.png" className="imgPayment"></img>
                  <img src="img/ticket.png" className="imgPayment"></img>
                  <img src="img/sodexo.png" className="imgPayment"></img>
                </section>
              </section>

              <section className="register">
                <h1>CADASTRE-SE E RECEBA NOSSAS</h1>
                <h2>NOVIDADES E PROMOÇÕES</h2>

                <h3>lorem</h3>

                <input type="text" placeholder="SEU E-MAIL" className="input"></input>
                <button>OK</button>
              </section>

            </section>

            <hr></hr>

            <section className="copyright">
              <h1>COPYRIGHT</h1>
              
              <section className="img">
                <img src="img/econverse.png" className="company"></img>
                <img src="img/vtex.png" className="company"></img>
              </section>

            </section>
          </footer>
        </section>


      </main>
    </div>
  );
}

export default App;
