
function SkinCape ({ uuid }) {

    return (
        <div className="SkinSection CapeSection">
            <strong className="SkinSectionTitle CapeSectionTitle">Skin Cape</strong>
            <img 
                src={'https://crafatar.com/capes/' + uuid + '?default=160739ca-99d2-4b07-ba87-d078cd9bcf36?default=853c80ef3c3749fdaa49938b674adae6'}
                alt='Skin Cape'
                className="SkinSectionImg CapeSectionImg"
            />
        </div>
    )
}

export default SkinCape;