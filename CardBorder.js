import style from './CardBorder.module.css';

const CardBorder = () => {
    return (
        <>
            <div className={style.borderOne}></div>
            <div className={style.borderTwo}></div>
            <div className={style.borderThree}></div>
            <div className={style.borderFour}></div>
        </>
    )
}
export default CardBorder;