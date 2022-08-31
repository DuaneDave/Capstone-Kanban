import cards from "./cards";
class Game {
getData = async()=>{
    const response = await fetch('https://api.tvmaze.com/shows');
    const getJsonObj = await response.json();
    const likedList = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/g47Ybpe3Iv9MLdD87d0m/likes').then((response) => response.json());
    const result = getJsonObj.slice(0, 18);
    const likedResult = likedList.slice(0,18);
    cards(result, likedResult);
}

getLikes= async()=>{
    const likedList = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/g47Ybpe3Iv9MLdD87d0m/likes').then((response) => response.json());
    const likedResult = likedList.slice(0,18);
    return likedResult;
}
}

export default Game;
