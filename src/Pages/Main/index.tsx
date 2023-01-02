import './index.scss'
import react from 'react'
import {Fade} from "react-awesome-reveal";

export const Main: React.FC<{}> = props => {
    return (
        <>
            <div className="mainContent">
                <Fade delay={300}>
                    <div className="desc">
                        <h1>Make best for the best</h1>
                        <p>Just take a funny ride, no more :)</p>
                    </div>
                </Fade>
            </div>
        </>
    );
};