import React, { useState } from "react";
import { Tv } from "lucide-react";

const tvChannels: string[] = [
    "BeIN Sports",
    "Canal+ Sport",
    "RMC Sport",
    "Eurosport",
    "Sky Sports",
    "ESPN",
    "Fox Sports",
    "DAZN",
    "TF1",
    "M6"
];

const TvContainer: React.FC = () => {
    const [showChannels, setShowChannels] = useState<boolean>(false);

    return (
        <div
            className="tv-container"
            onMouseEnter={() => setShowChannels(true)}
            onMouseLeave={() => setShowChannels(false)}
        >
            <Tv size={30} color="white" />
            {showChannels && (
                <div className="tv-popup">
                    {tvChannels.map((channel, index) => (
                        <div key={index} className="tv-channel">
                            <p>{channel}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TvContainer;