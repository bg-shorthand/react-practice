import { useEffect, useState } from "react";
import { getAllData } from "../../fbAPI";

const BookmarkList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let newList = [];

      const data = await getAllData();
      console.log(data);
      data.forEach((item) => (newList = [...newList, item.data()]));

      console.log(newList);

      setList([...newList]);
    };
    getList();
  }, []);

  return (
    <ul>
      {list.map((movie) => {
        return (
          <li key={movie.id} id={movie.id}>
            {movie.title}
          </li>
        );
      })}
    </ul>
  );
};

export default BookmarkList;
