import React from 'react';
import SocialBtn from './SocialBtn';
import Image from 'react-bootstrap/Image';
import StarRateIcon from '@material-ui/icons/StarRate';
const FrameHeader = ({ props }) => {
    return (
        <div className='frameHeader'>
            <Image className='logo' src={props.logo} alt="Logo url broken" thumbnail />
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
                <div className='headerLine3'>{props.industry}{" "}|{" "}{props.type}{" "}|{" "}{props.companySize}{" "}|{" "}{props.rating}
                    <StarRateIcon
                        style={{
                            position: "relative", top: "-1px"
                        }} fontSize="small" />
                    {/* <svg height="15" width="15" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path style={{ fill: "#7b91b1" }} transform="scale(1.33, 1.33)" d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
                    </svg> */}
                </div>
            </div>

        </div>
    );
};
export default FrameHeader;
