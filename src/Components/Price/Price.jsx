import Feature from "../Feature/Feature";

const Price = ({ member }) => {
    const { name, price, description, features } = member
    return (
        <div className="bg-blue-500 m-12 p-6 rounded-lg text-gray-200 flex flex-col">
            <h1>
                <span className="text-5xl">{price}</span>
                <span className="text-xl">/month</span>
            </h1>
            <h2 className="text-2xl my-3">{name}</h2>
            <p><small>{description}</small></p>
            <div className="my-5 pl-4 flex-grow" >
                {
                    features.map(feature => <Feature feature={feature}></Feature>)
                }
            </div>
            <button className="btn btn-outline btn-success w-full">Buy Now</button>
        </div>
    );
};

export default Price;