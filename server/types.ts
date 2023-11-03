import { channel, message } from "@prisma/client";
import { RequestHandler } from "express";

export interface User {
  id?: string;
  userName: string;
  nickName: string;
  email: string;
  password: string;
  dateOfBirth: string | Date;
}

export interface Server {
  id: string;
  name: string;
  ownerId: string;
  createdAt: string | Date;
  categories?: Category[];
  members?: User[];
}

export interface Category {
  id: string;
  name: string;
  createdAt: string | Date;
  channels?: Channel[];
  serverId: string;
}

export interface Channel {
  id: string;
  name: string;
  createdAt: string | Date;
  serverId?: string;
  categoryId: string;
  messages?: Message[];
}

export interface Message {
  id: string;
  content: string;
  createdAt: string | Date;
  channelId: string;
}

export type ExpressHandler<RequestBody, ResposeBody> = RequestHandler<
  any,
  Partial<ResposeBody>,
  Partial<RequestBody>,
  any
>;

// auth

export type signupRequest = User;
export type signupResponse = {};
export type loginRequest = Pick<User, "email" | "password">;
export type loginResponse = {};

// error
export interface error {
  msg: string;
}

// server
export type createServerRequest = Omit<Server, "id" | "ownerId" | "createdAt">;
export type createServerResponse = Server | error;

export type editServerRequest = { name: string };
export type editServerResponse = Server | error;

export type deleteServerRequest = {};
export type deleteServerResponse = Server | error;

export type getServerRequest = {};
export type getServerResponse = Server | error;

export type addUserToServerRequest = {};
export type addUserToServerResponse = {} | error;

// channel

export type createChannelRequest = Omit<
  Channel,
  "id" | "createdAt" | "messages"
>;
export type createChannelResponse = Channel | error;
export type updateChannelRequest = Pick<Channel, "name">;
export type updateChannelResponse = Channel | error;
export type deleteChannelRequest = {};
export type deleteChannelResponse = {};
export type getChannelRequest = {};
export type getChannelResponse = Channel | error;

// messages

export type getMessagesRequest = {};
export type getMessagesResponse = Message | error;

// category

export type createCategoryRequest = Pick<Category, "name">;
export type createCategoryResponse = Category | error;


export type deleteCategoryRequest = {};
export type deleteCategoryResponse = {} | error;

export type editCategoryRequest = Pick<Category,"name">;
export type editCategoryResponse =Omit<Category,"channels">| error;


export type getCategoriesRequest = {};
export type getCategoryiesResponse =Category[]| error;