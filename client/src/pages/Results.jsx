
import React, { useEffect, useState } from 'react';
import { ProductPreview } from "./../components/ProductPreview";
import { useLocation } from 'react-router-dom';
import axios from "axios";


function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Results = () => {
  const [results, setResults] = useState([]);

  let query = useQuery();

  useEffect(() => {
    search();
  }, [])


  const search = () => {

    axios.get('http://localhost:3001/search', {
      withCredentials: false,
      params: {
        keyword: query.get("search"),
        limit: 4
      }
    }).then(res => {
      setResults(res.data.success.results)
      console.log(res.data.success.results)
    }).catch(err => {
      console.log(err)
    })
  };

  console.log(query.get("search"))
  return (
    <>
      {results.map(item => (
        // <p key={item.id}>{item.title}</p>
        <ProductPreview product={item} key={item.id}></ProductPreview>
      ))}
    </>
  );
};

export default Results;