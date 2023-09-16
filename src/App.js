import React, { useEffect, useState, useRef } from "react";
import { logo, crown, ShieldCheck, Truck, card, search, vector, Heart, UserCircle, ShoppingCart, banner, pc, supermercado, whiskey, ferramentas, saude, esportes, moda, econverse, vtex, face, insta, yt, visa, elo, alelo, diners, mastercard, ifood, pix, american, ticket, sodexo, left, right } from './img.js';

//json

//import "./Modal.js";

import Modal from './Modal.js';
import useModal from './useModal.js';

function App() {
  const { isShowing, toggle, selectProduct } = useModal();

  const carousel = useRef(null);

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

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
                <button type="button">{search()}</button>
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


        <section className="bannerSize">
          <div className="image">
            <img src="img/banner.png" className="banner"></img>
          </div>
          <div className="titleBanner">
            <h1>Venha conhecer nossas <br></br>promoções</h1>
            <h2>50% Off nos produtos </h2>
            <button className="button">Ver produto</button>
          </div>
        </section>

        <section className="content">

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

          <div className='hr'>
            <hr></hr>
            <h2 className="title">Produtos relacionados</h2>
            <hr></hr>
          </div>

          <section className="topics">
            <a href="">CELULAR</a>
            <a href="">ACESSÓRIOS</a>
            <a href="">TABLETS</a>
            <a href="">NOTEBOOKS</a>
            <a href="">TVS</a>
            <a href="">VER TODOS</a>
          </section>

          <section className="products" ref={carousel}>
            <section className="cards">

              <div className="buttons">
                <button onClick={handleLeftClick}>{left()}</button>
                <button onClick={handleRightClick}>{right()}</button>
              </div>

              {data.map((item, index) => (
                <section className="card">
                  <section className="cont">
                    <img src={item.photo}></img>
                    <h2 className="nameProduct">{item.productName}</h2>
                    <section className="value">
                      <h1 className="valueTrue">R$ 30,90</h1>
                      <h1 className="valueFinal">R$ {item.price}</h1>
                    </section>
                    <h1 className="installments">ou 2x de R$ 49,95 sem juros</h1>
                    <h1 className="frete">Frete grátis</h1>

                    <button className="btn" onClick={() => toggle(item)}>
                      COMPRAR
                    </button>
                  </section>
                </section>

              ))}

            </section>

          </section>
        
          <Modal isShowing={isShowing} hide={() => toggle()} value={selectProduct} />

          <section className="partners">

            <section className="card">
              <img src="img/image.png"  className="background"></img>
              <div className='cardContent'>
                <h2>Parceiros</h2>
                <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                <button className='btn' id='button'>CONFIRA</button>
              </div>
            </section>

            <section className="card">
              <img src="img/image.png"  className="background"></img>
              <div className="cardContent">
                <h2>Parceiros</h2>
                <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                <button className='btn' id='button'>CONFIRA</button>
              </div>
            </section>

          </section>

          <section className='title-products-related'>
            <div className='hr'>
              <hr></hr>
              <h2 className="title">Produtos relacionados</h2>
              <hr></hr>
            </div>
            <h1>Ver todos</h1>
          </section>

          <section className="products-related">

            <section className="card">
              <img src="img/image.png"  className="background"></img>
              <div className='cardContent'>
                <h2>Produtos</h2>
                <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                <button className='btn' id='button'>CONFIRA</button>
              </div>
            </section>

            <section className="card">
              <img src="img/image.png"  className="background"></img>
              <div className='cardContent'>
                <h2>Produtos</h2>
                <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                <button className='btn' id='button'>CONFIRA</button>
              </div>
            </section>

          </section>

          <section className="brands">
            <h1>Navegue por marcas</h1>

            <section className="icons">
              <section className="icon">
                {logo()}
              </section>
              <section className="icon">
                {logo()}
              </section>
              <section className="icon">
                {logo()}
              </section>
              <section className="icon">
                {logo()}
              </section>
              <section className="icon">
                {logo()}
              </section>
            </section>
          </section>
        </section>

        <footer>

          <section className="footer">
            <section className="about">
              <div className='title'>
                <h1 className="">Sobre nós</h1>
              </div>

              <div className='cont'>
                <h2>CONHEÇA</h2>
                <h2>COMO COMPRAR</h2>
                <h2>INDICAÇÃO E DESCONTO</h2>
              </div>

              <div className='icons'>
                <div className='social'>{face()}</div>
                <div className='social'>{insta()}</div>
                <div className='social'>{yt()}</div>
              </div>
            </section>
            <section className="information">
              <div className='title'>
                <h1 className="">INFORMAÇÕES ÚTEIS</h1>
              </div>

              <div className='cont'>
                <h2>FALE CONOSCO</h2>
                <h2>DÚVIDAS</h2>
                <h2>PRAZOS DE ENTREGA</h2>
                <h2>FORMAS DE PAGAMENTO</h2>
                <h2>POLÍTICA DE PRIVACIDADE</h2>
                <h2>TROCAS E DEVOLUÇÕES</h2>
              </div>
            </section>

            <section className="payment">
              <div className='title'>
                <h1 className="">FORMAS DE PAGAMENTO</h1>
              </div>

              <section className="img">
                <div className='imgPayment'>{visa()}</div>
                <div className='imgPayment'>{elo()}</div>
                <div className='imgPayment'>{alelo()}</div>
                <div className='imgPayment'>{diners()}</div>
                <div className='imgPayment'>{ifood()}</div>
                <div className='imgPayment'>{mastercard()}</div>
                <div className='imgPayment'>{pix()}</div>
                <div className='imgPayment'>{american()}</div>
                <div className='imgPayment'>{ticket()}</div>
                <div className='imgPayment'>{sodexo()}</div>

              </section>
            </section>

            <section className="register">
              <div className='cont'>
                <div className='title'>
                  <h1>CADASTRE-SE E RECEBA NOSSAS</h1>
                  <h2>NOVIDADES E PROMOÇÕES</h2>
                </div>

                <div className='desc'>
                  <h3>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</h3>
                </div>

                <div className='btn'>
                  <input type="text" placeholder="SEU E-MAIL" className="input"></input>
                  <button>OK</button>
                </div>
              </div>
            </section>

          </section>

          <hr></hr>

          <section className="copyright">
            <h1>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
              É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</h1>

            <section className="img">
              <div className='imgEconverse'>
                {econverse()}
              </div>
              <div className='imgVtex'>
                {vtex()}
              </div>
            </section>

          </section>
        </footer>
      </main>
    </div >
  );
}
export default App;
