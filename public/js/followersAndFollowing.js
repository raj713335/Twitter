$(document).ready(() => {

    if(selectedTab === "followers") {
        loadfollowers();
    }
    else {
        loadfollowing();
    }
});

function loadfollowers() {
    $.get(`/api/users/${profileUserId}/followers`,  results => {
        outputUsers(results.followers, $(".resultsContainer"));
    })
}

function loadfollowing() {
    $.get(`/api/users/${profileUserId}/following`, results => {
        outputUsers(results.following, $(".resultsContainer"));
    })
}

