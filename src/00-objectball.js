function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: [{
                playerName: "Alan Anderson",
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },{
                playerName: "Reggie Evans",
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },{
                playerName: "Brook Lopez",
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },{
                playerName: "Mason Plumlee",
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },{
                playerName: "Jason Terry",
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }]
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: [{
                playerName: "Jeff Adrien",
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },{
                playerName: "Bismak Biyombo",
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },{
                playerName: "DeSagna Diop",
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },{
                playerName: "Ben Gordon",
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },{
                playerName: "Brendan Haywood",
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }]
        }
    }
}

///////////HELPERS//////////

function allPlayers(){
    return homePlayers().concat(awayPlayers())
}

function homeTeam(){
    return gameObject().home
}

function awayTeam(){
    return gameObject().away
}

function homePlayers(){
    return homeTeam().players
}

function awayPlayers(){
    return awayTeam().players
}

function findPlayer(searchPlayer){
    return allPlayers().find(player => player.playerName === searchPlayer)
}

function findTeam(team){
    if (homeTeam().teamName === team){
        return homeTeam()
    } else {
        return awayTeam()
    }
}

function playerWithMost(stat){
    return allPlayers().reduce((bigStatPlayer, player) => {
        if (player[stat] > bigStatPlayer[stat]){
            return player
        } else {
            return bigStatPlayer
        }
    })
}

///////////END HELPERS//////////

function numPointsScored(searchPlayer){
    return findPlayer(searchPlayer).points
}

function shoeSize(searchPlayer){
    return findPlayer(searchPlayer).shoe
}

function teamColors(team){
    return findTeam(team).colors
}

function teamNames(){
    return [homeTeam().teamName, awayTeam().teamName]
}

function playerNumbers(team){
    return findTeam(team).players.map(player => player.number)
}

function playerStats(searchPlayer){
    let foundPlayer = findPlayer(searchPlayer)
    delete foundPlayer.playerName
    return foundPlayer
}

function bigShoeRebounds(){
    return playerWithMost("shoe").rebounds
}

function mostPointsScored(){
    return playerWithMost("points")
}

function winningTeam(){
    let homeTeamScore = homeTeam().players.reduce((sum, player) => sum + player.points, 0)
    let awayTeamScore = awayTeam().players.reduce((sum, player) => sum + player.points, 0)

    if (homeTeamScore > awayTeamScore){
        return homeTeam().teamName
    } else if (homeTeamScore < awayTeamScore){
        return awayTeam().teamName
    } else {
        return "Tie game"
    }
}

function playerWithLongestName(){
    return allPlayers().reduce((longNamePlayer, player) => {
        if (player.playerName.length > longNamePlayer.playerName.length){
            return player
        } else {
            return longNamePlayer
        }
    })
}

function doesLongNameStealATon(){
    return playerWithMost("steals").steals === playerWithLongestName().steals ? true : false
}