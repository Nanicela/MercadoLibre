
import React, { useEffect, useState } from 'react';
import { ProductPreview } from "./../components/ProductPreview";
import { useLocation } from 'react-router-dom';
import axios from "axios"
import { BreadCrumb } from "./../components/BreadCrumb";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Results = () => {
  const [results, setResults] = useState([]);
  const [category, setCategory] = useState([]);
  let query = useQuery();
  useEffect(() => {
    axios.get('http://localhost:3001/search', {
      withCredentials: false,
      params: {
        keyword: query.get("search"),
        limit: 4
      }
    }).then(res => {
      const items = res.data.items
      let mostRepeatedCategory = ""
      let counterCategories = 0
      for (const position in items) {
        const prod = items.filter((product) => product.category_id === items[position].category_id)
        if (prod.length > counterCategories) {
          counterCategories = prod.length
          mostRepeatedCategory = items[position].category_id
        }
      }
      const category = res.data.categories.filter((category) => category.id === mostRepeatedCategory)
      let nameCategory = ""
      for(const position in category){
        nameCategory = category[position].name
      }

      setResults(items)
      setCategory(nameCategory)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <BreadCrumb items={results} category={category}/>
      {results.map(item => (
        <ProductPreview product={item} key={item.id}></ProductPreview>
      ))}
    </>
  );
};

export default Results;