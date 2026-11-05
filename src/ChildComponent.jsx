// css
import styles from "./ChildComponent.module.css" ;

const ChildComponent = ({text, children}) => {
    return (
        <div>
            <h1 className={styles.heyYou}>Child Component</h1>
            <div>{text}</div>
            {children}
        </div>
    );
};

export default ChildComponent;