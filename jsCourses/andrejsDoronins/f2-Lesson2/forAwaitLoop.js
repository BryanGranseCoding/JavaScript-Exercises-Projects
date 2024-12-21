//run "npm install node-fetch" if NodeJs version < 18
/* import fetch from 'node-fetch'; */

//make sure we wrap it up in an anonymous function or else, this will not work
(async () => {
    let count = 0;

    for await (const repo of fetchRepos('javascript')) {
        console.log(count + 1, repo.full_name); // the field 'full_name' is base on the JASON file Repository object

        if(++count == 50) {
            // stop at 50 repos
            break;
        }
        
    }

})();

//https://api.github.com/
// /https://api.github.com/search/repositories?q=Javascript
async function* fetchRepos(repo) {
    let url = `https://api.github.com/search/repositories?q=${repo}`;

    while (url) {
        const response = await fetch(url, {
            headers: { 'User-Agent' : 'Custom Script' },
        });


        const body = await response.json(); // Data of Repos in array

        //getting the headers 'Link' for nextPage
        let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
        nextPage = nextPage?.[1];
        url = nextPage;

        // Yield repos one by one, until the page ends
        //the items has a 30 repos in each page so it will run 30 times, becore th execution flow comes back to the top of the while loop
        for(let repo of body.items ) {
            yield repo;
        }


    }
}