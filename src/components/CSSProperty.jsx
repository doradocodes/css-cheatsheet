import classNames from "classnames";
import styles from "./CSSProperty.module.css";
import {useState} from "react";
import {CircleInformation} from "grommet-icons";

export default function CSSProperty({key, cssProperty, cssValue, styleValues, setStyleValues}) {
    const [showHint, setShowHint] = useState(false);

    const updateValue = (e) => {
        const cleanedValue = e.target.innerText.replace(/"/g, '');
        setStyleValues({...styleValues, [cssProperty]: {...cssValue, value: cleanedValue}})
    }

    return <div key={key} className={classNames(styles.attribute)}>
        <input
            type="checkbox"
            checked={cssValue.checked}
            onChange={(e) => {
                setStyleValues({...styleValues, [cssProperty]: {...cssValue, checked: e.target.checked}})
            }}
        />
        <span className={classNames({[styles.unchecked]: !cssValue.checked})}>{cssProperty}: </span>
        <span
            className={classNames(styles.property, {[styles.unchecked]: !cssValue.checked})}
            contentEditable={true}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.target.blur();
                }
            }}
            onBlur={updateValue}
        >{cssValue.value}</span>
        <span className={classNames({[styles.unchecked]: !cssValue.checked})}>;</span>
        {cssValue.hint && <div className={styles.hintWrapper}>
            <span
                onMouseOver={() => setShowHint(true)}
                onMouseOut={() => setShowHint(false)}
            >
                <CircleInformation size="medium" />
            </span>
            <div className={classNames(styles.popup, {[styles.activePopup]: showHint})}>{cssValue.hint}</div>
        </div>}

    </div>
}
