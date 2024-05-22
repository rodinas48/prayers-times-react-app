import DrawerAppBar from '../components/Main/AppBar';
import BoxBasic from '../components/Main/main';
import './home.css';
const Home = () => {
  return (<>
    <div className="home">
      <div className="overley">
        <DrawerAppBar />
        <BoxBasic />
      </div>
    </div>
  </>
  );
}

export default Home