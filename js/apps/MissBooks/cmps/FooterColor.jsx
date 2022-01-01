export function FooterColor({onChangeFooterStyles}){
    const colors = ['#124E78', '#F0F0C9', '#F2BB05', '#D74E09', '#6E0E0A']
    return (
        <div className="colors-container flex">
            {colors.map(color => (
                <div className="color" key={color} style={{backgroundColor: color}} onClick={() => onChangeFooterStyles('backgroundColor', color)}></div>
            ))}

        </div>
    )
}