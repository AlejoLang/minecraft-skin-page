import { useState } from "react";

function SkinAvatar ({uuid}) {

    const [showOverlay, setShowOverlay] = useState(true);

    return (
        <div className="SkinSection AvatarSection">
            <strong className="SkinSectionTitle AvatarSectionTitle">Skin Avatar</strong>
            <img 
                src={
                    showOverlay ? 'https://crafatar.com/avatars/' + uuid + '?default=MHF_Steve&overlay' :
                                  'https://crafatar.com/avatars/' + uuid + '?default=MHF_Steve'
                }
                alt='Skin Avatar'
                className="SkinSectionImg AvatarSectionImg"
            />
            <button onClick={() => {setShowOverlay(!showOverlay)}} className="SkinSectionBtn AvatarSectionBtn">Toggle Overlay</button>
        </div>
    )
}

export default SkinAvatar;