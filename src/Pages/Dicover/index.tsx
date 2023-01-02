import './index.scss'
import {Fade} from "react-awesome-reveal";
import {Slide} from "react-awesome-reveal";

export const Discover: React.FC<{}> = props => {
    return (
        <>
            <div className="discoverContent">
                <Slide direction={"left"} delay={300}>
                    <div className="discoverText">
                        <hr/>
                        <h1>Discover new sens</h1>
                        <p>The Car Seat is designed to be a perfect fit for your child. It’s made of a durable,
                            easy-to-clean material that’s also washable. The seat is adjustable, so you can customize it
                            to
                            fit your height, gender, and weight. You can even remove the seat and use it as a backpack
                            or
                            bag. In addition to being a great fit, the Car Seat can be used in multiple ways</p>
                    </div>
                </Slide>
                <Fade delay={300} cascade
                      style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <div className="discoverCover"/>
                </Fade>
            </div>

        </>
    );
};