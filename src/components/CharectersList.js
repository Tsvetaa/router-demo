import { useEffect, useState } from "react";
import { CharecterListItem } from "./CharecterListItem";

const baseUrl = 'https://swapi.dev/api/people';

export const CharectersList = () => {
    const [charecters, setCharecters] = useState([])

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setCharecters(data.results);
            })
    }, []);

    return (
        <>
            <h1>Star Wars Charecters</h1>

            <ul>
                {charecters.map(x => <CharecterListItem key={x.url} {...x}/>)}
            </ul>
        </>

    );
};