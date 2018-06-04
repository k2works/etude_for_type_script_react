import * as React from "react";
import * as Media from "react-bootstrap/lib/Media";

const About: React.SFC = () => {
    const thumbnail = "https://placehold.jp/171x180.png";

    return (
        <div>
            {mediaObject(thumbnail)}
            {mediaObject2(thumbnail)}
            {mediaObject3(thumbnail)}
        </div>
    );
};

const mediaObject = (thumbnail: string) => {
return (
    <div>
        <Media>
            <Media.Left>
                <img width={64} height={64} src={thumbnail} alt="thumbnail" />
            </Media.Left>
            <Media.Body>
                <Media.Heading>Media Heading</Media.Heading>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
            </Media.Body>
        </Media>
        <Media>
            <Media.Left>
                <img width={64} height={64} src={thumbnail} alt="thumbnail" />
            </Media.Left>
            <Media.Body>
                <Media.Heading>Media Heading</Media.Heading>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src={thumbnail} alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>Nested Media Heading</Media.Heading>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
                            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </Media.Body>
                </Media>
            </Media.Body>
        </Media>
        <Media>
            <Media.Body>
                <Media.Heading>Media Heading</Media.Heading>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
            </Media.Body>
            <Media.Right>
                <img width={64} height={64} src={thumbnail} alt="thumbnail" />
            </Media.Right>
        </Media>
        <Media>
            <Media.Left>
                <img width={64} height={64} src={thumbnail} alt="thumbnail" />
            </Media.Left>
            <Media.Body>
                <Media.Heading>Media Heading</Media.Heading>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
            </Media.Body>
            <Media.Right>
                <img width={64} height={64} src={thumbnail} alt="thumbnail" />
            </Media.Right>
        </Media>
    </div>
)
};

const mediaObject2 = (thumbnail: string) => {
    return (
        <div>
            <Media>
                <Media.Left align="top">
                    <img width={64} height={64} src={thumbnail} alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>Top aligned media</Media.Heading>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                    </p>
                </Media.Body>
            </Media>
            <Media>
                <Media.Left align="middle">
                    <img width={64} height={64} src={thumbnail} alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>Middle aligned media</Media.Heading>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                    </p>
                </Media.Body>
            </Media>
            <Media>
                <Media.Left align="bottom">
                    <img width={64} height={64} src={thumbnail} alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>Bottom aligned media</Media.Heading>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                    </p>
                </Media.Body>
            </Media>
        </div>
    );
}

const mediaObject3 = (thumbnail: string) => {
    return (
        <div>
            <Media.List>
                <Media.ListItem>
                    <Media.Left>
                        <img width={64} height={64} src={thumbnail} alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>Media heading</Media.Heading>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis.
                        </p>

                        <Media>
                            <Media.Left>
                                <img width={64} height={64} src={thumbnail} alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>Nested media heading</Media.Heading>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                    scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
                                    in vulputate at, tempus viverra turpis.
                                </p>

                                <Media>
                                    <Media.Left>
                                        <img
                                            width={64}
                                            height={64}
                                            src={thumbnail}
                                            alt="thumbnail"
                                        />
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>Nested media heading</Media.Heading>
                                        <p>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque ante sollicitudin commodo. Cras purus odio,
                                            vestibulum in vulputate at, tempus viverra turpis.
                                        </p>
                                    </Media.Body>
                                </Media>
                            </Media.Body>
                        </Media>

                        <Media>
                            <Media.Left>
                                <img width={64} height={64} src={thumbnail} alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>Nested media heading</Media.Heading>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                    scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
                                    in vulputate at, tempus viverra turpis.
                                </p>
                            </Media.Body>
                        </Media>
                    </Media.Body>
                </Media.ListItem>
            </Media.List>
        </div>
    )
}

export default About;
