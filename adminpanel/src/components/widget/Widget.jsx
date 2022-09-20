import './widget.scss'

const Widget = ({ type }) => {
  let data;

  //temporary amount
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "ios":
      data = {
        title: "APP STORE",
        isMoney: false,
        link: "See all users",
        icon: <i className="fa fa-brands fa-apple icon"
        style={
          {
            color: "red",
            backgroundColor: "rgba(255, 204, 203)",
          }}
          ></i>


      };
      break;

    case "react":
      data = {
        title: "REACT DEVELOPERS",
        isMoney: false,
        link: "View all orders",
        icon: <i className="fa fa-brands fa-react icon"  
        style={
          {
            color: "purple",
            backgroundColor: "rgba(128, 0, 128, 0.2)",
          }}/>,

      };
      break;

    case "ar":
      data = {
        title: "AUGMENTED REALITY",
        isMoney: true,
        link: "View net earnings",
        icon: <i className="fa fa-regular fa-head-side-goggles icon"
        style={
          {
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)",
          }}>          
          </i>,

      };
      break;

    case "swift":
      data = {
        title: "SWIFT DEVELOPERS",
        isMoney: true,
        link: "See details",
        icon: <i className="fa fa-brands fa-swift icon"
        style={
          {
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)",
          }}></i>,

      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardControlKeyOutlinedIcon /> */}
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget

// <span className="title">USERS</span>
//             <span className="counter">21312</span>
//             <span className="link">See all user</span>