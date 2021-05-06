import { useSelector } from 'react-redux';

function Trending() {
  const tags = useSelector(state => state.trendingTags);

  return (
    <div className="sticky-top" style={{top: "9em"}}>
      <h5 className="text-black-30 font-weight-bold">
        Trending
      </h5>

      {tags.map(tag => (
        <div className="text-black-50 font-weight-bold">
          #{tag}
        </div>
      ))}
    </div>
  );
}

export default Trending;
