export interface Status {
  id: number,
  name: string,
}

export interface Department {
  id: number,
  name: string,
}

export interface User {
  id: number,
  username: string,
  fullname: string,
  role: string
}

export interface Source {
  id: number,
  name: string
}

export interface Supply {
  id: number,
  created_date: string,
  status: Status,
  department: Department,
  title: string,
  amount: number,
  creator: User,
  reviewer?: User,
  source: Source
}

export interface Product {
  id: number,
  source_id: number,
  name: string,
  unit: string,
  price: number
}

export interface Sort {
  id: string,
  name: string
}
