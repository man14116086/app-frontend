import { ISignIn, ISingUp, IUser } from "../providers/AuthProviders"

export const FAKE_CONTENT = {
  image:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  slug: "how-to-make-marn-app-12345678",
  title: "How to Make MERN App",
  author: {
    username: "jose",
    avatar:
      "https://avatars2.githubusercontent.com/u/27900029?s=460&u=14e9fba7f4077b842b70c6dee6441e96144af0ee&v=4",
  },
  likes: 1000,
  comments: 1299,
  views: 3012,
  publised: "1 hr",
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odit a quisquam!",
}

export const FAKE_TAGS = [
  {
    id: "1",
    name: "Machine Learning",
  },
  {
    id: "2",
    name: "Ai",
  },
  {
    id: "3",
    name: "React",
  },
]

export const FAKE_AUTHORS = [
  {
    avatar:
      "https://avatars2.githubusercontent.com/u/27900029?s=460&u=14e9fba7f4077b842b70c6dee6441e96144af0ee&v=4",
    bio: "Computer science students",
    name: "Jose Sitanggang",
    username: "jose",
  },
  {
    avatar:
      "https://avatars2.githubusercontent.com/u/27900029?s=460&u=14e9fba7f4077b842b70c6dee6441e96144af0ee&v=4",
    bio: "Math lover",
    name: "Alfredo",
    username: "alfred",
  },
]

export async function fakeSignInAndSignUpService(
  user: ISignIn | ISingUp
): Promise<IUser> {
  return Promise.resolve({
    avatar:
      "https://avatars2.githubusercontent.com/u/27900029?s=460&u=14e9fba7f4077b842b70c6dee6441e96144af0ee&v=4",
    username: "josestg",
    name: "Jose Sitanggang",
  })
}
export async function fakeGetMeService(token: string) {
  return Promise.resolve({
    avatar:
      "https://avatars2.githubusercontent.com/u/27900029?s=460&u=14e9fba7f4077b842b70c6dee6441e96144af0ee&v=4",
    username: "josestg",
    name: "Jose Sitanggang",
  })
}