import { useState } from "react";

function SkinHead ({ uuid }) {
    const [showOverlay, setShowOverlay] = useState(true);

    return (
        <div className="SkinSection HeadSection">
            <strong className="SkinSectionTitle HeadSectionTitle">Skin Head</strong>
            <img 
                src={
                    showOverlay ? 'https://crafatar.com/renders/head/' + uuid + '?default=MHF_Steve&overlay' :
                                  'https://crafatar.com/renders/head/' + uuid
                }
                alt='Skin Avatar'
                className="SkinSectionImg HeadSectionImg"
            />
            <button onClick={() => {setShowOverlay(!showOverlay)}} className="SkinSectionBtn HeadSectionBtn">Toggle Overlay</button>
        </div>
    )
}

export default SkinHead;