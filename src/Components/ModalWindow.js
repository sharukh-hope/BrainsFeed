import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import SocialBtn from './SocialBtn';
import Image from 'react-bootstrap/Image';
import StarRateIcon from '@material-ui/icons/StarRate';
import Badge from 'react-bootstrap/Badge';

import Geocode from "react-geocode";

const ModalWindow = ({ currentCompany }) => {
    const [coords, setCoords] = useState(["40.708964", "-74.006868"]);
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
    useEffect(() => {
        fetchGeoCode();
    }, [currentCompany]);

    const fetchGeoCode = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.mapbox.com/geocoding/v5/mapbox.places/${currentCompany.companyAddress}.json?access_token=pk.eyJ1IjoiYndoYWxlIiwiYSI6ImNrZGdndmNoeTI1ZDIzMXQ5MnB3aGZrcG8ifQ.SPFczC0gl-J9oOoLG58J4Q`).then(response => {
            response.json().then(data => setCoords([data.features[0].center[1], data.features[0].center[0]]))
        })
    }
    // console.log(coords);
    return (
        <div>
            < div className='frameHeader'>
                <Image
                    className='logo'
                    src={currentCompany.logo}
                    thumbnail
                />
                <div className='headerText'>
                    <div className='headerLine1'>
                        <h2>{currentCompany.company_name}</h2>

                    </div>
                    <div className='headerLine2'>
                        <h4>{currentCompany.title_}</h4>
                    </div>
                    <div className='headerLine3'>{currentCompany.industry}{" "}|{" "}{currentCompany.type}{" "}|{" "}{currentCompany.companySize}{" "}|{" "}{currentCompany.rating}
                        <StarRateIcon
                            style={{
                                position: "relative", top: "-1px"
                            }} fontSize="small" /></div>
                </div>

            </div >
            <hr class="solid"></hr>
            <div className="horizontalContainer">
                <div className="verticalContainer">
                    <table>
                        <tr>
                            <th className="tDivider">Access</th>
                            {(currentCompany.price == 0) ? (null) : (<th className="tDivider">Price</th>)}

                            <th>API</th>
                        </tr>
                        <tr>
                            <td className="tDivider"> {currentCompany.paid_not}</td>
                            {(currentCompany.price == 0) ? (null) : (<td className="tDivider">{currentCompany.price}</td>)}

                            <td> {currentCompany.API_Provided}</td>
                        </tr>
                    </table>
                    {currentCompany.Long_description}
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
                    <h5 className="infoHeader">Email:</h5>
                    {currentCompany.email}
                    <h5 className="infoHeader">Founded:</h5>
                    {currentCompany.founded}
                    <h5 className="infoHeader">Head Quarters:</h5>
                    {currentCompany.headquarters}
                    <h5 className="infoHeader">Address:</h5>

                    {currentCompany.companyAddress}
                    <Map style={{ height: "200px", width: "100%" }} center={coords} doubleClickZoom={true} zoom={15}>

                        <Marker position={coords}>
                            <Popup>
                                {currentCompany.company_name}{"'s "}location
                                </Popup>
                        </Marker>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </Map>

                </div>

            </div>

            <div style={{ display: "flex", flexDirection: "column", marginTop: "5px" }}>

                <div className="infoBoxHolder">
                    <h5 className="infoHeader">Specialties:</h5>
                    {
                        currentCompany.specialties.map((ele, index) => {
                            return (
                                <Badge style={{ margin: "2px", padding: "9px", width: "fit-content" }} pill variant="primary">
                                    {ele}
                                </Badge>);
                        })

                    }
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className="infoBox"><h5 className="infoHeader">Data Points:</h5><div style={{ marginLeft: "2px" }}>{currentCompany.datapoints}</div></div>
                    <div className="infoBox"><h5 className="infoHeader">Geo-Coverage:</h5>
                        <div>{
                            currentCompany.Geo_coverage.map((ele, index) => {
                                return (
                                    <Badge style={{ margin: "2px", padding: "8px", width: "fit-content" }} pill variant="light">
                                        {ele}
                                    </Badge>);
                            })

                        }</div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default ModalWindow;