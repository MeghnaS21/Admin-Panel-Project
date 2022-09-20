import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Hires From India(Target-20,000)</h1>
        <i className="fa fa-solid fa-ellipsis-vertical icon" fontSize="small"></i>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total candidates hired in last 8 months</p>
        <p className="amount">14000</p>
        <p className="desc">IOS Developers-4900, UI/UX Designers-3100, React Developers-2500,Swift Developers-3500 </p>
      
      </div>
    </div>
  )
}

export default Featured