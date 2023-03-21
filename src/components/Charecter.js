import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = 'https://swapi.dev/api/people';

export const Charecter = () => {
    const {charecterId} = useParams();
    const [charecter, setCharecter] = useState();

    useEffect(() => {
        fetch(`${baseUrl}/${charecterId}`)
            .then(res => res.json())
            .then(data => {
                setCharecter(data);
            })
    }, [charecterId])
    return (
        <>
        <h1>Charecter page</h1>
        <h2>{charecter.name}</h2>
        </>
        
    );
};