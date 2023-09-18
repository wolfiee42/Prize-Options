import PropTypes from 'prop-types';

const Link = ({ route }) => {
    const { name, path } = route;
    return (
        <li className="mr-1 p-3 hover:bg-gray-400">
            <a href={path}>{name}</a>
        </li>
    );
};
Link.propTypes = {
    route: PropTypes.object
}
export default Link;