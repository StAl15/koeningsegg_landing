import './index.scss'
import {Fade} from "react-awesome-reveal";
import {Slide} from "react-awesome-reveal";

export const Quality: React.FC<{}> = props => {
    return (
        <>
            <div className="qualityContent">

                <Slide triggerOnce delay={300}  style={{marginTop: 'auto', marginBottom: '10%'}} direction={'left'}>
                    <div className="qualityText">
                        <hr/>
                        <h1>Quality</h1>
                        <p>The Car Seat is designed to be a perfect fit for your child. It’s made of a durable,
                            easy-to-clean material that’s also washable. The seat is adjustable, so you can customize it
                            to
                            fit your height, gender, and weight. You can even remove the seat and use it as a backpack
                            or
                            bag. In addition to being a great fit, the Car Seat can be used in multiple ways</p>
                    </div>
                </Slide>


                <Fade triggerOnce delay={300} duration={2000}
                      style={{marginLeft: 'auto', marginRight: '10%'}}>
                    <div className="qualityCover"/>
                </Fade>


            </div>
        </>
    );
};