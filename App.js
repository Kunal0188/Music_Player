
// Login

// const close = document.querySelector(".close_btn");
// const newContainer = document.querySelector(".new_container");
// setTimeout(() => {
//    newContainer.classList.add("active1");
//    close.addEventListener("click", () =>{
//       newContainer.classList.remove("active1");
//    });
// }, 2000);


// function checkSignupOrLogin() {
//    const email = document.getElementById("emailInput").value;
//    const registeredEmails = JSON.parse(localStorage.getItem("registeredEmails")) || [];

//    if (registeredEmails.includes(email)) {
//       // Email is registered, redirect to the login page
//       window.location.href = "Login.html";
//    } else {
//       // Email is not registered, redirect to signup and add it to the list
//       registeredEmails.push(email);
//       localStorage.setItem("registeredEmails", JSON.stringify(registeredEmails));
//       window.location.href = "Signup.html";
//    }
// }






// Search

const searchSongs = () => {
   let top = document.getElementById("searchbar").value.toUpperCase();
   let searchname = document.querySelectorAll(".name");

   for (var i = 0; i < searchname.length; i++) {
      let a = searchname[i].getElementsByTagName("h4")[0];
      let textValue = a.innerHTML;

      if (textValue.toUpperCase().indexOf(top) > -1) {
         searchname[i].style.color = "white";

         if (top == "") {
            searchname[i].style.color = "black";
         }
      }
      else {
         searchname[i].style.color = "black";
      }
   }
}


// Slider

const left_artist_slider = document.getElementById("left_artist_slider");
const right_artist_slider = document.getElementById("right_artist_slider");
const left_trend_slider = document.getElementById("left_trend_slider");
const right_trend_slider = document.getElementById("right_trend_slider");
const left_english_slider = document.getElementById("left_english_slider");
const right_english_slider = document.getElementById("right_english_slider");
const outer = document.getElementsByClassName("outer")[0];
const outer1 = document.getElementsByClassName("outer")[1];
const outer2 = document.getElementsByClassName("outer")[2];


left_artist_slider.addEventListener("click", () => {
   outer.scrollLeft -= 200;
});

right_artist_slider.addEventListener("click", () => {
   outer.scrollLeft += 200;
});

left_trend_slider.addEventListener("click", () => {
   outer1.scrollLeft -= 200;
});

right_trend_slider.addEventListener("click", () => {
   outer1.scrollLeft += 200;
});

left_english_slider.addEventListener("click", () => {
   outer2.scrollLeft -= 200;
});

right_english_slider.addEventListener("click", () => {
   outer2.scrollLeft += 200;
});



// Music Play

const wave = document.querySelector(".wave");
const progress = document.getElementById("progress");
const song = document.getElementById("ctrlsong");
const playbtn = document.getElementById("play");
const back_button = document.getElementById("back");
const forward_button = document.getElementById("next");
const current_time = document.querySelector(".current_time");
const song_duration = document.querySelector(".song_duration");
const play_container = document.querySelector(".play_container");
let poster = document.getElementById("song_poster");
let song_title = document.querySelector(".song_title");
let subtitle = document.querySelector(".subtitle");


current_time.innerHTML = song.currentTime;
song_duration.innerHTML = song.duration;

// code on line 117 if(song.play())

function playPause() {
   if (playbtn.classList.contains("fa-pause")) {
      song.pause();
      wave.classList.remove("active");
      playbtn.classList.remove("fa-pause");
      playbtn.classList.add("fa-play");
   }
   else {
      song.play();
      wave.classList.add("active");
      playbtn.classList.add("fa-pause");
      playbtn.classList.remove("fa-play");
   }
}

progress.onchange = function () {

   if (song.play()) {
      setInterval(() => {
         progress.value = song.currentTime;
         current_time.innerHTML = formatTime(song.currentTime);
      }, 1000);
   }

   song.play();
   song.currentTime = progress.value;
   playbtn.classList.add("fa-pause");
   playbtn.classList.remove("fa-play");
}

current_time.innerHTML = "00:00";
setTimeout(() => {
   progress.max = song.duration;
   song_duration.innerHTML = formatTime(song.duration);
}, 300);

