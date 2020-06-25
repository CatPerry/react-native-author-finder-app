export type PostDetailsModel = {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  author: {
    id: string;
    name: string;
  };
};

export default PostDetailsModel;
