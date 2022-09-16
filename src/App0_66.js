import './App_66.css';

/*
const firstBook = {
  img: 'https://m.media-amazon.com/images/P/0142400874.01._SCLZZZZZZZ_SX500_.jpg',
  title:'The Umbrella Man and Other Stories',
  author: 'Roald Dahl'
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/P/1538724731.01._SCLZZZZZZZ_SX500_.jpg',
  title:'New York Times Bestseller USA Today Bestseller The Globe and Mail Bestseller Publishers Weekly Bestseller',
  author: 'Colleen Hoover'
}

const threeBook = {
  img: 'https://m.media-amazon.com/images/P/1400224810.01._SCLZZZZZZZ_SX500_.jpg',
  title:'Bills pile up. Savings accounts go down. Marriages go south. Pandemics rage.',
  author: 'Max Lucado'
}
*/

const data = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/P/0142400874.01._SCLZZZZZZZ_SX500_.jpg',
  title:'The Umbrella Man and Other Stories',
  author: 'Roald Dahl',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/P/1538724731.01._SCLZZZZZZZ_SX500_.jpg',
  title:'New York Times Bestseller USA Today Bestseller The Globe and Mail Bestseller Publishers Weekly Bestseller',
  author: 'Colleen Hoover',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/P/1400224810.01._SCLZZZZZZZ_SX500_.jpg',
  title:'Bills pile up. Savings accounts go down. Marriages go south. Pandemics rage.',
  author: 'Max Lucado',
  },
  {
    id: 4,
    img: 'https://m.media-amazon.com/images/P/B09X6BWK8F.01._SCLZZZZZZZ_SX500_.jpg',
  title:'From the co-host of chart-topping true crime podcast Morbid, a thrilling debut novel told from the dueling perspectives of a notorious serial killer and the medical examiner following where his trail of victims leads',
  author: 'Alaina Urquhart',
  },
  {
    id: 5,
    img: 'https://m.media-amazon.com/images/P/0316499633.01._SCLZZZZZZZ_SX500_.jpg',
  title:'A brilliant American president is also a psychopath. He has his finger on the red button.',
  author: 'James Patterson',
  },
]

const App_66 = () => {
  return (
    <section className='bookList'>
      { data.map( (book, index) => {
        const {id, img, title, author} = book;
        return<Book_66 key={id} img={img} title={title} author={author}/>;
      })}

      {/* <Book_66 
      img={firstBook.img}
      title={firstBook.title}
      author={firstBook.author}
      />
      <Book_66 
      img={secondBook.img} 
      title={secondBook.title} 
      author={secondBook.author}
      />
      <Book_66 
      img={threeBook.img} 
      title={threeBook.title} 
      author={threeBook.author}
  /> */}
    </section>
  );
}

const Book_66 = ({ img, title, author}) => {
  // console.log('props', props);
  // const { img, title, author} = props;
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

export default App_66;
