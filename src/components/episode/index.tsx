import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import {
	Container,
	Header,
	Title,
	Dropdown,
	List,
	Panel,
	ListItem,
	ListItemTitle,
	Overview,
	ShowMore
} from './styles/episode';
import { ComponentProp, Season } from '../../constants/types';

type DropdownProp = {
	seasons: Array<Season>;
	season: string;
	setSeason: (season: string) => void;
	[x: string]: any;
};
function Episode({ children, ...restProps }: ComponentProp) {
	return <ListItem {...restProps}>{children}</ListItem>;
}

Episode.Container = function EpisodeContainer({ children, ...restProps }: ComponentProp) {
	return <Container {...restProps}>{children}</Container>;
};

Episode.Header = function EpisodeHeader({ children, ...restProps }: ComponentProp) {
	return <Header {...restProps}>{children}</Header>;
};
Episode.Title = function EpisodeTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};
Episode.Dropdown = function EpisodeDropdown({ seasons, season, setSeason, ...restProps }: DropdownProp) {
	return (
		<Dropdown {...restProps} onChange={(e) => setSeason(e.target.value)} value={season}>
			{seasons.map(({ name, season_number }) => (
				<option key={season_number} value={season_number}>
					{name}
				</option>
			))}
		</Dropdown>
	);
};
Episode.List = function EpisodeList({ children, ...restProps }: ComponentProp) {
	return <List {...restProps}>{children}</List>;
};
Episode.Panel = function EpisodePanel({ children, ...restProps }: ComponentProp) {
	return <Panel {...restProps}>{children}</Panel>;
};
Episode.ListItemTitle = function EpisodeListItemTitle({ children, ...restProps }: ComponentProp) {
	return <ListItemTitle {...restProps}>{children}</ListItemTitle>;
};
Episode.Overview = function EpisodeOverview({ children, ...restProps }: ComponentProp) {
	return <Overview {...restProps}>{children}</Overview>;
};
Episode.ShowMore = function EpisodeShowMore({ showAll, ...restProps }: ComponentProp) {
	return <ShowMore {...restProps}>{showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</ShowMore>;
};

export default Episode;
