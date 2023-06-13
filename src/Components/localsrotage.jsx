export const GetLocalData = () => {
    let localData = JSON.parse(localStorage.getItem('React-Todo'));
    if(localData === null){
        localData = new Array;
        localData.push(localData)
    }
    return localData;
};

export const updateLocaData = (newdata) => {
    let localData = JSON.parse(localStorage.getItem('React-Todo'));
    if(localData === null){
        localData = new Array;
    } else {
        localData.push(newdata);
    }
    localStorage.setItem('React-Todo', JSON.stringify(localData));
}

export default { GetLocalData, updateLocaData };