const formatTime = (time) => {
   let min = Math.floor(time / 60);
   if (min < 10) {
      min = `${min}`;
   }
   let sec = Math.floor(time % 60);
   if (sec < 10) {
      sec = `0${sec}`;
   }
   return `${min}:${sec}`;
}



const list = [
   {
      id: 1,
      photo: "https://c.saavncdn.com/348/Kisi-Ka-Bhai-Kisi-Ki-Jaan-Hindi-2023-20230427184704-50x50.jpg",
      audio: "Songs/Naiyo Lagda.mp3",
      title_name: "Naiyo Lagda",
      singer: "Kamaal Khan, Himesh Reshammiya"
   },
   {
      id: 2,
      photo: "https://c.saavncdn.com/820/Sanam-Teri-Kasam-Hindi-2016-20230430081750-50x50.jpg",
      audio: "Songs/Sanam Teri Kasam.mp3",
      title_name: "Sanam Teri Kasam",
      singer: "Ankit Tiwari, Palak Muchhal"
   },
   {
      id: 3,
      photo: "https://c.saavncdn.com/807/Pathaan-Hindi-2022-20221222104158-50x50.jpg?bch=469400",
      audio: "Songs/Jhoome Jo Pathaan.mp3",
      title_name: "Pathaan",
      singer: "Vishal & Shekhar"
   },
   {
      id: 4,
      photo: "https://c.saavncdn.com/424/Zihaal-e-Miskin-Hindi-2023-20230523053359-50x50.jpg?bch=469400",
      audio: "Songs/Zihaal e Miskin.mp3",
      title_name: "Zihaal e Miskin",
      singer: "Javed-Mohsin"
   },
   {
      id: 5,
      photo: "https://img.wynk.in/unsafe/50x50/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431940162_20230523110723/8903431940162/1684821317057/resources/8903431940162.jpg",
      audio: "Songs/Khoobsurat.mp3",
      title_name: "Khoobsurat",
      singer: "Rohanpreet Singh"
   },
   {
      id: 6,
      photo: "https://img.wynk.in/unsafe/50x50/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8902894361903_20230317115748/8902894361903/1679205263918/resources/8902894361903.jpg",
      audio: "Songs/O Bedardeya.mp3",
      title_name: "O Bedardeya",
      singer: "Arijit Singh"
   },
   {
      id: 7,
      photo: "https://c.saavncdn.com/762/Dil-Se-Dil-Tak-From-Bawaal-Hindi-2023-20230724135623-50x50.jpg",
      audio: "Songs/Dil Se Dil Tak.mp3",
      title_name: "Dil Se Dil Tak",
      singer: "Lakshay Kapoor, Akashdeep Sengupta"
   },
   {
      id: 8,
      photo: "https://c.saavncdn.com/984/Parmanu-Hindi-2018-20180731-50x50.jpg",
      audio: "Songs/Jitni Dafa.mp3",
      title_name: "Jitni Dafa",
      singer: "Yasser Desai"
   },
   {
      id: 9,
      photo: "https://c.saavncdn.com/303/Pasoori-Nu-From-Satyaprem-Ki-Katha-Hindi-2023-20230712195355-50x50.jpg",
      audio: "Songs/Pasoori Nu.mp3",
      title_name: "Pasoori Nu",
      singer: "Arijit Singh, Tulsi Kumar, Rochak Kohli"
   },
   {
      id: 10,
      photo: "https://c.saavncdn.com/646/Achha-Sila-Diya-Hindi-2023-20230112201105-50x50.jpg",
      audio: "Songs/Achha Sila Diya.mp3",
      title_name: "Achha Sila Diya",
      singer: "Jaani, B Praak, Nikhil-Vinay"
   },
   {
      id: 11,
      photo: "https://c.saavncdn.com/526/Barsaat-Aa-Gayi-Hindi-2023-20230612053506-50x50.jpg",
      audio: "Songs/Barsaat Aa Gayi.mp3",
      title_name: "Barsaat Aa Gayi",
      singer: "Shreya Ghoshal, Stebin Ben, Javed-Mohsin"
   },
   {
      id: 12,
      photo: "https://c.saavncdn.com/379/Talaash-Hindi-2012-20221213035735-50x50.jpg",
      audio: "Songs/Jee Le Zaraa.mp3",
      title_name: "Jee Le Zaraa",
      singer: "Vishal Dadlani"
   },
   {
      id: 13,
      photo: "https://c.saavncdn.com/286/WMG_190295851286-English-2017-50x50.jpg",
      audio: "Songs/Perfect.mp3",
      title_name: "Perfect",
      singer: "Ed Sheeran"
   },
   {
      id: 14,
      photo: "https://c.saavncdn.com/473/The-Night-We-Met-English-2015-50x50.jpg",
      audio: "Songs/The Night We Met.mp3",
      title_name: "The Night We Met",
      singer: "Lord Huron"
   },
   {
      id: 15,
      photo: "https://c.saavncdn.com/168/Something-Just-Like-This-English-2017-50x50.jpg",
      audio: "Songs/Something Just Like This.mp3",
      title_name: "Something Just Like This",
      singer: "The Chainsmokers, Coldplay"
   },
   {
      id: 16,
      photo: "https://c.saavncdn.com/981/Faded-English-2015-50x50.jpg",
      audio: "Songs/Faded.mp3",
      title_name: "Faded",
      singer: "Alan Walker"
   },
   {
      id: 17,
      photo: "https://c.saavncdn.com/184/Furious-7-Original-Motion-Picture-Soundtrack-English-2015-20190607044638-50x50.jpg",
      audio: "Songs/See You Again.mp3",
      title_name: "See You Again",
      singer: "Wiz Khalifa"
   },
   {
      id: 18,
      photo: "https://c.saavncdn.com/580/Despacito-Latin-2017-50x50.jpg",
      audio: "Songs/Despacito.mp3",
      title_name: "Despacito",
      singer: "Luis Fonsi, Daddy Yankee"
   },
   {
      id: 19,
      photo: "https://c.saavncdn.com/302/Into-Your-Arms-feat-Ava-Max--English-2018-20190607042118-50x50.jpg",
      audio: "Songs/Into Your Arms.mp3",
      title_name: "Into Your Arms",
      singer: "Witt Lowry"
   },
   {
      id: 20,
      photo: "https://c.saavncdn.com/827/Lost-on-You-English-2017-20190604210140-50x50.jpg",
      audio: "Songs/Lost On You.mp3",
      title_name: "Lost On You",
      singer: "LP"
   },
   {
      id: 21,
      photo: "https://c.saavncdn.com/236/Live-A-Life-You-Will-Remember-English-2021-20221214015843-50x50.jpg",
      audio: "Songs/The Nights.mp3",
      title_name: "The Nights",
      singer: "Avicii"
   },
   {
      id: 22,
      photo: "https://c.saavncdn.com/564/Ocean-Eyes-English-2009-20200605225257-50x50.jpg",
      audio: "Songs/Fireflies.mp3",
      title_name: "Fireflies",
      singer: "Owl City"
   },
   {
      id: 23,
      photo: "https://c.saavncdn.com/947/Out-Of-My-Mind-English-2020-20201114023136-50x50.jpg",
      audio: "Songs/Out Of My Mind.mp3",
      title_name: "Out Of My Mind",
      singer: "Cloudsparty, Musicbyarwy"
   },
   {
      id: 24,
      photo: "https://c.saavncdn.com/880/Up-All-Night-English-2012-50x50.jpg",
      audio: "Songs/What Makes You Beautiful.mp3",
      title_name: "What Makes You Beautiful",
      singer: "One Direction"
   }
]


