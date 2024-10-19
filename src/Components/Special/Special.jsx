import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";
import PropTypes from 'prop-types';


const Special = ({ asset }) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>has: {asset}</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

Special.propTypes = {
    asset: PropTypes.string
}

export default Special;