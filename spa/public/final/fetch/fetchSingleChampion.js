
const fetchSingleChampion = async (championName) => {
    const singleChampionDataResponse = await fetch(`https://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion/${championName}.json`);
    const singleChampionData = await singleChampionDataResponse.json();
    const champion = singleChampionData.data[championName]
    return champion;
};

export default fetchSingleChampion;