let index = 0;

Array.from(document.getElementsByClassName("photo")).forEach((e) => {
   e.addEventListener("click", (el) => {
      index = el.target.id;

      song_title.innerHTML = list[index - 1].title_name;
      subtitle.innerHTML = list[index - 1].singer;
      poster.src = list[index - 1].photo;
      song.src = list[index - 1].audio;

      let musicTitle = list.filter((elm) => {
         return elm.id == index;
      })

      musicTitle.forEach(element => {
         let { title_name } = element;
         song_title.innerHTML = title_name;
      })

      song.play();
      wave.classList.add("active");
      playbtn.classList.add("fa-pause");
      playbtn.classList.remove("fa-play");

      song.onloadedmetadata = function () {
         progress.max = song.duration;
         progress.value = song.currentTime;
      }

      if (song.play()) {
         play_container.style.transform = "translateY(0px)";
         setInterval(() => {
            progress.value = song.currentTime;
            current_time.innerHTML = formatTime(song.currentTime);
         }, 1000);
      }

      current_time.innerHTML = "00:00";
      setTimeout(() => {
         progress.max = song.duration;
         song_duration.innerHTML = formatTime(song.duration);
      }, 300);

      const formatTime = (time) => {
         let min = Math.floor(time / 60);
         if (min < 10) {
            min = `${min}`;
         }
         let sec = Math.floor(time % 60);
         if (sec < 10) {
            sec = `0${sec}`;
         }
         return `${min}:${sec}`;
      }
   })
});



