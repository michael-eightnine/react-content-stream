import React, { Component } from 'react';

import GridItem from "./grid_item.component";

class Grid extends Component {
	//render single <GridItem /> (used in map function)
	renderItem(i) {
		const gridItems = this.props.route.gridItems;
		const id = i;
		return (
			<GridItem
				item={gridItems[i]}
				key={id}
			/>
		)
	}

	//map gridItems to individual <GridItem />'s - also
	generateGrid() {
		//if filter type is "all" return all
		if(this.props.route.filterBy == "all") {
			const gridDOM = this.props.route.gridItems.map((item, i) => {
				return this.renderItem(i)
			});
			return gridDOM;
		}
		//else only return those that match type
		else {
			const gridDOM = this.props.route.gridItems.map((item, i) => {
				if(item.type == this.props.route.filterBy) {
					return this.renderItem(i)
				}
			});
			return gridDOM;
		}
	}

	render() {
		return (
			<ul className="grid-list">
				{this.generateGrid()}
			</ul>
		)
	}
}

export default Grid;