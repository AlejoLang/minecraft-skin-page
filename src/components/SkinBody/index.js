import { useState } from "react";

function SkinBody ({uuid}) {
    const [showOverlay, setShowOverlay] = useState(true);

    return (
        <div className="SkinSection BodySection">
            <strong className="SkinSectionTitle BodySectionTitle">Skin Body</strong>
            <img 
                src={
                    showOverlay ? 'https://crafatar.com/renders/body/' + uuid + '?default=MHF_Steve&overlay' :
                                  'https://crafatar.com/renders/body/' + uuid + '?default=MHF_Steve'
                }
                alt='Skin Body'
                className="SkinSectionImg BodySectionImg"
            />
            <button onClick={() => {setShowOverlay(!showOverlay)}} className="SkinSectionBtn BodySectionBtn">Toggle Overlay</button>
        </div>
    )
}

export default SkinBody;