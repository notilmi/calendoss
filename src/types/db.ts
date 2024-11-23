export type User = {
  id: string;
  email: string;
  password: string;
  fullName: string | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Room = {
  id: string;
  title: string;
  description: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Reservation = {
  id: string;
  timePeriod: [Date, Date];
  roomId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};
