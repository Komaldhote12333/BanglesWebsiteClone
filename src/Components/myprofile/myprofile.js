import './myprofile.css'

const Myprofile = () => {
    const userm = localStorage.getItem('username');
    const userphonem = localStorage.getItem('mobile');
    const usermpass = localStorage.getItem('password');
    return(
      <div className="myprof">
      <div className="usernamem"><span>Hi Mr/Ms   --- {userm} </span></div>
      <div className="phoenumberusrm"> YourPhoneNumber ---{userphonem} </div>
      <div className="userpassword">YourPassword --- {usermpass} </div>
      </div>

    )


};
export default Myprofile;