function moveDetail(article_id) {
  window.location.href = `${frontend_base_url}/doc/detail.html?article_id=${article_id}`;
}

window.onload = async function () {
  articles = await getArticles();
  console.log(articles);

  const contentBox = document.getElementById("content-box");

  articles.forEach((article) => {
    const imageBox = document.createElement("img");
    imageBox.setAttribute("class", "img-box");
    imageBox.setAttribute("onclick", `moveDetail(${article.id})`);

    if (article.image) {
      imageBox.setAttribute("src", `${backend_base_url}${article.image}`);
    } else {
      imageBox.setAttribute("src", `${no_image}`);
    }
    console.log(imageBox);
    contentBox.append(imageBox);
  });

  const buttonBox = document.getElementById("button-box");
  const profileBox = document.getElementById("profile-box");
  const payload = localStorage.getItem("payload");
  const payload_parse = JSON.parse(payload);

  if (payload_parse) {
    const myPageButton = document.createElement("button");
    myPageButton.setAttribute("onclick", "moveProfile()");
    myPageButton.innerText = "마이 페이지";
    buttonBox.append(myPageButton);

    const myWriteButton = document.createElement("button");
    myWriteButton.setAttribute("onclick", "movePost()");
    myWriteButton.innerText = "글쓰기";
    profileBox.append(myWriteButton);
  } else {
    const mySigninButton = document.createElement("button");
    mySigninButton.setAttribute("onclick", "moveSignIn()");
    mySigninButton.innerText = "로그인";
    const mySignUpButton = document.createElement("button");
    mySignUpButton.setAttribute("onclick", "moveSignUp()");
    mySignUpButton.innerText = "회원가입";
    buttonBox.append(mySigninButton);
    buttonBox.append(mySignUpButton);
  }
};

// 홈 이동
function moveHome() {
  window.location.replace(`${frontend_base_url}/`);
}

// 마이페이지 이동
function moveProfile() {
  console.log("눌려");
  window.location.replace(`${frontend_base_url}/doc/profile.html`);
}

// 글 작성 페이지 이동
function movePost() {
  window.location.replace(`${frontend_base_url}/doc/post.html`);
}

// 로그인 이동
function moveSignIn() {
  window.location.replace(`${frontend_base_url}/doc/login.html`);
}

// 회원가입 이동
function moveSignUp() {
  window.location.replace(`${frontend_base_url}/doc/signup.html`);
}
function moveDetail(article_id) {
  window.location.href = `${frontend_base_url}/doc/detail.html?article_id=${article_id}`;
}

window.onload = async function () {
  articles = await getArticles();
  console.log(articles);

  const contentBox = document.getElementById("content-box");

  articles.forEach((article) => {
    const imageBox = document.createElement("img");
    imageBox.setAttribute("class", "img-box");
    imageBox.setAttribute("onclick", `moveDetail(${article.id})`);

    if (article.image) {
      imageBox.setAttribute("src", `${backend_base_url}${article.image}`);
    } else {
      imageBox.setAttribute("src", `${no_image}`);
    }
    contentBox.append(imageBox);
  });

  const buttonBox = document.getElementById("button-box");

  // 로그인 되어있을 때
  if (payload_parse) {
    const myPageButton = document.createElement("button");
    myPageButton.setAttribute("onclick", "moveProfile()");
    myPageButton.innerText = "마이 페이지";
    buttonBox.append(myPageButton);

    const myWriteButton = document.createElement("button");
    myWriteButton.setAttribute("onclick", "movePost()");
    myWriteButton.innerText = "글쓰기";
    buttonBox.append(myWriteButton);

    const myLogOutButton = document.createElement("button");
    myLogOutButton.setAttribute("onclick", "handleLogout()");
    myLogOutButton.innerText = "로그아웃";
    buttonBox.append(myLogOutButton);

    // 로그인 되어있지 않을 때
  } else {
    const mySigninButton = document.createElement("button");
    mySigninButton.setAttribute("onclick", "moveSignIn()");
    mySigninButton.innerText = "로그인";
    const mySignUpButton = document.createElement("button");
    mySignUpButton.setAttribute("onclick", "moveSignUp()");
    mySignUpButton.innerText = "회원가입";
    buttonBox.append(mySigninButton);
    buttonBox.append(mySignUpButton);
  }
};

// 마이페이지 이동
function moveProfile() {
  console.log("눌려");
  window.location.replace(`${frontend_base_url}/doc/profile.html`);
}

// 글 작성 페이지 이동
function movePost() {
  window.location.replace(`${frontend_base_url}/doc/post.html`);
}

// 로그인 이동
function moveSignIn() {
  window.location.replace(`${frontend_base_url}/doc/login.html`);
}
