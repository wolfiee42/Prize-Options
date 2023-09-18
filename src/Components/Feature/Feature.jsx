import { AiFillCheckCircle } from "react-icons/ai";


const Feature = ({feature}) => {
    return (
        <div className="flex items-center">
            <AiFillCheckCircle className="text-green-500"></AiFillCheckCircle>
            <p className="my-1 ml-2">{feature}</p>
        </div>
    );
};

export default Feature;