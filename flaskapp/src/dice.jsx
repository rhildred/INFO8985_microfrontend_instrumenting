import {useState} from "preact/hooks";

export default function Dice(){
    const [face, setFace] = useState("dice-six-svgrepo-com.svg")
    return <><img onclick={evt=>{
        const sides = ["dice-one-svgrepo-com.svg", "dice-two-svgrepo-com.svg", "dice-three-svgrepo-com.svg", "dice-four-svgrepo-com.svg",
            "dice-five-svgrepo-com.svg", "dice-six-svgrepo-com.svg"
        ]
        const side = sides[Math.floor(Math.random() * 6)];
        setFace(side);
    }} src={face} /></>
}