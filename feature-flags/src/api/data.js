const dummyApiResponse = {
  showLightAndDarkMode: false,
  showRandomColorGenerator: false,
  showAccordion: true,
  showTreeView: true,
  showQRCodeGenerator: true,
};

const featureFlagsDataServiceCall = () => {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      setTimeout(resolve(dummyApiResponse), 1000);
    } else {
      reject({
        message:
          'There is some problem with the api response. Please try again!',
      });
    }
  });
};

export default featureFlagsDataServiceCall;
