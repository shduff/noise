// JUST TO REMEMBER SOME IDS FOR TESTING

let playlistID = "7hCsL8mdQB5B5QlP6MFEPc"; //playlist of school of honk repertoire
let albumID = "7EW77iyGMou046Z44pOrIk"; //what's the story morning glory by oasis
let trackID = "1CkvWZme3pRgbzaxZnTl5X"; //rolling in the deep by adele

// A FEW FUNCTIONS TO PULL OUT THE INFO I WANT ABOUT MY TRACKS, PLAYLISTS, ALBUMS

function getPlaylistData(playlistID) {
    let playlistData = {};
    let playlistTrackDataSpotify = makePlaylistDataRequest(playlistID);

    playlistTrackDataSpotify.items.forEach(function(element) {
        let trackData = {};
        trackData["title"] = element.track.name;
        trackData["artist"] = element.track.artists[0].name;
        trackData["album"] = element.track.album.name;
        trackData["trackNumber"] = element.track.track_number;
        trackData["totalTracks"] = element.track.album.total_tracks;
        trackData["releaseDate"] = element.track.album.release_date;
        trackData["imgURL"] = element.track.album.images[0].url // 640px
        trackData["durationInMins"] = element.track.duration_ms/1000/60; //in mins
        trackData["popularity"] = element.track.popularity;
        trackData["previewURL"] = element.track.preview_url;

        playlistData[element.track.id] = trackData;
    });

    let playlistTrackIDsList = Object.keys(playlistData);

    let playlistTrackFeaturesList = makeTrackFeaturesRequests(playlistTrackIDsList);

    playlistTrackFeaturesList.forEach(function(element) {
        let trackData = playlistData[element.id];
        trackData["danceability"] = element.danceability;
        trackData["energy"] = element.energy;
        trackData["loudness"] = element.loudness;
        trackData["key"] = element.key;
        trackData["mode"] = element.mode;
        trackData["acousticness"] = element.acousticness;
        trackData["tempo"] = element.tempo;
        trackData["timeSignature"] = element.time_signature;
        trackData["instrumentalness"] = element.instrumentalness;
        trackData["analysisData"] = makeTrackAnalysisRequest(element.id);

        playlistData[element.id] = trackData;
    });

    // And then return it so you can treat this function like a variable
    return playlistData;
}

function getAlbumData(albumID) {
    let albumData = {};
    let albumTrackDataSpotify = makeAlbumDataRequest(albumID);

    albumTrackDataSpotify.tracks.items.forEach(function(element) {
        let trackData = {};
        trackData["title"] = element.name;
        trackData["artist"] = element.artists[0].name;
        trackData["album"] = albumTrackDataSpotify.name;
        trackData["trackNumber"] = element.track_number;
        trackData["totalTracks"] = albumTrackDataSpotify.total_tracks;
        trackData["releaseDate"] = albumTrackDataSpotify.release_date;
        trackData["imgURL"] = albumTrackDataSpotify.images[0].url // 640px
        trackData["durationInMins"] = element.duration_ms/1000/60; //in mins
        trackData["popularity"] = albumTrackDataSpotify.popularity;
        trackData["previewURL"] = element.preview_url;

        albumData[element.id] = trackData;
    });

    let albumTrackIDsList = Object.keys(albumData);

    let albumTrackFeaturesSpotifyList = makeTrackFeaturesRequests(albumTrackIDsList);


    albumTrackFeaturesSpotifyList.forEach(function(element) {
        let trackData = albumData[element.id];
        trackData["danceability"] = element.danceability;
        trackData["energy"] = element.energy;
        trackData["loudness"] = element.loudness;
        trackData["key"] = element.key;
        trackData["mode"] = element.mode;
        trackData["acousticness"] = element.acousticness;
        trackData["tempo"] = element.tempo;
        trackData["timeSignature"] = element.time_signature;
        trackData["instrumentalness"] = element.instrumentalness;
        trackData["analysisData"] = makeTrackAnalysisRequest(element.id);

        albumData[element.id] = trackData;
    });

    return albumData;
}

function getTrackData(trackID) {
    let trackData = {};
    let trackDataSpotify = makeTrackDataRequest(trackID);

    trackData["id"] = trackDataSpotify.id;
    trackData["title"] = trackDataSpotify.name;
    trackData["artist"] = trackDataSpotify.artists[0].name;
    trackData["album"] = trackDataSpotify.album.name;
    trackData["trackNumber"] = trackDataSpotify.track_number;
    trackData["totalTracks"] = trackDataSpotify.album.total_tracks;
    trackData["releaseDate"] = trackDataSpotify.album.release_date;
    trackData["imgURL"] = trackDataSpotify.album.images[0].url // 640px
    trackData["durationInMins"] = trackDataSpotify.duration_ms/1000/60; //in mins
    trackData["popularity"] = trackDataSpotify.popularity;
    trackData["previewURL"] = trackDataSpotify.preview_url;

    let trackFeaturesSpotify = makeTrackFeaturesRequest(trackID);
    
    trackData["danceability"] = trackFeaturesSpotify.danceability;
    trackData["energy"] = trackFeaturesSpotify.energy;
    trackData["loudness"] = trackFeaturesSpotify.loudness;
    trackData["key"] = trackFeaturesSpotify.key;
    trackData["mode"] = trackFeaturesSpotify.mode;
    trackData["acousticness"] = trackFeaturesSpotify.acousticness;
    trackData["tempo"] = trackFeaturesSpotify.tempo;
    trackData["timeSignature"] = trackFeaturesSpotify.time_signature;
    trackData["instrumentalness"] = trackFeaturesSpotify.instrumentalness;
    trackData["analysisData"] = makeTrackAnalysisRequest(trackDataSpotify.id);
    
    return trackData;
}   