const memoGal = import.meta.glob("../assets/images/FinalMemories/*.{png,jpg}");
const compGal = import.meta.glob(
  "../assets/images/AttCompanionFinal/*.{png,jpg}"
);
const ecoGal = import.meta.glob("../assets/images/Ecosorter/*.{png,jpg}");
const attenGal = import.meta.glob("../assets/images/FinalAttendex/*.{png,jpg}");
const wthrGal = import.meta.glob("../assets/images/FinalWeather/*.{png,jpg}");
const mtgGal = import.meta.glob("../assets/images/FinalMTG/*.{png,jpg}");
const iamGal = import.meta.glob("../assets/images/FinalIam/*.{png,jpg}");
const manoGal = import.meta.glob("../assets/images/FinalManoyatra/*.{png,jpg}");

const miscellaGal = import.meta.glob(
  "../assets/images/MiscellaFinal/*.{png,jpg}"
);

async function collectImages(glob) {
  const promises = Object.keys(glob).map(async (path) => {
    const module = await glob[path]();
    return module.default;
  });
  return Promise.all(promises);
}

const collectAllImages = async () => {
  const [
    memoImgs,
    compImgs,
    ecoImgs,
    attenImgs,
    wthrImgs,
    miscellaImgs,
    mtgImgs,
    iamImgs,
    manoImgs,
  ] = await Promise.all([
    collectImages(memoGal),
    collectImages(compGal),
    collectImages(ecoGal),
    collectImages(attenGal),
    collectImages(wthrGal),
    collectImages(miscellaGal),
    collectImages(mtgGal),
    collectImages(iamGal),
    collectImages(manoGal),
  ]);

  return {
    memoImgs,
    compImgs,
    ecoImgs,
    attenImgs,
    wthrImgs,
    miscellaImgs,
    mtgImgs,
    iamImgs,
    manoImgs,
  };
};

const {
  memoImgs,
  compImgs,
  ecoImgs,
  attenImgs,
  wthrImgs,
  miscellaImgs,
  mtgImgs,
  iamImgs,
  manoImgs,
} = await collectAllImages();
export {
  memoImgs,
  compImgs,
  ecoImgs,
  attenImgs,
  wthrImgs,
  miscellaImgs,
  mtgImgs,
  iamImgs,
  manoImgs,
};
