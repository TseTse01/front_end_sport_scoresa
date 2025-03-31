import React from 'react';
import DynamicImage from '../football/[leagues]/components/DynamicImage';

const Pubinterdit = () => {
    return (
        <div className='pub'>
            <div className="pubContainer">
                <h6>
                    LES JEUX D'ARGENT ET DE HASARD PEUVANT ETRE DANGEREUX: PERTES D'ARGENT,CONFLITS FAMILIAUX,ADDICTION...
                </h6>
                <div className="svgGouvernement">
                    <DynamicImage src={"/flag/gouvernement.svg"} alt={"logo gouvernement"} className={"gouvernement"} />
                </div>
            </div>
        </div>
    );
};

export default Pubinterdit;