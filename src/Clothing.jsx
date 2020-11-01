import React from "react";
import { NavLink } from "react-router-dom";

const Clothing = () => {
  return (
    <>
    
      <div className="container-fluid">
      
        <div className="row">
        <img className="main-clothing-img" src={require("../src/Image/green teas.jpg")} alt="main-img"></img>
          <div className="col-10 text-center my-5 mx-auto">
         
            <div className="row">
              <div className="col-md-4 col-12 mx-auto">
             
                <div className="card my-2">
                  <img
                    src={require("../src/logos/ajio.png")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Ajio</h5>
                    <p className="card-text">
                      Ajio is fashion focused brand which is owned by Reliance.
                    </p>

                    <NavLink to="www.ajio.com" className="btn btn-primary">
                  Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/allensolly.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Allen Solly</h5>
                    <p className="card-text">
                      Allen Solly is an Indian clothing and accessory brand.
                    </p>
                    <NavLink to="https://www.allensolly.com" className="btn btn-primary">
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/luis philippe.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Luis Philippee
                    </h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.louisphilippe.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/montecarlo.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Monte Carlo</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.montecarlo.in"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/van.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Van Heusen</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.vanheusenindia.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/peter.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Peter England
                    </h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.peterengland.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/bewakoof.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Bewakoof</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.https://www.bewakoof.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/vimal.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Vimal</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://onlyvimal.co.in/contact-us/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/oxemberg.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Oxemberg</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.oxemberg.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/trends.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Reliance Trends
                    </h5>
                    <p className="card-text"></p>

                    <NavLink
                      to="https://www.relianceretail.com/reliance-trends.html"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/Raymond.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Raymond</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.raymond.in/home"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/raymondnext.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Raymondnext</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="http://myraymond.com/home"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/park avenue.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Park Avenue</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="http://parkavenuegrooming.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/colorplus.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Color Plus</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.shoppersstop.com/brand/color-plus/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/singora.png")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Shingora</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.shingora.net/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/ethnix.png")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Ethnix</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.ethnix.in/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/raymondcostom.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Raymond Custom
                    </h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://raymondcustomtailoring.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/provogue.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Provogue</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.provogue/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/gjbaby.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">firstcry</h5>
                    <p className="card-text"></p>

                    <NavLink
                      to="https://www.firstcry.com/gj-baby/6/0/719"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/palmtree.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Palmtree</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.myntra.com/palm-tree"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/fabindia.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Fab India</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.fabindia.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/garden-vareli.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Garden vareli
                    </h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.gardenvareli.com"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/modarapido.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Moda Rapido</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.myntra.com/moda-rapido"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/blackberrys.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Blackberrys</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.blackberrys.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/spykar.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Spykar</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.https://www.spykar.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/zodiac.png")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Zodiac</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.zodiaconline.com/z/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/planetfashion.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Planetfashion
                    </h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.planetfashion.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/pantaloons.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Pantaloons</h5>
                    <p className="card-text"></p>

                    <NavLink
                      to="https://www.pantaloons.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/westside.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Westside</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.westside.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/anokhi.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Anokhi</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.anokhi.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/hrxby.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">HRX</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.hrxbrand.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/cottonking.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Cotton King</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.cottonking.com/brand/color-plus/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/flyingmachine.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Flyingmachine
                    </h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.flyingmachine.net/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/wrogn.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Wrogn</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.wrongnlife.in/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/Indianterrain.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Indian Terrain
                    </h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.indianterrain.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/luis philippe.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Luis Philippee
                    </h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.louisphilippe.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/hereandnow.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Here&Now</h5>
                    <p className="card-text"></p>

                    <NavLink
                      to="https://www.myntra.com/here-and-now/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/luxcozi.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Lux</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.luxinnerwear.com/index.php/palm-tree"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/madame.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Madame</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.glamly.com/collections/madame/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/msecret.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Msecret</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.glamly.com/collections/msecret"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/tarun.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Tarun</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.taruntahiliani.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/jainamar.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Jainamar</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.jacpl.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/globus.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Globus</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.https://www.globusfashion.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/manyavar.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Manyavar</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.manyavar.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/kforkathiyavad.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      K for Kathiyawad
                    </h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.kforkathiyawad.in/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/max.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">MAX</h5>
                    <p className="card-text"></p>

                    <NavLink
                      to="https://www.maxfashion.in/en/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/lyfestyle.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Lifestyle</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.lifestylestores.com/in/en"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/kappa.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Kappa</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.lifestylestores.com/in/en/b/kappa"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/fahrenheit.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Fahrenheit</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.fahrenheit.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/ginger.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Ginger</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.lifestylestores.com/in/en/b/ginger"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/globaldesi.png")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Globaldesi</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.globaldesi.in/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/mufti.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Mufti</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.muftijeans.in/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/sabyasachi.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Sabyasachi</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.sabyasachi.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card my-2">
                  <img
                    src={require("../src/logos/nalli.jpg")}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Nalli</h5>
                    <p className="card-text"></p>
                    <NavLink
                      to="https://www.nalli.com/"
                      className="btn btn-primary"
                    >
                      Visit Site
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
};


export default Clothing;

