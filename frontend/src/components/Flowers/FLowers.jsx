import FlowersCard from "../FlowersCard/FlowersCard";
import "./Flowers.css"

const FlowersPage = (props) => {
    const {allFlowers} = props;
    return (
        <>
            <section className="flowers-container">
                {allFlowers.map((flower) => {
                    return (
                        <div key={flower.id}>
                            <FlowersCard flower={flower}/>
                        </div>
                    );
                })}
            </section>
        </>
    );
}
export default FlowersPage;