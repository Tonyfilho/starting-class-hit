interface data {
  avatar: string,
  email: string,
  first_name: string,
  id: number,
  last_name: string,
}

interface support {
  text: string,
  url: string,
}






export interface IReqRes {
  data: data[],
  page: number,
  per_page: number,
  support: support,
  total: number,
  total_pages: number,
}
