import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import SocialBtn from './SocialBtn';
import Image from 'react-bootstrap/Image';
import StarRateIcon from '@material-ui/icons/StarRate';
import Badge from 'react-bootstrap/Badge';
import ShowMoreText from 'react-show-more-text';
// import Geocode from "react-geocode";
// Geocode.setApiKey("*****");
// Geocode.fromAddress("Eiffel Tower").then(
//     response => {
//         const { lat, lng } = response.results[0].geometry.location;
//         console.log(lat, lng);
//     },
//     error => {
//         console.error(error);
//     }
// );

const ModalWindow = ({ currentCompany }) => {
    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    }
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
        <div>
            < div className='frameHeader'>
                <div className='headerText'>
                    <div className='headerLine1'>
                        <h2>{currentCompany.company_name}</h2>

                    </div>
                    <div className='headerLine2'>
                        <h4>{currentCompany.title_}</h4>
                    </div>
                    <div className='headerLine3'>{currentCompany.type}{" "}|{" "}{currentCompany.companySize}</div>
                </div>
                <Image
                    className='logo'
                    src={currentCompany.logo}
                    thumbnail
                />
            </div >
            <hr class="solid"></hr>
            <div className="horizontalContainer">
                <div className="verticalContainer">
                    <table>
                        <tr>
                            <th>Industry</th>
                            <th>Rating</th>
                            <th className="tDivider">Access</th>
                            <th>API</th>
                        </tr>
                        <tr>
                            <td >{currentCompany.industry}</td>
                            <td style={{ fontSize: "20px" }}> {currentCompany.rating}<StarRateIcon /></td>
                            <td className="tDivider"> {currentCompany.paid_not}</td>
                            <td> {currentCompany.API_Provided}</td>
                        </tr>
                    </table>
                    <ShowMoreText
                        lines={5}
                        more='Show more'
                        less='Show less'
                        anchorClass=''
                        onClick={executeOnClick}
                        width={780}
                        expanded={false}>
                        {currentCompany.Long_description}
                    </ShowMoreText>
                    <a href={currentCompany.website_} ><Image style={{ width: "100%", marginTop: "5px" }} src={currentCompany.screenshot} ></Image></a>
                </div>
                <div className="modalDetails">
                    <h5 className="infoHeader">Website:</h5>
                    <div className="horizontalContainer">
                        <a href={currentCompany.website_}>{currentCompany.website_}</a>
                        <SocialBtn
                            BtnText='Ln'
                            link={currentCompany.linkedinUrl}
                        />
                        <SocialBtn
                            BtnText='Tw'
                            link={currentCompany.twitterUrl}
                        />
                        <SocialBtn
                            BtnText='Fb'
                            link={currentCompany.facebookUrl}
                        />
                    </div>
                    <h5 className="infoHeader">Price:</h5>
                    {currentCompany.price}
                    <h5 className="infoHeader">Data Points:</h5>
                    {currentCompany.datapoints}
                    <h5 className="infoHeader">Founded:</h5>
                    {currentCompany.founded}
                    <h5 className="infoHeader">Head Quarters:</h5>
                    {currentCompany.headquarters}
                    <h5 className="infoHeader">Address:</h5>
                    <div className="mapid">
                        {currentCompany.companyAddress}
                        <Map style={{ height: "200px", width: "100%" }} center={[currentCompany.lat, currentCompany.lat]} zoom={13}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[currentCompany.lat, currentCompany.lat]}>
                                <Popup>
                                    {currentCompany.company_name}{"'s "}location
                                </Popup>
                            </Marker>
                        </Map>
                    </div>
                    <h5 className="infoHeader">Specialties:</h5>
                    {
                        currentCompany.specialties.map((ele, index) => {

                            if (!show)
                                while (index < 3)
                                    return (<>
                                        <Badge style={{ margin: "2px" }} pill variant="primary">
                                            {ele}
                                        </Badge> </>);
                            else
                                return (<Badge style={{ margin: "2px" }} pill variant="primary">
                                    {ele}
                                </Badge>);

                        })

                    } {!show ? (< text className="showText" onClick={handleMore}>{showtext}</text>) : (
                        <text className="showText" onClick={handleLess}>{showtext}</text>
                    )}</div>

            </div>
        </div>

    );
}
export default ModalWindow;