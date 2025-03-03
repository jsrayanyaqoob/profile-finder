const div = document.querySelector("#contentContainer");
const input = document.querySelector("#inputValue");

function yewala() {

    const fetchGithubData = fetch(`https://api.github.com/users/${input.value}`)
    .then(res => {
        
        if(input.value !== fetchGithubData){
            div.innerHTML = `<p class="text-info">User Not Found!</p>`
        }

        return res.json()
    })
    .then((res) => {
      div.innerHTML = `

        <nav class="bg-black">
        <div class="">
            <img src="bluebg.jpg" alt="" width="100%" height="180px">
        </div>
        </nav>


        <div class="cp d-flex justify-content-center gap-5" id="repoFoloFolowers">
          <div class="repo">
            <p class="text-center fw-bold fs-5 text-white">${res.public_repos || 0}</p>
            <p class="gray fw-semibold">Repositories</p>
          </div> 
          <div class="followers">
            <p class="text-center fw-bold fs-5 text-white">${res.followers || 0}</p>
            <p class="gray fw-semibold">Followers</p>
          </div>
          <div class="following">
            <p class="text-center fw-bold fs-5 text-white">${res.following || 0}</p>
            <p class="gray fw-semibold">Following</p>
          </div> 
        </div>
        <div class="placeForAvatar mt-3 ms-4">
          <div class="avatar"><img src="${res.avatar_url} width="100"></div>
          <p class="paraName fw-bold mt-4 fs-5">${res.name || "N/A"}</p>
          <p class="bio fw-semibold">${res.bio || "No bio available"}</p>
          <p class="location">${res.location || "Location not specified"}</p>
        </div>
      `;


      console.log(res);
      
    })
    .catch((err) => {
      div.innerHTML = `<p class="aagLagadi">Error: ${err.message}</p>`;
    });
}
