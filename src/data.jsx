export const sections = {
    textStyles: {
        title: 'Text',
        previewContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        defaultStyles: {
            'color': {
                value: 'red',
                checked: false,
                hint: `You can use color names, hex codes, rgb, rgba, hsl, hsla, or even a gradient.`
            },
            'font-family': {
                value: 'Helvetica, sans-serif',
                checked: false,
            },
            'font-size': {
                value: '16px',
                checked: false,
            },
            'font-style': {
                value: 'italic',
                checked: false,
            },
            'font-variant': {
                value: 'small-caps',
                checked: false,
            },
            'font-weight': {
                value: 'bold',
                checked: false,
            },
            'text-transform': {
                value: 'capitalize',
                checked: false,
            },
            'text-align': {
                value: 'center',
                checked: false,
            },
            'text-indent': {
                value: '0px',
                checked: false,
            },
            'line-height': {
                value: '2em',
                checked: false,
            },
            'letter-spacing': {
                value: '2px',
                checked: false,
            },
            'word-spacing': {
                value: '5px',
                checked: false,
            },
            'white-space': {
                value: 'nowrap',
                checked: false,
            },
            'vertical-align': {
                value: 'top',
                checked: false,
            },
            'text-decoration': {
                value: 'underline',
                checked: false,
            },
            'text-shadow': {
                value: '2px 2px 2px black',
                checked: false,
            },
        }
    },
    backgroundStyles: {
        title: 'Background',
        defaultStyles: {
            'background-color': {
                value: 'blue',
                checked: false,
            },
            'background-image': {
                value: 'url("https://media.istockphoto.com/id/816752606/photo/tv-test-card-or-test-pattern-generic.jpg?s=612x612&w=0&k=20&c=63Jcx_5bFnvBw9elRDLrLKjtDYXr70pKtUK0jXJ2_uY=")',
                checked: false,
            },
            'background-repeat': {
                value: 'no-repeat',
                checked: false,
            },
            'background-position': {
                value: 'center',
                checked: false,
            },
            'background-size': {
                value: 'cover',
                checked: false,
            },
        }
    },
    borderStyles: {
        title: 'Border',
        previewContent: <div style={{ background: '#eee', padding: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</div>,
        defaultStyles: {
            'border-style': {
                value: 'dashed',
                checked: false,
            },
            'border-width': {
                value: '5px',
                checked: false,
            },
            'border-color': {
                value: 'green',
                checked: false,
            },
            'border-radius': {
                value: '10px',
                checked: false,
            },
        }
    },
    boxStyles: {
        title: 'Box',
        previewContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        defaultStyles: {
            'background': {
                value: 'lightblue',
                checked: true,
            },
            'border': {
                value: '2px solid black',
                checked: true,
            },
            'width': {
                value: '200px',
                checked: false,
            },
            'height': {
                value: '200px',
                checked: false,
            },
            'margin': {
                value: '0 auto',
                checked: false,
            },
            'padding': {
                value: '20px',
                checked: false,
            },
        }
    },
    positioning: {
        title: 'Positioning',
        previewContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        defaultStyles: {
            'position': {
                value: 'absolute',
                checked: false,
            },
            'top': {
                value: '0',
                checked: false,
            },
            'left': {
                value: '0',
                checked: false,
            },
            'right': {
                value: '0',
                checked: false,
            },
            'bottom': {
                value: '0',
                checked: false,
            },
            'z-index': {
                value: '1',
                checked: false,
            },
            'overflow': {
                value: 'hidden',
                checked: false,
            },
            'float': {
                value: 'left',
                checked: false,
            },
            'clear': {
                value: 'both',
                checked: false,
            },
            'clip': {
                value: 'rect(0, 0, 0, 0)',
                checked: false,
            },
            'visibility': {
                value: 'visible',
                checked: false,
            },
        }
    },
    flexboxStyles: {
        title: 'Flexbox',
        // eslint-disable-next-line react/jsx-key
        previewContent: [
            <div style={{ border: '1px solid black' }}>Content 1</div>,
            <div style={{ border: '1px solid black' }}>Content 2</div>,
            <div style={{ border: '1px solid black' }}>Content 3</div>
        ],
        defaultStyles: {
            'display': {
                value: 'flex',
                checked: false,
            },
            'flex-direction': {
                value: 'column',
                checked: false,
            },
            'justify-content': {
                value: 'center',
                checked: false,
            },
            'align-items': {
                value: 'center',
                checked: false,
            },
        }
    },
    gridStyles: {
        title: 'Grid',
        // eslint-disable-next-line react/jsx-key
        previewContent: [
            <div style={{ border: '1px solid black' }}>Content 1</div>,
            <div style={{ border: '1px solid black' }}>Content 2</div>,
            <div style={{ border: '1px solid black' }}>Content 3</div>
        ],
        defaultStyles: {
            'display': {
                value: 'grid',
                checked: false,
            },
            'grid-template-columns': {
                value: '1fr 1fr 1fr',
                checked: false,
            },
            'grid-template-rows': {
                value: '1fr 1fr 1fr',
                checked: false,
            },
            'gap': {
                value: '20px',
                checked: false,
            },
        }
    },
    miscellaneous: {
        title: 'Miscellaneous',
        previewContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        defaultStyles: {
            'cursor': {
                value: 'pointer',
                checked: false,
            },
            'filter': {
                value: 'blur(2px)',
                checked: false,
            },
            'opacity': {
                value: '0.5',
                checked: false,
            },
            'transform': {
                value: 'rotate(45deg)',
                checked: false,
            },
            'transition': {
                value: 'all 0.3s ease',
                checked: false,
            },
            'animation': {
                value: 'spin 4s linear infinite',
                checked: false,
            },
        }
    },
}
