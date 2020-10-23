import React from 'react';
import {
    Row, Card, CardImg, CardBody, CardDeck
} from 'reactstrap';


function Staff(props) {
    return (
        <>
            <Row className="mb-5 justify-content-center">
                <CardDeck>
                    {props.members.map((item, idx) =>
                        <Card key={idx} className="text-center">
                            <CardBody>
                                <h2>{item.name}</h2>
                                <h4>{item.role}</h4>
                            </CardBody>
                            <CardImg className="border-dark" top width="100%" src={item.img} alt={item.name} />
                        </Card>
                    )}
                </CardDeck>
            </Row>
        </>
    );

}




export default Staff;

