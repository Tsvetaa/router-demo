import { Link } from "react-router-dom";

export const CharecterListItem = ({
    name, 
    url,
}) => {
    const id = url.split('/').filter(x => x).pop();
    return (
        
    <div>
        <Link to={`/cherecters/${id}`}>{name}</Link>
        </div>
    );
}