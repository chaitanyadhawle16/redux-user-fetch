import React, { useRef, useEffect, useState, useCallback } from 'react'
import CardComponent from './CardComponent';
import { fetchData } from '../Redux/fetchData'; 
import { useDispatch, connect } from 'react-redux';
import { setPage, setLoading } from '../Redux/actions' 

const List = ({items, loading, page}) => {
  const dispatch = useDispatch();

  const observer = useRef();
  const setLastElement = useCallback(node => {

    if(observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
          dispatch(setPage(page+1));
      }
    })
    if(node) observer.current.observe(node)
  },[page,dispatch]);

  useEffect(() => {
    if (page <= 6){
      dispatch(setLoading(true))
      setTimeout(() => {
        dispatch(fetchData(page));
      }, 1000);
    }
  }, [page,dispatch])
  
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