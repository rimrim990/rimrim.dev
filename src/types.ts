export interface Post {
  id: string
  tag: string
  title: string
  subTitle: string
  content: string
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
}
