import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockStyle = useRef();

    const handleChangeStyle = () => {
        console.log(blockStyle.current);
        blockStyle.current.style.width = "80px";
        blockStyle.current.style.height = "150px";
        blockStyle.current.children[0].innerText = "text";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockStyle}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded mx-2"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button
                className="btn btn-warning mx-2 mt-2"
                onClick={handleChangeStyle}
            >
                Изменить свойства блока
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
