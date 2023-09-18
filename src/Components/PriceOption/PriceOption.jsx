import { useEffect, useState } from "react";
import Price from "../Price/Price";
import axios from 'axios'

const PriceOption = () => {
    /* const membership = async () => {
        const response = await fetch('membership.json')
        const data = await response.json()
        setmembersss(data);
    } */
    const membership = () => {
        axios.get('membership.json')
        .then(data => setmembersss(data.data))
    }
const [membersss, setmembersss] = useState([])
useEffect(() => {
    membership()
}, [])
return (

    <div className="m-12">
        <h3 className="text-5xl">Best Price in the town</h3>
        <div className="grid grid-cols-3 gap-6">
            {
                membersss.map(member => <Price key={member.id} member={member}></Price>)
            }
        </div>
    </div>
);
};

export default PriceOption;