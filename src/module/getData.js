import cards from "./cards";

const getData = async()=>{
    const response = await fetch('https://api.tvmaze.com/shows');
    const getJsonObj = await response.json();
    cards(getJsonObj);
}
export default getData;