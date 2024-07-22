let dataBlog = []; //parkiran

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;

  //mobil
  let blog = {
    title,
    content: content,
    postAt: new Date(),
  };

  dataBlog.push(blog); // dataBlog = [blog,blog]

  console.log(dataBlog);
  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let i = 0; i < dataBlog.length; i++) {
    document.getElementById("contents").innerHTML += `
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="./assets/images/luffy.jpg" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Delete Post</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${dataBlog[i].title}</a
              >
            </h1>
            <div class="detail-blog-content">
              ${getFullDate(dataBlog[i].postAt)} | Ichsan Emrald Alamsyah
            </div>
            <p>
            ${dataBlog[i].content}
            </p>
            <p style="float: right">${getDistanceTime(dataBlog[i].postAt)}</p>
          </div>
        </div>`;
  }
}

function getFullDate(time) {
  let nameOfMonth = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  let date = time.getDate();
  let month = nameOfMonth[time.getMonth()];
  let year = time.getFullYear();

  let hour = time.getHours();
  let minute = time.getMinutes();

  return `${date} ${month} ${year} - ${hour}:${minute} WIB`;
}

function getDistanceTime(time) {
  let postTime = time;
  let currentTime = new Date();

  let distanceTime = currentTime - postTime; //4000

  let miliSecond = 1000;
  let secondInHour = 3600;
  let hourInDay = 24;

  let distanceTimeInSecond = Math.floor(distanceTime / miliSecond);
  let distanceTimeInMinute = Math.floor(distanceTime / (miliSecond * 60));
  let distanceTimeInHour = Math.floor(
    distanceTime / (miliSecond * secondInHour)
  );
  let distanceTimeInDay = Math.floor(
    distanceTime / (miliSecond * secondInHour * hourInDay)
  );

  if (distanceTimeInDay > 0) {
    return `${distanceTimeInDay} days ago`;
  } else if (distanceTimeInHour > 0) {
    return `${distanceTimeInHour} hours ago`;
  } else if (distanceTimeInMinute > 0) {
    return `${distanceTimeInMinute} minutes ago`;
  } else {
    return `${distanceTimeInSecond} seconds ago`;
  }
}
