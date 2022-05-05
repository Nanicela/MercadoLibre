
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
      let products = {}
      for (const position in items) {
        const prod = items.filter((product) => product.category_id === items[position].category_id)
        if (prod.length > counterCategories) {
          products = prod
          counterCategories = prod.length
          mostRepeatedCategory = items[position].category_id
        }
      }
      const category = res.data.categories.filter((category) => category.id === mostRepeatedCategory)
      let nameCategory = ""
      for(const position in category){
        nameCategory = category[position].name
      }

      //categoria a mostrar y productos con esa categoria.
      console.log(nameCategory)
      console.log(products)

      setResults(items)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <BreadCrumb />
      {results.map(item => (
        <ProductPreview product={item} key={item.id}></ProductPreview>
      ))}
    </>
  );
};

export default Results;