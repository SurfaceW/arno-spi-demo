console.log('hey');

const loadScript = async () => {
  const { urlHandler } = await import('./demo.spi');
  console.log(urlHandler.getHref());
  console.log(urlHandler.getSearch());
};

loadScript();