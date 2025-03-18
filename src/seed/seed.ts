import bcryptjs from 'bcryptjs';

interface SeedLotes {
  title: string;
  slug: string;
  portada: string;
  videoId: string;
  state: true | false;
  order: number;
}

interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

interface SeedData {
  users: SeedUser[];
  lotes: SeedLotes[];
}

export const initialData: SeedData = {
  users: [
    {
      name: 'Admin',
      email: 'admin@admin.com',
      password: bcryptjs.hashSync( '123456' ),
      role: 'admin'
    },
    {
      name: 'Usuario',
      email: 'usuario@usuario.com',
      password: bcryptjs.hashSync( '123456' ),
      role: 'user',
    },
  ],
  lotes: [
    {
      title: 'Lote 1',
      slug: 'lote-1',
      portada: 'NELORE DE ORO 2024-04.jpg',
      videoId: '4Kj4Lf_CMyo',
      state: true,
      order: 1
    },
    {
      title: 'Lote 2',
      slug: 'lote-2',
      portada: 'NELORE DE ORO 2024-05.jpg',
      videoId: 'QxVOxB2BVBs',
      state: false,
      order: 2
    },
    {
      title: 'Lote 3',
      slug: 'lote-3',
      portada: 'NELORE DE ORO 2024-06.jpg',
      videoId: 'cUFvrEaLavs',
      state: true,
      order: 3
    },
    // {
    //   title: 'Lote 4',
    //   slug: 'lote-4',
    //   portada: 'NELORE DE ORO 2024-07.jpg',
    //   videoId: 'JlPposGs5H4',
    //   state: true,
    //   order: 4
    // },
    // {
    //   title: 'Lote 5',
    //   slug: 'lote-5',
    //   portada: 'NELORE DE ORO 2024-08.jpg',
    //   videoId: 'UCEf_m0Ao6E',
    //   state: true,
    //   order: 5
    // },
    // {
    //   title: 'Lote 6',
    //   slug: 'lote-6',
    //   portada: 'NELORE DE ORO 2024-09.jpg',
    //   videoId: 'gKOD63djKlc',
    //   state: true,
    //   order: 6
    // },
    // {
    //   title: 'Lote 7',
    //   slug: 'lote-7',
    //   portada: 'NELORE DE ORO 2024-10.jpg',
    //   videoId: '_CG2-S6nyf8',
    //   state: true,
    //   order: 7
    // },
    // {
    //   title: 'Lote 8',
    //   slug: 'lote-8',
    //   portada: 'NELORE DE ORO 2024-11.jpg',
    //   videoId: 'JhMVovMzw64',
    //   state: true,
    //   order: 8
    // },
    // {
    //   title: 'Lote 9',
    //   slug: 'lote-9',
    //   portada: 'NELORE DE ORO 2024-12.jpg',
    //   videoId: 'WhaxZOtj-K0',
    //   state: true,
    //   order: 9
    // },
    // {
    //   title: 'Lote 10',
    //   slug: 'lote-10',
    //   portada: 'NELORE DE ORO 2024-13.jpg',
    //   videoId: 'sWNr8TVojtY',
    //   state: true,
    //   order: 10
    // },
    // {
    //   title: 'Lote 11',
    //   slug: 'lote-11',
    //   portada: 'NELORE DE ORO 2024-14.jpg',
    //   videoId: 'diTqXtTC1ac',
    //   state: true,
    //   order: 11
    // },
    // {
    //   title: 'Lote 12',
    //   slug: 'lote-12',
    //   portada: 'NELORE DE ORO 2024-15.jpg',
    //   videoId: 'hXgzfJZH_8s',
    //   state: true,
    //   order: 12
    // },
    // {
    //   title: 'Lote 13',
    //   slug: 'lote-13',
    //   portada: 'NELORE DE ORO 2024-16.jpg',
    //   videoId: 'V4BxLu4Niyw',
    //   state: true,
    //   order: 13
    // },
    // {
    //   title: 'Lote 14',
    //   slug: 'lote-14',
    //   portada: 'NELORE DE ORO 2024-17.jpg',
    //   videoId: 'fNXQujnSHuQ',
    //   state: true,
    //   order: 14
    // },
    // {
    //   title: 'Lote 15',
    //   slug: 'lote-15',
    //   portada: 'NELORE DE ORO 2024-18.jpg',
    //   videoId: 'a7o6mHJUQpo',
    //   state: true,
    //   order: 15
    // },
    // {
    //   title: 'Lote 16',
    //   slug: 'lote-16',
    //   portada: 'NELORE DE ORO 2024-19.jpg',
    //   videoId: 'keYWxwb5iZc',
    //   state: true,
    //   order: 16
    // },
    // {
    //   title: 'Lote 17',
    //   slug: 'lote-17',
    //   portada: 'NELORE DE ORO 2024-20.jpg',
    //   videoId: 'XUs5UTwUDSQ',
    //   state: true,
    //   order: 17
    // },
    // {
    //   title: 'Lote 18',
    //   slug: 'lote-18',
    //   portada: 'NELORE DE ORO 2024-21.jpg',
    //   videoId: 'HuZI4dEmObo',
    //   state: true,
    //   order: 18
    // },
    // {
    //   title: 'Lote 19',
    //   slug: 'lote-19',
    //   portada: 'NELORE DE ORO 2024-22.jpg',
    //   videoId: 'A30z3Sdnjio',
    //   state: true,
    //   order: 19
    // },
    // {
    //   title: 'Lote 20',
    //   slug: 'lote-20',
    //   portada: 'NELORE DE ORO 2024-23.jpg',
    //   videoId: 'tD4RdhfTx5g',
    //   state: true,
    //   order: 20
    // },
    // {
    //   title: 'Lote 21',
    //   slug: 'lote-21',
    //   portada: 'NELORE DE ORO 2024-24.jpg',
    //   videoId: 'QhajPcp0h0E',
    //   state: true,
    //   order: 21
    // },
    // {
    //   title: 'Lote 22',
    //   slug: 'lote-22',
    //   portada: 'NELORE DE ORO 2024-25.jpg',
    //   videoId: '9zKtrakn73A',
    //   state: true,
    //   order: 22
    // },
    // {
    //   title: 'Lote 23',
    //   slug: 'lote-23',
    //   portada: 'NELORE DE ORO 2024-26.jpg',
    //   videoId: 'Bqkjzm_a41M',
    //   state: true,
    //   order: 23
    // },
    // {
    //   title: 'Lote 24',
    //   slug: 'lote-24',
    //   portada: 'NELORE DE ORO 2024-27.jpg',
    //   videoId: 'StnhFcNC1-0',
    //   state: true,
    //   order: 24
    // },
    // {
    //   title: 'Lote 25',
    //   slug: 'lote-25',
    //   portada: 'NELORE DE ORO 2024-28.jpg',
    //   videoId: 'P8MIIXMVMS4',
    //   state: true,
    //   order: 25
    // },
    // {
    //   title: 'Lote 26',
    //   slug: 'lote-26',
    //   portada: 'NELORE DE ORO 2024-29.jpg',
    //   videoId: 'wJacG_JhqRQ',
    //   state: true,
    //   order: 26
    // },
    // {
    //   title: 'Lote 27',
    //   slug: 'lote-27',
    //   portada: 'NELORE DE ORO 2024-30.jpg',
    //   videoId: '364ebTxErUQ',
    //   state: true,
    //   order: 27
    // },
    // {
    //   title: 'Lote 28',
    //   slug: 'lote-28',
    //   portada: 'NELORE DE ORO 2024-31.jpg',
    //   videoId: '0JZ8xGvixEE',
    //   state: true,
    //   order: 28
    // },
  ]
};