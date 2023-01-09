import './index.scss'
import telegram from '../../media/icons/telegram.svg'
import insta from '../../media/icons/insta.svg'
import twitter from '../../media/icons/twitter.svg'
import right from '../../media/pictures/contact1Cover.svg'
import up from '../../media/pictures/contacts2Cover.svg'
import left from '../../media/pictures/contacts3Cover.svg'
import {Fade} from "react-awesome-reveal";
import {Slide} from "react-awesome-reveal";


export const Contacts: React.FC<{}> = props => {
    return (
        <>
            <div className="contactsContent">
                <Slide triggerOnce direction={'left'} delay={300}>
                    <div className="contactsText">
                        <hr/>
                        <h1>Contacts</h1>
                        <p>address: Sweden, Stokholm, 31 avenue Mount street <br/> phone: (292) 653 - 24 -
                            92 <br/> mail:
                            rgthardkor@gmail.com</p>
                        <div className="socialLinks">
                            <a className="telegramLink" href="https://t.me/AlexRGT1">
                                <img src={telegram} alt="teleg"/>
                            </a>

                            <a className="instaLink">
                                <img src={insta} alt="insta"/>
                            </a>

                            <a className="twitterLink">
                                <img src={twitter} alt="twitter"/>
                            </a>

                        </div>
                    </div>
                </Slide>


                <Fade triggerOnce className="contactsCover" style={{marginRight: '5%', marginLeft: "auto"}} delay={300}
                      duration={2000}>
                    <div className="contactsCover">
                        <img className="up" src={up} alt="up"/>
                        <div style={{display: 'flex'}}>
                            <img className="left" src={left} alt="left"/>
                            <img className="right" src={right} alt="right"/>
                        </div>

                    </div>
                </Fade>


            </div>
        </>
    );
};