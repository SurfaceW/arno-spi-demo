import get from 'lodash/get';

const getHref = () => get(window, 'location.href');
const getSearch = () => get(window, 'location.search');

interface IUrlHandeler {
  getHref(): string;
  getSearch(): string;
}

export const urlHandler: IUrlHandeler = {
  getHref,
  getSearch
}

