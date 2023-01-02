import './index.scss'
import {Slide} from "react-awesome-reveal";
import {Fade} from "react-awesome-reveal";

export const Exclusivity: React.FC<{  }> = props => {
    return (
        <>
            <div className="exclusivityContent">
                <Fade style={{marginLeft:'auto', marginRight:'auto'}} delay={300} duration={2000}>
                    <div className="exclusivityCover"/>
                </Fade>

                <Slide delay={300} direction={'right'}>
                    <div className="exclusivityText">
                        <hr/>
                        <h1>Exclusivity</h1>
                        <p>The Car Seat is designed to be a perfect fit for your child. It’s made of a durable,
                            easy-to-clean material that’s also washable. The seat is adjustable, so you can customize it to
                            fit your height, gender, and weight. You can even remove the seat and use it as a backpack or
                            bag. In addition to being a great fit, the Car Seat can be used in multiple ways</p>
                    </div>
                </Slide>



            </div>
        </>
    );
};