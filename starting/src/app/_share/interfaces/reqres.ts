
interface data {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,

}

interface support {
  url: string,
  text: string,

}




export interface IReqres {
  data: data[],
  support: support,
  page: number,
  per_page: number,
  total_pages: string,
  total: string
}




