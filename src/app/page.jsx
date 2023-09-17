import Card from "@/components/card/Card";
import { IconTypes } from '../components/button/Button';
import config from '@/config';

const fetchBlogs = async () => {
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

const Home = async () => {
  try {
    const blogs = await fetchBlogs();
    console.log("blogs", blogs.data);

    return (
      <div className="container pb-80">
        <div className="row pt-80 pb-80">
          <h3>Read our tailered articles</h3>
        </div>
        <div className="row">
          {blogs.data.map(blog => (
            <div className="col col_4 m-mw-100" key={blog.id}>
              <Card
                className="mb-30"
                label={blog.attributes.Category}
                title={blog.attributes.Title}
                summary={blog.attributes.Summary}
                href={`/${blog.attributes.slug}`}
                imgSrc={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
                imgAlt="Thumbnail"
                btnIcon={IconTypes.ARROW_RIGHT}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    // Handle errors here, such as displaying an error message
    console.error('Error in Home component:', error);
    return (
      <div className="container">
        <p>There was an error loading the blogs. Please try again later.</p>
      </div>
    );
  }
};

export default Home;