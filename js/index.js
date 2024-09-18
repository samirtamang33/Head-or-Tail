const username_submit = (event) => {
  event.preventDefault();
  //alert("submited");
  const username = document.getElementById("username").value;
  if (username.length < 5) {
    alert("Username must be at least 5 characters long!");
    return;
  }

  //import username value to game-section
  document.getElementById("user").innerHTML = username;

  //hide username-section
  document.getElementById("username-section").style.display = "none";

  //show game-section
  document.getElementById("game-section").style.display = "block";
};

const start_game = (side) => {
  document.getElementById("flipping").style.display = "block";
  document.getElementById("result").style.display = "none";

  setTimeout(() => {
    get_results(side);
    document.getElementById("flipping").style.display = "none";
    document.getElementById("result").style.display = "block";
  }, 2000);
  // alert(side);
};

const get_results = (side) => {
  const coin_side = Math.floor(Math.random() * (2 - 1 + 1) + 1);
  let flipped_side = "";
  if (coin_side === 1) {
    flipped_side = "Head";
  } else {
    flipped_side = "Tail";
  }
  document.getElementById("result").innerHTML =
    "Coin was flipped and result was:" + flipped_side;
  if (coin_side === 1) {
    //head
    if (side === "head") {
      alert("Won!");
    } else {
      alert("Lost");
    }
  } else {
    //tail
    if (side === "tail") {
      alert("Won!");
    } else {
      alert("Lost");
    }
  }
};

const won = () => {
  setTimeout(() => {
    alert("You Won!");
  }, 1000);
};

const lost = () => {
  setTimeout(() => {
    alert("You Lost");
  }, 1000);
};
