import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((el) => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
