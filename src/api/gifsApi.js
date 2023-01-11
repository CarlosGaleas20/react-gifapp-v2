

export const searchGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zP4ksM0T2nlA6A6h07Ieb13swCgvdgC5&q=${ category }&limit=12`;
    const response = await fetch(url);
    const { data } = await response.json();
    const dataGift = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));
    return dataGift;
}