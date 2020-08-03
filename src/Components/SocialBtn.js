import React from 'react';
import { Button } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const SocialBtn = (props) => {
    if (props.BtnText === "Fb") return (
        <div>
            <a className="btnLink" href={props.link}> <Button className="sociallBtn" style={{ backgroundColor: "#3b5998" }}><FacebookIcon className="logoIcon" ></FacebookIcon></Button></a>
        </div >
    ); if (props.BtnText === "Ln") return (
        <div>
            <a className="btnLink" href={props.link}><Button className="sociallBtn" style={{ backgroundColor: "#2867B2" }}> <LinkedInIcon className="logoIcon" ></LinkedInIcon></Button></a>
        </div >
    ); if (props.BtnText === "Tw") return (
        <div>
            <a className="btnLink" href={props.link}><Button className="sociallBtn" style={{ backgroundColor: "#00acee" }}> <TwitterIcon className="logoIcon" ></TwitterIcon></Button></a>
        </div>
    );
}

export default SocialBtn;