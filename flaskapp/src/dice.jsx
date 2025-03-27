import {useState} from "preact/hooks";

export default function Dice(){
    const [face, setFace] = useState("dice-six-svgrepo-com.svg")
    return <><img onclick={evt=>{
        const sides = ["dice-one-svgrepo-com.svg", "dice-two-svgrepo-com.svg", "dice-three-svgrepo-com.svg", "dice-four-svgrepo-com.svg",
            "dice-five-svgrepo-com.svg", "dice-six-svgrepo-com.svg"
        ];
        fetch("https://ideal-winner-75w6v6pw7hw4rj-5000.app.github.dev/rolldice", {headers:{
            traceparent: "123-456-789-123"
        }}).then((res)=>{
            res.text().then((sSide)=>{
                setFace(sides[sSide - 1]);
            })
        });
    }} src={face} /></>
}