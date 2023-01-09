import './index.scss'
import {Slide} from "react-awesome-reveal";
import {Fade} from "react-awesome-reveal";

export const Standarts: React.FC<{}> = props => {
    return (
        <>
            <div className="standartsContent">
                <Fade triggerOnce delay={300} style={{marginLeft: '10%', marginRight: '10%'}}>
                    <div className="standartsCover"/>
                </Fade>

                <Slide triggerOnce delay={300} direction={'right'}>
                    <div className="standartsText">
                        <hr/>
                        <h1>Standarts</h1>
                        <p>The Car Seat is designed to be a perfect fit for your child. It’s made of a durable,
                            easy-to-clean material that’s also washable. The seat is adjustable, so you can customize it
                            to
                            fit your height, gender, and weight. You can even remove the seat and use it as a backpack
                            or
                            bag. In addition to being a great fit, the Car Seat can be used in multiple ways</p>
                    </div>
                </Slide>


            </div>
        </>
    );
};