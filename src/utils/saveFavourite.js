import baseUrl from "./baseUrl.json";
import axios from "axios";

const saveFavourite = async (imgObj) => {
  const bozkovToken = localStorage.getItem("bozkovToken");

  const title = imgObj.title;
  const description = {
    artist: imgObj.artist,
    date: imgObj.date,
    moreInfoUrl: imgObj.description,
    tags: [],
  };

  //ide jön a bolb és a logikája
  const res = await fetch(imgObj.url, {
    mode: "no-cors",
  });

  const imgBlob = await res.blob();
  console.log(res.blob());

  const imgFile = await new File([imgBlob], "image.jpeg", {
    type: imgBlob.type,
  });
  console.log(imgFile);

  // const formdata = new FormData()
  // formdata.append("imgfile",imgFile)
  // formdata.append("title",title)
  // formdata.append("description",JSON.stringify(description))

  // const response = await fetch(baseUrl+"api/artwork",{
  //   method: "POST",
  //   headers: {
  //     "Content-type": "multipart/formdata",
  //     "Authorization": "Bearer "+bozkovToken
  //   },
  //   body: formdata
  // })

  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer "+bozkovToken
  );

  let formdata = new FormData();
  formdata.append("file", imgFile);
  formdata.append("title", title);
  formdata.append("description", description);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(baseUrl+"api/artwork", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  console.log(response.status);
};

export default saveFavourite;
