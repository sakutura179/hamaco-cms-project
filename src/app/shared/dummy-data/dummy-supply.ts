import { Supply } from "../models/data.model";

export const DUMMY_SUPPLIES: Supply[] = [
  {
    id: 1,
    created_date: '2024-08-12 00:00:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 1,
      name: 'Xe bơm'
    },
    title: 'Đề xuất mua vật tư xe bơm tháng 8',
    amount: 12000000,
    creator: {
      id: 1,
      username: 'NGUYENHAI',
      fullname: 'Nguyễn Văn Hải',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 2,
    created_date: '2024-08-12 00:00:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 1,
      name: 'Xe bơm'
    },
    title: 'Đề xuất thay nhớt xe 65C-12128',
    amount: 180000,
    creator: {
      id: 1,
      username: 'NGUYENHAI',
      fullname: 'Nguyễn Văn Hải',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 1,
      name: 'Nội bộ'
    }
  },
  {
    id: 3,
    created_date: '2024-08-13 00:00:00',
    status: {
      id: 3,
      name: 'Đã hủy'
    },
    department: {
      id: 1,
      name: 'Xe bơm'
    },
    title: 'Đăng kiểm xe 65C-12128',
    amount: 1800000,
    creator: {
      id: 1,
      username: 'NGUYENHAI',
      fullname: 'Nguyễn Văn Hải',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 4,
    created_date: '2024-08-13 00:10:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 3,
      name: 'Hành chính'
    },
    title: 'Đề xuất mua vật tư văn phòng tháng 8 2024',
    amount: 2430000,
    creator: {
      id: 2,
      username: 'NGUYENNGOC',
      fullname: 'Nguyễn Như Ngọc',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 5,
    created_date: '2024-08-13 00:10:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 3,
      name: 'Hành chính'
    },
    title: 'Đề xuất mua vật tư văn phòng tháng 8 2024',
    amount: 2530000,
    creator: {
      id: 2,
      username: 'NGUYENNGOC',
      fullname: 'Nguyễn Như Ngọc',
      role: 'user'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 6,
    created_date: '2024-08-12 00:00:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 1,
      name: 'Xe bơm'
    },
    title: 'Đề xuất mua vật tư xe bơm tháng 8',
    amount: 12000000,
    creator: {
      id: 1,
      username: 'NGUYENHAI',
      fullname: 'Nguyễn Văn Hải',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 7,
    created_date: '2024-08-12 00:00:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 1,
      name: 'Xe bơm'
    },
    title: 'Đề xuất thay nhớt xe 65C-12128',
    amount: 180000,
    creator: {
      id: 1,
      username: 'NGUYENHAI',
      fullname: 'Nguyễn Văn Hải',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 1,
      name: 'Nội bộ'
    }
  },
  {
    id: 8,
    created_date: '2024-08-13 00:00:00',
    status: {
      id: 2,
      name: 'Đã duyệt'
    },
    department: {
      id: 1,
      name: 'Xe bơm'
    },
    title: 'Đăng kiểm xe 65C-12128',
    amount: 1800000,
    creator: {
      id: 1,
      username: 'NGUYENHAI',
      fullname: 'Nguyễn Văn Hải',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 9,
    created_date: '2024-08-13 00:10:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 3,
      name: 'Hành chính'
    },
    title: 'Đề xuất mua vật tư văn phòng tháng 8 2024',
    amount: 2430000,
    creator: {
      id: 2,
      username: 'NGUYENNGOC',
      fullname: 'Nguyễn Như Ngọc',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 10,
    created_date: '2024-08-13 00:10:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 2,
      name: 'Xe bồn'
    },
    title: 'Đề xuất mua vật tư văn phòng tháng 8 2024',
    amount: 2530000,
    creator: {
      id: 2,
      username: 'NGUYENNGOC',
      fullname: 'Nguyễn Như Ngọc',
      role: 'user'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 11,
    created_date: '2024-08-12 00:00:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 1,
      name: 'Xe bơm'
    },
    title: 'Đề xuất mua vật tư xe bơm tháng 8',
    amount: 12000000,
    creator: {
      id: 1,
      username: 'NGUYENHAI',
      fullname: 'Nguyễn Văn Hải',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 12,
    created_date: '2024-08-12 00:00:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 1,
      name: 'Xe bơm'
    },
    title: 'Đề xuất thay nhớt xe 65C-12128',
    amount: 180000,
    creator: {
      id: 1,
      username: 'NGUYENHAI',
      fullname: 'Nguyễn Văn Hải',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 1,
      name: 'Nội bộ'
    }
  },
  {
    id: 13,
    created_date: '2024-08-13 00:00:00',
    status: {
      id: 2,
      name: 'Đã duyệt'
    },
    department: {
      id: 1,
      name: 'Xe bơm'
    },
    title: 'Đăng kiểm xe 65C-12128',
    amount: 1800000,
    creator: {
      id: 1,
      username: 'NGUYENHAI',
      fullname: 'Nguyễn Văn Hải',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 14,
    created_date: '2024-08-13 00:10:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 3,
      name: 'Hành chính'
    },
    title: 'Đề xuất mua vật tư văn phòng tháng 8 2024',
    amount: 2430000,
    creator: {
      id: 2,
      username: 'NGUYENNGOC',
      fullname: 'Nguyễn Như Ngọc',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 15,
    created_date: '2024-08-13 00:10:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 2,
      name: 'Xe bồn'
    },
    title: 'Đề xuất mua vật tư văn phòng tháng 8 2024',
    amount: 2530000,
    creator: {
      id: 2,
      username: 'NGUYENNGOC',
      fullname: 'Nguyễn Như Ngọc',
      role: 'user'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 16,
    created_date: '2024-08-12 00:00:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 1,
      name: 'Xe bơm'
    },
    title: 'Đề xuất mua vật tư xe bơm tháng 8',
    amount: 12000000,
    creator: {
      id: 1,
      username: 'NGUYENHAI',
      fullname: 'Nguyễn Văn Hải',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 17,
    created_date: '2024-08-12 00:00:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 1,
      name: 'Xe bơm'
    },
    title: 'Đề xuất thay nhớt xe 65C-12128',
    amount: 180000,
    creator: {
      id: 1,
      username: 'NGUYENHAI',
      fullname: 'Nguyễn Văn Hải',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 1,
      name: 'Nội bộ'
    }
  },
  {
    id: 18,
    created_date: '2024-08-13 00:00:00',
    status: {
      id: 2,
      name: 'Đã duyệt'
    },
    department: {
      id: 1,
      name: 'Xe bơm'
    },
    title: 'Đăng kiểm xe 65C-12128',
    amount: 1800000,
    creator: {
      id: 1,
      username: 'NGUYENHAI',
      fullname: 'Nguyễn Văn Hải',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 19,
    created_date: '2024-08-13 00:10:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 3,
      name: 'Hành chính'
    },
    title: 'Đề xuất mua vật tư văn phòng tháng 8 2024',
    amount: 2430000,
    creator: {
      id: 2,
      username: 'NGUYENNGOC',
      fullname: 'Nguyễn Như Ngọc',
      role: 'user'
    },
    reviewer: {
      id: 3,
      username: 'ADMIN',
      fullname: 'Lê Ngọc Thơ',
      role: 'admin'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  },
  {
    id: 20,
    created_date: '2024-08-13 00:10:00',
    status: {
      id: 1,
      name: 'Chờ duyệt'
    },
    department: {
      id: 3,
      name: 'Hành chính'
    },
    title: 'Đề xuất mua vật tư văn phòng tháng 8 2024',
    amount: 2530000,
    creator: {
      id: 2,
      username: 'NGUYENNGOC',
      fullname: 'Nguyễn Như Ngọc',
      role: 'user'
    },
    source: {
      id: 2,
      name: 'Mua ngoài'
    }
  }
]
