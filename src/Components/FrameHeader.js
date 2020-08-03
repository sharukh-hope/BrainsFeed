import React from 'react';
import SocialBtn from './SocialBtn';
import Image from 'react-bootstrap/Image';
const FrameHeader = ({ props }) => {
    return (
        <div className='frameHeader'>
            <div className='headerText'>
                <div className='headerLine1'>
                    <h2>{props.company_name}</h2>
                    {props.linkedinUrl ? (<SocialBtn BtnText='Ln' link={props.linkedinUrl} />) : (<div></div>)}
                    {props.twitterUrl ? (<SocialBtn BtnText='Tw' link={props.twitterUrl} />) : (<div></div>)}
                    {props.facebookUrl ? (<SocialBtn BtnText='Fb' link={props.facebookUrl} />) : (<div></div>)}
                </div>
                <div className='headerLine2'>
                    <h4>{props.title_}</h4>
                </div>
                <div className='headerLine3'>{props.type}{" "}|{" "}{props.companySize}</div>
            </div>
            <Image className='logo' src={props.logo} thumbnail />
        </div>
    );
};
export default FrameHeader;
