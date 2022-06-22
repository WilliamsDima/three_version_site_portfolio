import axios from 'axios';
import { Home } from '../app/components/screens/Home/Home'
import { API_URL } from '../app/constants';

export default function HomePage(props) {

  return (
    <Home {...props}/>
  )
}


export const getStaticProps = async () => {

  const works = await axios.get(`${API_URL}/works`).then(({data}) => data);
  

  return {
    props: {
      works
    },
    revalidate: 60
  }
}
