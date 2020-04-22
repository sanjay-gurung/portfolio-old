import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

// Tipical JS class using render method to return JSX for creating a react compoent
// class SocialProfiles extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>You can find me on:</h3>
//                 <div>
//                     {
//                         SOCIAL_PROFILES.map((socialProfile) => (
//                             <a key={socialProfile.id} href={socialProfile.link}>
//                                 <img src={socialProfile.image} style={{width: 40, height: 40, margin: 20}} />
//                             </a>
//                         ))
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// Stateless functional syntax that directly returns JSX in order to create a react component
const SocialProfiles = () => {
    return(
        <div>
            <h3>You can find me on:</h3>
            <div>
                {
                    SOCIAL_PROFILES.map((socialProfile) => (
                        <a key={socialProfile.id} href={socialProfile.link}>
                            <img src={socialProfile.image} style={{width: 40, height: 40, margin: 20}} />
                        </a>
                    ))
                }
            </div>
        </div>
    )
}
export default SocialProfiles;
