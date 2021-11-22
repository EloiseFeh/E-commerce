import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Banner = () =>
{
    return(
        <Container className="mt-5">
            <Row>
                <Col>
                    <img
                    className="d-block w-100"
                    src={
                    process.env.PUBLIC_URL + "/assets/images/ban3.jpg"
                    }
                    alt="banner"
                    />  
                </Col>
            </Row>
        </Container>
    )
}
export default Banner;