import { Component } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { decodeEntities } from "@wordpress/html-entities";
class LatestPostEdit extends Component {
  render() {
    const { posts, className } = this.props;

    return (
      <div>
        {posts && posts.length > 0 ? (
          <ul className={className}>
            {posts.map(post => (
              <li key={post.id}>
                <a target="blank" rel="noopener noreferrer" href={post.link}>
                  {decodeEntities(post.title.rendered)}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            {posts
              ? __("No Posts Found", "mytheme-blocks")
              : __("Loading...", "mytheme-blocks")}
          </div>
        )}
      </div>
    );
  }
}

export default withSelect((select, props) => {
  const { attributes } = props;
  const { numberOfPosts } = attributes;
  let query = { per_page: numberOfPosts };
  return {
    posts: select("core").getEntityRecords("postType", "post", query)
  };
})(LatestPostEdit);
