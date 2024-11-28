import styles from './Section.module.css';
import {useState} from "react";
import classNames from "classnames";
import CSSProperty from "./CSSProperty.jsx";

export default function Section({title, defaultStyles, previewContent}) {
    const [styleValues, setStyleValues] = useState(defaultStyles);
    const [copied, setCopied] = useState(false);

    const formatID = (title) => {
        return title.toLowerCase().replace(' ', '-');
    }

    const formatStylesObject = (styleValues) => {
        const obj = Object.entries(styleValues).reduce((acc, [key, value]) => {
            if (value.checked) {
                acc[key] = value.value;
            }
            return acc;
        }, {});
        console.log(obj)
        return obj;
    }

    function cssObjectToPrettifiedString(cssObject) {
        // if (typeof selector !== 'string' || typeof cssObject !== 'object' || cssObject === null) {
        //     throw new Error("Invalid input: selector must be a string and cssObject must be an object");
        // }

        const indent = "  "; // Two spaces for indentation
        const rules = Object.entries(cssObject)
            .map(([property, value]) => {
                // Convert camelCase to kebab-case
                const kebabCaseProperty = property.replace(/([A-Z])/g, "-$1").toLowerCase();
                return `${indent}${kebabCaseProperty}: ${value};`;
            })
            .join("\n");

        return `{\n${rules}\n}`;
    }

    return (
        <section id={formatID(title)}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.moduleWrapper}>
                <div className={styles.modulePreview}>
                   <span className={styles.modulePreviewLabel}>Preview</span>
                    <div style={formatStylesObject(styleValues)}>
                        {previewContent}
                    </div>
                </div>
                <div className={styles.module}>
                    <span className={styles.modulePreviewLabel}>Code</span>
                    <button
                        className={styles.copyButton}
                        onClick={() => {
                            const string = cssObjectToPrettifiedString(formatStylesObject(styleValues));
                            navigator.clipboard.writeText(string);
                            setCopied(true);
                            setTimeout(() => {
                                setCopied(false);
                            }, 1000);
                        }}
                    >
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                    <span>{`{`}</span>
                    {Object.entries(styleValues).map(([key, value], index) => (
                        <CSSProperty key={index} cssProperty={key} cssValue={value} styleValues={styleValues} setStyleValues={setStyleValues}/>
                    ))}
                    <span>{`}`}</span>
                </div>
            </div>
        </section>
    );
}


