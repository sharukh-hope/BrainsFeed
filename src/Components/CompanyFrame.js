import React, { useState } from 'react';
import FrameHeader from './FrameHeader';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import StarRateIcon from '@material-ui/icons/StarRate';



const CompanyFrame = ({ details, changeCurentCompany }) => {
    const [show, setShow] = useState(false);
    const [showtext, setShowtext] = useState("show more...");
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
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {' '}
                    <p>{details.Short_description}</p>
                    <div className='importantInfo'>
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
                            )}</div>
                        <div>
                            <Button
                                onClick={() => changeCurentCompany(details)}
                                style={{ marginTop: '30px' }}
                            >
                                Learn More
                        </Button>
                        </div>
                    </div>
                </div>
                <a href={details.website_}><img className='screenShot' src={details.screenshot} /></a>
            </div>
        </div >
    );


};

export default CompanyFrame;
