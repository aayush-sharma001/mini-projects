import { data } from "./data";
import { useState } from "react";
import './style.css'

const Accordian =  () => {
    const [show, setShow] = useState(null);

    const toggleAccordian = (index) => {
        setShow(prev => prev === index ? null : index);
    }

    return (
        <>
            <div className="accordianContainer">
                <h1 className="title">Accordian</h1>
                {
                    data.map((d) => (
                        <div key={d.id} className="accordian" onClick={() => toggleAccordian(d.id)}>
                            <div className="titleArea">
                                <h1>{d.title}</h1>
                                <span>{show === d.id ? 'v': '^'}</span>
                            </div>
                            {show === d.id && <div className="descArea">{d.description}</div>}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Accordian;