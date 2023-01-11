import React, { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";
import { searchGifs } from "../api/gifsApi";


const GifGrid = ({ category }) => {

    const [listGifts, setListGifts] = useState([]);

    const getImages = async (category) => {
        const response = await searchGifs(category);
        if (response && response.length > 0) {
            setListGifts(response);
        }
    }

    useEffect(() => {
        getImages(category);
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {(listGifts && listGifts.length > 0)
                    && (
                        listGifts.map(gif => (
                            <GifGridItem
                                key={gif.id}
                                {...gif}
                            />
                        ))
                    )
                }
            </div>
        </>
    );
}

export default GifGrid;