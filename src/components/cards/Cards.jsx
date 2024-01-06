import Card from "../card/Card";
import { IconTypes } from '../button/Button';
import getBlogs from "@/hooks/getBlogs";

const Cards = async () => {
  try {
    const blogs = await getBlogs();
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

export default Cards;