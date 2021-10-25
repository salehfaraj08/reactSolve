import { useState } from "react";

const Text = ({ text, length }) => {
    const [textValue, setText] = useState('');
    const [isHide, setIshide] = useState(true);
    const [isShow, setIsShow] = useState(false);
    const checkValid = () => {
        if (isHide) {
            console.log(textValue, textValue.length, length);
            let tmpText = text.slice(0, length);
            setText(tmpText);
            setIshide(!isHide)
            console.log(tmpText);
        }
    }




    return <>
        <div>
            {textValue}{checkValid()}
            {text.length > length ?
                <span onClick={() => { setIsShow(!isShow); setText(text) }}>
                    {!isShow ? <span className='show'> ...show more</span> : <span className='show' onClick={() => { setIsShow(!isShow); setIshide(!isHide) }}> show less</span>}
                </span> :
                ''}
        </div>
    </>
}
export default Text;