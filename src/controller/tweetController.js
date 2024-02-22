const getTweets = (req, res) => {
    res.send('Lire');
}

const postTweets = (req, res) => {
    res.send('Creer');
}
const putTweets = (req, res) =>{
    res.send('Mettre à jour');
}

const deleteTweet = (req, res) =>{
    res.send('suprimer');
}


    



module.exports = {
    getTweets, postTweets, putTweets, deleteTweet,

}