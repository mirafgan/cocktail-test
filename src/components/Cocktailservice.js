class CocktailService {
    getData(url) {
        return fetch(url)
        .then(res => res.json())
        .then(result => result)
    }
    getRandomData() {
        return this.getData('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    }
}
export default CocktailService;