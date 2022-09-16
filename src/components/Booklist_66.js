import React from 'react'
import Book_66 from './Book_66';
import {data} from './data';

const Booklist_66 = () => {
    return (
        <section className='booklist'>
          { data.map( (book, index) => {
            const {id, img, title, author} = book;
            return<Book_66 key={id} img={img} title={title} author={author}/>;
          })}
        </section>
      );
};

export default Booklist_66;