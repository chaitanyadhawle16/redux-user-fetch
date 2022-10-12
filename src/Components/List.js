import React, { useRef, useEffect, useState } from 'react'
import CardComponent from './CardComponent';
import { fetchData } from '../Redux/fetchData'; 
import { useDispatch, connect } from 'react-redux';
import { setPage, setLoading } from '../Redux/actions' 

const List = ({items, loading, page}) => {
  const dispatch = useDispatch();
  const [lastElement, setLastElement] = useState(null);


  const observer = useRef(
    new IntersectionObserver(
      (items) => {
        const first = items[0];
        if (first.isIntersecting) {
          dispatch(setPage(page + 1));
        }
      })
  );

  useEffect(() => {
    dispatch(setLoading(true))
    if (page <= 2)
      setTimeout(() => {
        dispatch(fetchData(page));
      }, 1000);
  }, [page,dispatch])

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (

    <div id="container" className='container'>
      <h1>User List</h1>
      {
        items.length > 0 && items.map((listItem, i) => {
          return i === items.length - 1 && !loading && page <= 2 ? 
          (
            <div key={listItem.id} ref={setLastElement} className="container">
              <CardComponent key={listItem.id} item={listItem} />
            </div>
          )
            : <CardComponent key={listItem.id} item={listItem} />
      })
      }
      {loading && <h1> Loading ... </h1>}
    </div>
  )
}
const mapStateToProps = (state) => ({
  items: state.items,
  loading : state.loading,
  page : state.page
});

export default connect(mapStateToProps)(List);