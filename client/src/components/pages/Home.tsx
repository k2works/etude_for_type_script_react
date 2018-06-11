import * as React from "react";
import {Button, Col, Jumbotron, Row, Thumbnail} from "react-bootstrap";
import * as Grid from "react-bootstrap/lib/Grid";

const Home: React.SFC = () => {
    const thumbnail = "https://placehold.jp/242x200.png";

    return  (
        <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button bsStyle="primary">Learn more</Button>
                </p>
            </Jumbotron>;

            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail src={thumbnail} alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                                <Button bsStyle="primary">Button</Button>&nbsp;
                                <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src={thumbnail} alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                                <Button bsStyle="primary">Button</Button>&nbsp;
                                <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src={thumbnail} alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                                <Button bsStyle="primary">Button</Button>&nbsp;
                                <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>;
        </div>
    );
};

export default Home;
