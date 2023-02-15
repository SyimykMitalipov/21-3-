
import classes from './header.module.css';



const Header = (props) => {
    const { title } = props;
  return (
    <div className={classes.header}>
        <h2>{title}</h2>
    </div>
  )
}

export default Header;




