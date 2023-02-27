
function SkinPlain ({ uuid }) {

    const downloadSkin = () => {
        var link = document.createElement("a");
        link.download = uuid + '_skin';
        link.href = 'https://crafatar.com/skins/' + uuid + '.png';
        link.setAttribute("target", "_blank");
        link.click();
        link.remove();
    }

    return (
        <div className="SkinSection PlainSection">
            <strong className="SkinSectionTitle PlainSectionTitle">Skin Plain Texture</strong>
            <img 
                src={'https://crafatar.com/skins/' + uuid + '?default=MHF_Steve'}
                alt='Skin Avatar'
                className="SkinSectionImg PlainSectionImg"
            />
            <button className="SkinSectionBtn downloadSkinBtn" onClick={downloadSkin}>Download Skin</button>
        </div>
    )
}

export default SkinPlain;