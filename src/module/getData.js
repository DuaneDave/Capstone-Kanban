import cards from "./cards";
const getData = async()=>{
    const response = await fetch('https://api.tvmaze.com/shows');
    const getJsonObj = await response.json();
    const likedList = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/g47Ybpe3Iv9MLdD87d0m/likes').then((response) => response.json());
    cards(getJsonObj,likedList);
}

export default getData;