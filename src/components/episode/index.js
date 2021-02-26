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

function Episode({ children, ...restProps }) {
	return <ListItem {...restProps}>{children}</ListItem>;
}

Episode.Container = function EpisodeContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Episode.Header = function EpisodeHeader({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
};
Episode.Title = function EpisodeTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Episode.Dropdown = function EpisodeDropdown({ seasons, season, setSeason, ...restProps }) {
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
Episode.List = function EpisodeList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};
Episode.Panel = function EpisodePanel({ children, ...restProps }) {
	return <Panel {...restProps}>{children}</Panel>;
};
Episode.ListItemTitle = function EpisodeListItemTitle({ children, ...restProps }) {
	return <ListItemTitle {...restProps}>{children}</ListItemTitle>;
};
Episode.Overview = function EpisodeOverview({ children, ...restProps }) {
	return <Overview {...restProps}>{children}</Overview>;
};
Episode.ShowMore = function EpisodeShowMore({ showAll, ...restProps }) {
	return <ShowMore {...restProps}>{showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</ShowMore>;
};

export default Episode;
