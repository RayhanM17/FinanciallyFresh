import config from '@/config';

const getBlogs = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  };

  try {
    const request = await fetch(`${config.api}/api/blogs?populate=*`, reqOptions);
    const response = await request.json();
    return response;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error; // Rethrow the error for handling at a higher level
  }
};

export default getBlogs