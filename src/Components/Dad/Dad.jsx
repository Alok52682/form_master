// import Brother from "../Borther/Brother";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import PropTypes from 'prop-types';

const Dad = ({ asset }) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Brother />
                <Sister></Sister>
            </section>
        </div>
    );
};

Dad.propTypes = {
    asset: PropTypes.string
}

export default Dad;