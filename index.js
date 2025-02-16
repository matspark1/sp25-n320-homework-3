async function getApiData() {
  console.log("getting api data");
  const digimonData = await fetch(`https://digimon-api.vercel.app/api/digimon`);

  try {
    const digimonData = await fetch(
      `https://digimon-api.vercel.app/api/digimon`
    );

    const apiJsonResponse = await digimonData.json();
    console.log(apiJsonResponse[0]);
  } catch (err) {
    console.log("API ERROR: " + err);
  }
}

getApiData();

// function getSlowResource(timerAmount) {
//   return new Promise(function (resolve, reject) {
//     if (timerAmount > 2000) {
//       reject("I'm not waiting for that");
//     } else {
//       setTimeout(function () {
//         resolve("YURRRRRRR");
//       }, timerAmount);
//     }
//   });
// }

// function run() {
//   getSlowResource(1000)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// run();
