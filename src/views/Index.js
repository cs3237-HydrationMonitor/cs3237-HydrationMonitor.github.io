/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Media } from "reactstrap";

// core components
// import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import Buttons from "./IndexSections/Buttons.js";
import Inputs from "./IndexSections/Inputs.js";
import CustomControls from "./IndexSections/CustomControls.js";
import Menus from "./IndexSections/Menus.js";
// import Navbars from "./IndexSections/Navbars.js";
import Tabs from "./IndexSections/Tabs.js";
import Progress from "./IndexSections/Progress.js";
import Pagination from "./IndexSections/Pagination.js";
import Pills from "./IndexSections/Pills.js";
import Labels from "./IndexSections/Labels.js";
import Alerts from "./IndexSections/Alerts.js";
import Typography from "./IndexSections/Typography.js";
import Modals from "./IndexSections/Modals.js";
import Datepicker from "./IndexSections/Datepicker.js";
import TooltipPopover from "./IndexSections/TooltipPopover.js";
import Carousel from "./IndexSections/Carousel.js";
import Icons from "./IndexSections/Icons.js";
import Login from "./IndexSections/Login.js";
import Download from "./IndexSections/Download.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        {/* <DemoNavbar /> */}
        <main ref="main">
          <Hero />
          <Container style={{marginTop: '60px'}}>
          <Row>
              <Col>
                <p style={{ fontSize: '25px', textAlign: 'center' }}>The human body is 60% water, and water plays an essential role in every bodily function. Water is essential not just for optimal day-to-day function, but ultimately for survival too. Most of us, if we’re honest, will own up to not drinking enough. To neglect hydration is to neglect your health, as often it can be severe and fatal.</p>
              </Col>
            </Row>
            <Row style={{ paddingTop: '50px' }}>
              <Col>
                <p style={{ fontSize: '25px', textAlign: 'center' }}>Minor consequences of dehydration include fatigue and foggy memory while the major consequences include possible heat injuries as well as possible development of kidney stones.</p>
              </Col>
            </Row>
            <Row style={{ paddingTop: '50px' }}>
              <Col>
                <p style={{ fontSize: '25px', textAlign: 'center' }}>Drinking enough water ensures nutrients and oxygen transport into cells. This helps one to lose weight, have a healthier skin outlook, reduce the risk of cancer, etc.</p>
              </Col>
            </Row>
            <Row style={{ paddingTop: '50px' }}>
              <Col>
                <p style={{ fontSize: '25px', textAlign: 'center' }}>Hydro is a one-stop tool aimed and assisting you in monitoring hydration levels of those you care about.</p>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", alignContent: "center", alignItems: "center", alignSelf: "center"}}>
              <Col>
                <Media src={require("../assets/img/brand/edited-bottle.png")} style={{ maxWidth: "80%" }} />
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", alignContent: "center", alignItems: "center", alignSelf: "center"}}>
              <Col>
                <Media src={require("../assets/img/brand/hydro-splash.png")} style={{ maxWidth: "80%" }} />
              </Col>
              <Col>
                <Media src={require("../assets/img/brand/hydro-home.png")} style={{ maxWidth: "80%" }} />
              </Col>
            </Row>
            <Row style={{ paddingTop: '100px' }}>
              <Col>
                <p style={{ fontSize: '25px', textAlign: 'center' }}>Using our patented prototype,
                we have tirelessly collected data and generated an Artificially Intelligent System to automatically track your
                water consumption activities.</p>
              </Col>
            </Row>
            <Row style={{ paddingTop: '50px' }}>
              <Col>
                <p style={{ fontSize: '25px', textAlign: 'center' }}>All of your personal hydration counts are recorded
                in real-time and seamlessly in our mobile app.</p>
              </Col>
            </Row>
            <Row style={{ paddingTop: '50px' }}>
              <Col>
                <p style={{ fontSize: '25px', textAlign: 'center' }}>From here you can easily see if your loved ones have been consuming
                sufficient amounts of water and maintaining their health.</p>
              </Col>
            </Row>
            <Row style={{ paddingTop: '50px' }}>
              <Col>
                <h2 className="display-2" style={{ textAlign: 'center' }}>Start using Hydro Today!</h2>
              </Col>
            </Row>
            <Row style={{ height: "400px" }}></Row>
          </Container>
          {/* <Buttons />
          <Inputs /> */}
          {/* <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section> */}
          {/* <Navbars /> */}
          {/* <section className="section section-components">
            <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row>
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>
          </section> */}
          {/* <Carousel />
          <Icons />
          <Login />
          <Download /> */}
        </main>
        {/* <CardsFooter /> */}
      </>
    );
  }
}

export default Index;
