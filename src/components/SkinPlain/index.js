
function SkinPlain ({ uuid }) {

    return (
        <div className="SkinSection PlainSection">
            <strong className="SkinSectionTitle PlainSectionTitle">Skin Plain Texture</strong>
            <img 
                src={'https://crafatar.com/skins/' + uuid + '?default=MHF_Steve'}
                alt='Skin Avatar'
                className="SkinSectionImg PlainSectionImg"
            />
        </div>
    )
}

export default SkinPlain;