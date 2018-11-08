// A WRAPPER AROUND THE SPOTIFY URL REQUESTS

function makeRequest(url) {
    httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url, false);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.setRequestHeader('Authorization', document.getElementById("bearerInput").value); 
    httpRequest.send();

    return JSON.parse(httpRequest.responseText);
}

function makeAlbumDataRequest(albumID) {
    // First, construct a request URL from the passed list of track ids
    let requestURL = "https://api.spotify.com/v1/albums/" + albumID;

    // Then make a get request to the request URL to query Spotify's api and save to a variable
    let albumData = makeRequest(requestURL);

    // Display the resulting data on the screen so you can copy and past it
    document.getElementById("spotify-output").innerHTML = JSON.stringify(albumData);

    // And then return it so you can treat this function like a variable
    return albumData;
}

function makePlaylistDataRequest(playlistID) {
    // First, construct a request URL from playlistID passed to the function
    let requestURL = "https://api.spotify.com/v1/playlists/" + playlistID + "/tracks";

    // Then use the request URL to query Spotify's api and save to a variable
    let playlistData = makeRequest(requestURL);

    // Display the resulting data on the screen so you can copy and past it
    document.getElementById("spotify-output").innerHTML = JSON.stringify(playlistData);

    // And then return it so you can treat this function like a variable
    return playlistData;
}

function makeTrackDataRequest(trackID) {
    // First, construct a request URL from the passed list of track ids
    let requestURL = "https://api.spotify.com/v1/tracks/" + trackID;

    // Then make a get request to the request URL to query Spotify's api        
    let trackData = makeRequest(requestURL);

    // Display the resulting track features on the screen so you can copy and paste it
    document.getElementById("spotify-output").innerHTML = JSON.stringify(trackData);

    // And then return the track data so you can treat this function like a variable
    return trackData;
}

function makeTrackFeaturesRequest(trackID) {
    // First, construct a request URL from the passed list of track ids
    let requestURL = "https://api.spotify.com/v1/audio-features/" + trackID;

    // Then make a get request to the request URL to query Spotify's api        
    let trackFeatures = makeRequest(requestURL);

    // Display the resulting track features on the screen so you can copy and paste it
    document.getElementById("spotify-output").innerHTML = JSON.stringify(trackFeatures);

    // And then return the list of track features so you can treat this function like a variable
    return trackFeatures;
}

function makeTrackFeaturesRequests(trackIDs) {
    // Create a blank list to collect track features data in
    let trackFeaturesList = [];

    // Iterate through the list of track ids the function was passed. For each, query Spotify for its trach features, and then add those features to your list 
    for (let i = 0; i < trackIDs.length; i++) {
        let data = makeTrackFeaturesRequest(trackIDs[i]);
        trackFeaturesList.push(data);
    }

    // Display the resulting list of track features on the screen so you can copy and paste it
    document.getElementById("spotify-output").innerHTML = JSON.stringify(trackFeaturesList);

    // And then return the list of track features so you can treat this function like a variable
    return trackFeaturesList;
}

function makeTrackAnalysisRequest(trackID) {
    // First, construct a request URL from the passed list of track ids
    let requestURL = "https://api.spotify.com/v1/audio-analysis/" + trackID;

    // Then make a get request to the request URL to query Spotify's api and save it in a variable
    let trackAnalysis = makeRequest(requestURL);

    // Display the resulting track analysis on the screen so you can copy and paste it
    document.getElementById("spotify-output").innerHTML = JSON.stringify(trackAnalysis);

    // And then return the track analysis so you can treat this function like a variable
    return trackAnalysis;

}

function makeTrackAnalysisRequests(trackIDs) {
    // Create an empty list to save your track analysis data in
    let trackAnalysisList = [];

    // Iterate through the list of tracks passed to the function. For each, query spotify for its track analysis and add it to your list
    for (let i = 0; i < trackIDs.length; i++) {
        let data = makeTrackAnalysisRequest(trackIDs[i]);
        trackAnalysisList.push(data);
    }

    // Display the resulting list of track analysis data on the screen so you can copy and paste it
    document.getElementById("spotify-output").innerHTML = JSON.stringify(trackAnalysisList);

    // And then return the list of track analysis data so you can treat this function like a variable
    return trackAnalysisList;
}