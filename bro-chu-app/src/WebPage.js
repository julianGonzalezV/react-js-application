import React, { Component } from 'react';

class WebPage extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
      <div id="skipnav"><a href="#maincontent">Skip to main content</a></div>

  <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
      <div className="container">

          <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
              </button>
              <div >
                <table>
                  <thead>
                    <tr>
                      <th>
                          <img className="img-responsive" src="images/dove-100.png" alt="" />
                      </th>
                      <th>
                          <a className="navbar-brand" href="#page-top"> - Iglesia de los Hermanos </a>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
          </div>


          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                  <li className="hidden">
                      <a href="#page-top"></a>
                  </li>
                  <li className="page-scroll">
                      <a href="#portfolio">Eventos</a>
                  </li>
                  <li className="page-scroll">
                      <a href="#about">Acerca de la Iglesia</a>
                  </li>
                  <li className="page-scroll">
                      <a href="#contact">Contáctanos</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>

  <header>
      <div className="container" id="maincontent" tabindex="-1">
          <div className="row">
              <div className="col-lg-12">
                  <img className="img-responsive" src="images/Bible_rack.png" alt="" />
                  <div className="intro-text">
                      <h2>Iglesia de los Hermanos - Itagui (Antioquia)</h2>
                      <span className="skills">Dios-Padre-Amor-Paz</span>
                  </div>
              </div>
          </div>
      </div>
  </header>

  <section id="portfolio">
      <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <h2>Eventos</h2>
                  <hr className="star-primary" />
              </div>
          </div>
          <div className="row">
              <div className="col-sm-4 portfolio-item">
                  <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                      <div className="caption">
                          <div className="caption-content">
                              <i className="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="images/portfolio/Group-Youths-Lrg.jpg" className="img-responsive" alt="Cabin" />
                  </a>
              </div>
              <div className="col-sm-4 portfolio-item">
                  <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                      <div className="caption">
                          <div className="caption-content">
                              <i className="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="images/portfolio/children.jpg" className="img-responsive" alt="Slice of cake" />
                  </a>
              </div>
              <div className="col-sm-4 portfolio-item">
                  <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                      <div className="caption">
                          <div className="caption-content">
                              <i className="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="images/portfolio/class1.jpg" className="img-responsive" alt="Circus tent" />
                  </a>
              </div>
          </div>
      </div>
  </section>

  <section className="success" id="about">
      <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <h2>Conoce a la Iglesia</h2>
                  <hr className="star-primary" />
              </div>
          </div>
          <div className="row">
              <div className="col-lg-4 col-lg-offset-2">
                  <p>En el año de 1974 Ken Solomon  y su familia se instalan en Medellín. Ya es en 1976 que es fundada la primera iglesia en campo Valdéz.</p>
                  <p>Después de 10 años, en 1986, el Pastor Darío Tobón junto con su Familia comienzan la Obra en el barrio Ferrara. </p>



              </div>
              <div className="col-lg-4">
                <p>11 años después, en 1997, Marcelo y Adriana los que ahora conocemos como Pastores, pero que en esa época eran Misioneros, se hacen responsables de la iglesia en Ferrara.</p>
                <h4>¿ Cierto que es interesante esta grandiosa experiencia ?</h4> <p>Pues no queremos lo leas sino que lo veas!!! a través de los siguientes Videos:</p>
              </div>
              <div className="col-lg-8 col-lg-offset-2 text-center">
                  <a target="_blank" href="https://www.youtube.com/watch?v=ovE2SqASqHI" className="btn btn-lg btn-outline">
                      <i className="fa fa-download"></i> Video #1
                  </a>
                  <a target="_blank" href="https://www.youtube.com/watch?v=VvijtqNrzJc" className="btn btn-lg btn-outline">
                      <i className="fa fa-download"></i> Video #2
                  </a>
              </div>
          </div>
      </div>
  </section>


  <section id="contact">
      <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <h3>Contáctanos, Déjanos saber de ti</h3>
                  <hr className="star-primary" />
              </div>
          </div>
          <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                  {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.
                 The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                  <form name="sentMessage" id="contactForm" novalidate>
                      <div className="row control-group">
                          <div className="form-group col-xs-12 floating-label-form-group controls">
                              <label for="name">Nombres y apellidos</label>
                              <input type="text" className="form-control" placeholder="Nombres y apellidos" id="name" required data-validation-required-message="Por favor ingresa tu nombre completo" />
                              <p className="help-block text-danger"></p>
                          </div>
                      </div>
                      <div className="row control-group">
                          <div className="form-group col-xs-12 floating-label-form-group controls">
                              <label for="email">Correo Electrónico</label>
                              <input type="email" className="form-control" placeholder="Correo Electrónico" id="email" required data-validation-required-message="Por favor ingresa tu correo" />
                              <p className="help-block text-danger"></p>
                          </div>
                      </div>
                      <div className="row control-group">
                          <div className="form-group col-xs-12 floating-label-form-group controls">
                              <label for="phone">Teléfono/Celular</label>
                              <input type="tel" className="form-control" placeholder="Teléfono/Celular" id="phone" required data-validation-required-message="Por favor ingresa tu tel/celular" />
                              <p className="help-block text-danger"></p>
                          </div>
                      </div>
                      <div className="row control-group">
                          <div className="form-group col-xs-12 floating-label-form-group controls">
                              <label for="message">Escribe tu mensaje</label>
                              <textarea rows="5" className="form-control" placeholder="Escribe tu mensaje" id="message" required data-validation-required-message="Déjanos tu mensaje "></textarea>
                              <p className="help-block text-danger"></p>
                          </div>
                      </div>
                      <br/>
                      <div id="success"></div>
                      <div className="row">
                          <div className="form-group col-xs-12">
                              <button type="submit" className="btn btn-success btn-lg">Clic para enviar</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </section>

  <footer className="text-center">
      <div className="footer-above">
          <div className="container">
              <div className="row">
                  <div className="footer-col col-md-4">
                      <h3>Ubicación de la Iglesia</h3>
                      <p/>Cra. 52d #66-110, Itagüi, Antioquia, Colombia
                          <br/>Te vas por todo el centro de la Moda hacia el parque del artista y justo media cuadra antes de inciar la pendiente hacia Calatrava....si allí estamos!
                  </div>
                  <div className="footer-col col-md-4">
                      <h3>Síquenos en :</h3>
                      <ul className="list-inline">
                          <li>
                              <a href="#" className="btn-social btn-outline"><span className="sr-only">Facebook</span><i className="fa fa-fw fa-facebook"></i></a>
                          </li>
                          <li>
                              <a href="#" className="btn-social btn-outline"><span className="sr-only">Twitter</span><i className="fa fa-fw fa-twitter"></i></a>
                          </li>
                      </ul>
                  </div>
                  <div className="footer-col col-md-4">
                      <h3>Te esperamos!</h3>
                      <br/>Recuerda que Dios te está buscando, solo es tu disposición y deseo de recibirle.<p/>
                  </div>
              </div>
          </div>
      </div>
      <div className="footer-below">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      Copyright &copy; Inglesia de los Hermanos - Itagui  2017
                  </div>
              </div>
          </div>
      </div>
  </footer>

  <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
      <a className="btn btn-primary" href="#page-top">
          <i className="fa fa-chevron-up"></i>
      </a>
  </div>

  <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                  <div className="rl">
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                      <div className="modal-body">
                          <h2>Project Title</h2>
                          <hr className="star-primary" />
                          <img src="images/portfolio/cabin.png" className="img-responsive img-centered" alt="" / >
                          <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                          <ul className="list-inline item-details">
                              <li>Client:
                                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
                                  </strong>
                              </li>
                              <li>Date:
                                  <strong><a href="http://startbootstrap.com">April 2014</a>
                                  </strong>
                              </li>
                              <li>Service:
                                  <strong><a href="http://startbootstrap.com">Web Development</a>
                                  </strong>
                              </li>
                          </ul>
                          <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                  <div className="rl">
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                      <div className="modal-body">
                          <h2>Project Title</h2>
                          <hr className="star-primary" />
                          <img src="images/portfolio/cake.png" className="img-responsive img-centered" alt="" />
                          <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                          <ul className="list-inline item-details">
                              <li>Client:
                                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
                                  </strong>
                              </li>
                              <li>Date:
                                  <strong><a href="http://startbootstrap.com">April 2014</a>
                                  </strong>
                              </li>
                              <li>Service:
                                  <strong><a href="http://startbootstrap.com">Web Development</a>
                                  </strong>
                              </li>
                          </ul>
                          <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                  <div className="rl">
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                      <div className="modal-body">
                          <h2>Project Title</h2>
                          <hr className="star-primary" />
                          <img src="images/portfolio/circus.png" className="img-responsive img-centered" alt="" />
                          <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                          <ul className="list-inline item-details">
                              <li>Client:
                                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
                                  </strong>
                              </li>
                              <li>Date:
                                  <strong><a href="http://startbootstrap.com">April 2014</a>
                                  </strong>
                              </li>
                              <li>Service:
                                  <strong><a href="http://startbootstrap.com">Web Development</a>
                                  </strong>
                              </li>
                          </ul>
                          <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                  <div className="rl">
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                      <div className="modal-body">
                          <h2>Project Title</h2>
                          <hr className="star-primary" />
                          <img src="images/portfolio/game.png" className="img-responsive img-centered" alt="" />
                          <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                          <ul className="list-inline item-details">
                              <li>Client:
                                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
                                  </strong>
                              </li>
                              <li>Date:
                                  <strong><a href="http://startbootstrap.com">April 2014</a>
                                  </strong>
                              </li>
                              <li>Service:
                                  <strong><a href="http://startbootstrap.com">Web Development</a>
                                  </strong>
                              </li>
                          </ul>
                          <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                  <div className="rl">
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                      <div className="modal-body">
                          <h2>Project Title</h2>
                          <hr className="star-primary" />
                          <img src="images/portfolio/safe.png" className="img-responsive img-centered" alt="" />
                          <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                          <ul className="list-inline item-details">
                              <li>Client:
                                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
                                  </strong>
                              </li>
                              <li>Date:
                                  <strong><a href="http://startbootstrap.com">April 2014</a>
                                  </strong>
                              </li>
                              <li>Service:
                                  <strong><a href="http://startbootstrap.com">Web Development</a>
                                  </strong>
                              </li>
                          </ul>
                          <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                  <div className="rl">
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                      <div className="modal-body">
                          <h2>Project Title</h2>
                          <hr className="star-primary" />
                          <img src="images/portfolio/submarine.png" className="img-responsive img-centered" alt="" />
                          <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                          <ul className="list-inline item-details">
                              <li>Client:
                                  <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
                                  </strong>
                              </li>
                              <li>Date:
                                  <strong><a href="http://startbootstrap.com">April 2014</a>
                                  </strong>
                              </li>
                              <li>Service:
                                  <strong><a href="http://startbootstrap.com">Web Development</a>
                                  </strong>
                              </li>
                          </ul>
                          <button id="btnSubmit" type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
      </div>
      );
  }

};
export default WebPage;
