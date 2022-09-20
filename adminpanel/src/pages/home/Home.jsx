import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table"
import "./home.scss";

const Home = () => {
 
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="ios"/>
          <Widget type="swift" />
          <Widget type="ar"/>
          <Widget type="react"/>
        </div>

        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
           <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home