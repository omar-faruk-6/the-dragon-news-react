import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    {/* left navigation  */}
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    {/* Main contain  */}
                    <Col lg={6}>
                        <h2>Main content coming soon</h2>
                    </Col>
                    {/* right navigation  */}
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;