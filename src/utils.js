export const getImageUrl = (path) => {
    /* dynamically import the images into different components*/
    return new URL(`/assets/${path}`, import.meta.url).href;
};