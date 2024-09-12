import { User } from "../models/data.model";

export const DUMMY_USERS: User[] = [
  {
    id: 1,
    username: 'NGUYENHAI',
    fullname: 'Nguyễn Văn Hải',
    role: 'user',
    department: {
      id: 1,
    name: 'Xe bơm'
    }
  },
  {
    id: 2,
    username: 'NGUYENNGOC',
    fullname: 'Nguyễn Như Ngọc',
    role: 'user',
    department: {
      id: 3,
    name: 'Hành chính'
    }
  },
  {
    id: 3,
    username: 'NNCUA',
    fullname: 'Nguyễn Như Cua',
    role: 'user',
    department: {
      id: 2,
    name: 'Xe bồn'
    }
  },
  {
    id: 4,
    username: 'NVQKHANH',
    fullname: 'Nguyễn Vương Quốc Khánh',
    role: 'user',
    department: {
      id: 3,
    name: 'Hành chính'
    }
  },
  {
    id: 5,
    username: 'LNTHO',
    fullname: 'Lê Ngọc Thơ',
    role: 'admin'
  }
];
