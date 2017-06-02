import React from 'react';
import { Link } from 'react-router';
import {CSSTransitionGroup as ReactCSSTransitionGroup} from 'react-transition-group'

import indentity from '../../svg/identity.svg';

function Splash(props) {
	return (
		<ReactCSSTransitionGroup
			transitionName="splash-fade"
			transitionAppear={true}
      transitionAppearTimeout={250}
			transitionEnterTimeout={350}
			transitionLeaveTimeout={350}>
			<div className="splash animation-fade">
				<div className="splash-content">
					<div className="splash-content-section identity">
						<img src={indentity} alt="Hometown Advantage" />
					</div>
					<div className="splash-content-section btn">
						<Link to="/stream">
							<svg className="btn btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254 116.55"><title>splash-btn_inline</title><rect x="46" y="31" width="207" height="55" fill="#fff" stroke="#000" strokeMiterlimit="10" strokeWidth="2"/><rect x="31" y="16" width="207" height="55" fill="#fff" stroke="#000" strokeMiterlimit="10" strokeWidth="2"/><rect x="1" y="16" width="207" height="55" fill="#fff" stroke="#000" strokeMiterlimit="10" strokeWidth="2"/><rect x="16" y="1" width="207" height="55" fill="#fff" stroke="#000" strokeMiterlimit="10" strokeWidth="2"/><path d="M100.62,25.72c0,4.63-3.58,8.62-7.71,8.62-3.08,0-5.08-2.23-5.08-5.64,0-4.59,3.62-8.59,7.76-8.59C98.66,20.12,100.62,22.3,100.62,25.72ZM90,28.77c0,3,1.1,4.61,3.15,4.61,3,0,5.28-3.42,5.28-8.14,0-2.86-.9-4.18-2.84-4.18C92.46,21.06,90,24.44,90,28.77Z"/><path d="M112.84,31.38l.47.25c-.86,1.8-1.76,2.72-2.68,2.72-.58,0-.88-.34-1.33-1.4l-1.21-2.88-.4.18-1.13,3.92h-1.64l3.47-12.91a2.82,2.82,0,0,0,.13-.67c0-.5-.36-.65-1.67-.65l.16-.54,3.58-.18-1.87,6.93.07,0a3.07,3.07,0,0,1,2.65-1.75c1.12,0,1.82.58,1.82,1.5,0,1.12-1.19,2.32-3.17,3.22l-.47.22.92,2.38c.25.68.5,1,.83,1S112.21,32.28,112.84,31.38Zm-1.39-5a.67.67,0,0,0-.74-.74c-1,0-2.32,1.71-2.86,3.69C109.94,28.62,111.45,27.36,111.45,26.39Z"/><path d="M125.69,24.62h1.5l-1,2.75a22.71,22.71,0,0,0-1.33,5.15c0,.34.13.52.34.52s1-.77,1.8-1.87l.47.38c-1,1.76-2.23,2.79-3.31,2.79-.56,0-.86-.4-.86-1.35,0-.22,0-.49.05-1l-.07,0A4.15,4.15,0,0,1,120,34.35c-1.21,0-1.95-1-1.95-2.61,0-3.31,3.1-7.29,5.69-7.29a1.55,1.55,0,0,1,1.58,1.19Zm-5.94,7c0,.86.4,1.42,1,1.42,1.67,0,3.82-4.36,3.82-6.68,0-.63-.29-1-.74-1C122,25.38,119.75,29.16,119.75,31.65Z"/><path d="M134.51,28.91c-.38-2-.77-2.61-1.21-2.61s-.81.67-1.19,2.14l-.67-.18c.5-2.23,1.6-3.82,2.67-3.82.45,0,.74.29,1.08,1.19a27.53,27.53,0,0,1,1,3.69l.61,2.9h.07a8.68,8.68,0,0,0,2-4.52c0-.49-.13-1.58-.13-2,0-.86.52-1.26,1-1.26s.9.61.9,1.31c0,2-2.29,6.5-4.68,9.6-1.82,2.36-3.37,3.49-4.7,3.49a1.49,1.49,0,0,1-1.64-1.42.92.92,0,0,1,.92-1c1,0,.72,1.35,1.4,1.35.9,0,3-2.25,3.55-3.8Z"/><path d="M144.24,33.12a1.26,1.26,0,0,1,1.24-1.3,1.27,1.27,0,0,1,1.28,1.28,1.25,1.25,0,0,1-1.28,1.24A1.22,1.22,0,0,1,144.24,33.12Z"/>
							<g className="cursor"><path d="M227.89,77.73c0,.51,0,1,0,1.53v.22h-.22l-1.54,0c0,5.2,0,10.39,0,15.59v.22h-.22l-1.3,0h-.23v-.23c0-.51,0-1,0-1.52-1.76,0-3.53,0-5.29,0,0,1.76,0,3.51,0,5.27.51,0,1,0,1.55,0l.28,0,0,.28a10.27,10.27,0,0,0,0,1.53c.49,0,1,0,1.47,0h.21l0,.21c.08,1.09,0,2.18.06,3.27l1.53,0h.22v.22c0,1.09,0,2.18,0,3.27.51,0,1,0,1.54,0h.26l0,.26c-.09,1.09,0,2.19,0,3.28l1.49,0h.22v.22c0,1.68,0,3.36,0,5,2.9,0,5.81,0,8.71,0s5.95,0,8.92-.05c0-1.68.1-3.35,0-5v-.24h.24c.5,0,1,0,1.49,0,0-1.67,0-3.34,0-5V106l.2,0a14.87,14.87,0,0,1,1.53,0c0-1.87,0-3.74,0-5.61h0c-.06-2.24,0-4.49,0-6.74h-1.72v-.22c0-.5,0-1,0-1.49-.52,0-1,0-1.54,0h-.2v-.2c0-.51,0-1,0-1.56-1.1,0-2.19,0-3.28,0H242v-.22c0-.49,0-1,0-1.49-1.68-.09-3.37,0-5-.05h-.22v-.21c0-.51,0-1,0-1.53-1.09,0-2.19,0-3.28,0h-.22v-.22c0-2.26,0-4.53,0-6.79H231.4v-.23a14.09,14.09,0,0,0,0-1.55h-3.47Z" fill="#fff"/><path d="M227.89,77.73h3.47a15.19,15.19,0,0,1,0,1.74c-1.18,0-2.35,0-3.52,0C227.88,78.9,227.88,78.32,227.89,77.73Z" fill="#1c1c1c"/><path d="M226.12,79.51c.58,0,1.17,0,1.75,0q0,9.7,0,19.39-.88,0-1.77,0c0-.58,0-1.16,0-1.74-.59,0-1.17,0-1.76,0,0-.59,0-1.18,0-1.77.58,0,1.17,0,1.76,0,0-5.27,0-10.54,0-15.81Z" fill="#1c1c1c"/><path d="M231.4,79.52h1.75c0,2.34,0,4.68,0,7,1.17,0,2.33,0,3.5,0,0,.58,0,1.17,0,1.75,1.76,0,3.51,0,5.27.05q0,.85,0,1.71c1.17,0,2.34,0,3.51,0,0,.59,0,1.17,0,1.76.58.05,1.16,0,1.75,0,0,.57,0,1.14,0,1.71H249c0,2.25,0,4.5,0,6.74-.06,1.87,0,3.74,0,5.61a13.23,13.23,0,0,0-1.73.06c0,1.74,0,3.48,0,5.22-.58,0-1.16,0-1.73,0-.07-1.77,0-3.54,0-5.31h1.74q0-6.17,0-12.33h-1.74c0-.57,0-1.15,0-1.72a9.38,9.38,0,0,0-1.75,0c0,1.76,0,3.53,0,5.29H242c0-2.35,0-4.7,0-7.06h-3.54c0,1.76,0,3.52,0,5.28q-.88,0-1.75,0c0-2.35,0-4.7,0-7-1.18,0-2.36,0-3.54,0,0,2.35,0,4.69,0,7q-.88,0-1.77,0,0-7.92,0-15.84Z" fill="#1c1c1c"/><path d="M219.05,93.61c1.76,0,3.53,0,5.29,0,0,.58,0,1.17,0,1.75-1.17,0-2.34,0-3.51,0,0,1.16.06,2.33,0,3.49a13.22,13.22,0,0,1-1.77,0C219,97.12,219.06,95.36,219.05,93.61Z" fill="#1c1c1c"/><path d="M220.87,98.9a9.5,9.5,0,0,1,1.71,0c0,.59,0,1.18,0,1.77h1.77c0,1.17,0,2.34,0,3.52h1.74c0,1.18.08,2.36,0,3.53a16.12,16.12,0,0,1-1.72,0c0-1.16,0-2.32,0-3.49-.58,0-1.16,0-1.75,0,0-1.16,0-2.32-.07-3.47-.56,0-1.13,0-1.69,0a7.62,7.62,0,0,1,.05-1.76Z" fill="#1c1c1c"/><path d="M226.15,107.7c.58,0,1.15,0,1.73,0,0,1.17,0,2.34,0,3.51.59,0,1.18,0,1.76,0,0,1.17,0,2.34,0,3.51h14.07c0-1.17,0-2.34,0-3.51.6,0,1.2,0,1.8,0,.1,1.76-.08,3.51,0,5.27-3,.07-5.95,0-8.92,0s-5.81,0-8.71,0c0-1.76,0-3.51,0-5.27l-1.72,0c0-1.17-.08-2.35,0-3.52Z" fill="#1c1c1c"/></g></svg>
						</Link>
					</div>
				</div>
			</div>
		</ReactCSSTransitionGroup>
	)
}

export default Splash;