back.addEventListener("click", () => {
   index -= 1;

   song_title.innerHTML = list[index - 1].title_name;
   subtitle.innerHTML = list[index - 1].singer;
   poster.src = list[index - 1].photo;
   song.src = list[index - 1].audio;

   let musicTitle = list.filter((elm) => {
      return elm.id == index;
   })

   musicTitle.forEach(element => {
      let { title_name } = element;
      song_title.innerHTML = title_name;
   })

   song.play();
   wave.classList.add("active");
   playbtn.classList.add("fa-pause");
   playbtn.classList.remove("fa-play");

   song.onloadedmetadata = function () {
      progress.max = song.duration;
      progress.value = song.currentTime;
   }

   if (song.play()) {
      setInterval(() => {
         progress.value = song.currentTime;
         current_time.innerHTML = formatTime(song.currentTime);
      }, 1000);
   }

   current_time.innerHTML = "00:00";
   setTimeout(() => {
      progress.max = song.duration;
      song_duration.innerHTML = formatTime(song.duration);
   }, 300);

   const formatTime = (time) => {
      let min = Math.floor(time / 60);
      if (min < 10) {
         min = `${min}`;
      }
      let sec = Math.floor(time % 60);
      if (sec < 10) {
         sec = `0${sec}`;
      }
      return `${min}:${sec}`;
   }
});


next.addEventListener("click", () => {
   index++;

   song_title.innerHTML = list[index - 1].title_name;
   subtitle.innerHTML = list[index - 1].singer;
   poster.src = list[index - 1].photo;
   song.src = list[index - 1].audio;

   let musicTitle = list.filter((elm) => {
      return elm.id == index;
   })

   musicTitle.forEach(element => {
      let { title_name } = element;
      song_title.innerHTML = title_name;
   })

   song.play();
   wave.classList.add("active");
   playbtn.classList.add("fa-pause");
   playbtn.classList.remove("fa-play");

   song.onloadedmetadata = function () {
      progress.max = song.duration;
      progress.value = song.currentTime;
   }

   if (song.play()) {
      setInterval(() => {
         progress.value = song.currentTime;
         current_time.innerHTML = formatTime(song.currentTime);
      }, 1000);
   }

   current_time.innerHTML = "00:00";
   setTimeout(() => {
      progress.max = song.duration;
      song_duration.innerHTML = formatTime(song.duration);
   }, 300);

   const formatTime = (time) => {
      let min = Math.floor(time / 60);
      if (min < 10) {
         min = `${min}`;
      }
      let sec = Math.floor(time % 60);
      if (sec < 10) {
         sec = `0${sec}`;
      }
      return `${min}:${sec}`;
   }
});


// Volume

let vol_icon = document.getElementById("vol_icon");
let vol_progress = document.getElementById("vol_progress");

vol_progress.addEventListener("change", () => {
   if (vol_progress.value == 0) {
      vol_icon.classList.remove("fa-volume-high");
      vol_icon.classList.remove("fa-volume-low");
      vol_icon.classList.add("fa-volume-xmark");
   }
   if (vol_progress.value > 0) {
      vol_icon.classList.remove("fa-volume-high");
      vol_icon.classList.remove("fa-volume-xmark");
      vol_icon.classList.add("fa-volume-low");
   }
   if (vol_progress.value > 50) {
      vol_icon.classList.add("fa-volume-high");
      vol_icon.classList.remove("fa-volume-low");
      vol_icon.classList.remove("fa-volume-xmark");
   }

   let vol = vol_progress.value;
   song.volume = vol / 100;
});


