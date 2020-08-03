import React, { useState } from 'react';
import FrameHeader from './FrameHeader';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Modal } from 'react-bootstrap';


const CompanyFrame = ({ details, changeCurentCompany }) => {
    const [show, setShow] = useState(false);
    const [showtext, setShowtext] = useState("show more...");
    const [showimg, setShowimg] = useState(false);

    const handleClose = () => {
        setShowimg(false);
    };
    const handleMore = () => {
        setShow(true);
        setShowtext("");
    }
    const handleLess = ({ details }) => {
        setShow(false);
        setShowtext("Show more");
    }

    return (
        <div className='frame'>
            <FrameHeader props={details} />
            <div className='frameContent'>
                <div style={{ display: 'flex', flexDirection: 'column', width: "550px", justifyContent: "space-between" }}>
                    {' '}
                    <p>{details.Short_description}</p>

                    <table>
                        <tr>
                            <th>Industry</th>
                            <th>Rating</th>
                            <th className="tDivider">Access</th>
                            <th>API</th>
                        </tr>
                        <tr>
                            <td >{details.industry}</td>
                            <td style={{ fontSize: "20px" }}> {details.rating}<StarRateIcon /></td>
                            <td className="tDivider"> {details.paid_not}</td>
                            <td> {details.API_Provided}</td>
                        </tr>
                    </table>
                    <div>
                        {
                            details.specialties.map((ele, index) => {

                                if (!show)
                                    while (index < 3)
                                        return (<>
                                            <Badge style={{ margin: "2px" }} pill variant="light">
                                                {ele}
                                            </Badge> </>);
                                else
                                    return (<Badge style={{ margin: "2px" }} pill variant="light">
                                        {ele}
                                    </Badge>);

                            })

                        } {!show ? (< text className="showText" onClick={handleMore}>{showtext}</text>) : (
                            <text className="showText" onClick={handleLess}>{showtext}</text>
                        )}
                    </div>
                    <div style={{ width: "100%" }}>
                        <Button
                            onClick={() => changeCurentCompany(details)}
                            style={{ width: "100%" }}
                        >
                            Learn More
                        </Button>
                    </div>

                </div>
                <img className='screenShot' onClick={() => setShowimg(true)} src={details.screenshot} />
                <Modal size="xl" centered show={showimg} onHide={handleClose}>
                    <Modal.Header closeButton ><h2>Home page of {details.company_name} </h2></Modal.Header>
                    <Modal.Body>
                        <img className='screenShotLarge' src={details.screenshot} />
                    </Modal.Body>

                </Modal>
            </div>
        </div >
    );


};

export default CompanyFrame;
