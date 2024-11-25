export type User = {
  id: string;
  email: string;
  password: string;
  emailVerified: Date | null;
  name: string | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Room = {
  id: string;
  title: string;
  description: string | null;
  userId: string;
  created_at: Date;
  updated_at: Date;
};

export type Reservation = {
  id: string;
  timePeriod: string;
  room_id: string;
  user_id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type VerificationToken = {
  identifier: string;
  expires: Date;
  token: string;
};

export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  id_token: string | null;
  scope: string | null;
  session_state: string | null;
  token_type: string | null;
};

export type Session = {
  id: string;
  userId: string;
  expires: Date;
  sessionToken: string;
};
