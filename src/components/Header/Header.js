import styled from "styled-components";

import { useStatusContext } from "../../contexts";
import { ICONS_NAMES } from "../enums";
import { Icons } from "../utils/";

export default function Header() {
	const { status, statusMap } = useStatusContext();
	const statusKeys = Object.keys(status);

	function getTime(time) {
		const endDayTime = 600;
		const startNightTime = 780;

		if (time === "isDay") return status.time <= endDayTime;
		if (time === "isSunset") {
			return status.time > endDayTime && status.time <= startNightTime;
		}
		if (time === "isNight") return status.time > startNightTime;

		return false;
	}

	function getStatus({ statusKey, index }) {
		if (!statusMap.has(statusKey)) return;

		const currentStatus = statusMap.get(statusKey);
		const value = status[statusKey];
		const content = `${value}${
			currentStatus.maxValue ? ` / ${currentStatus.maxValue}` : ""
		}`;
		let statusIcon = currentStatus.icon;

		if (statusKey === "mental") {
			statusIcon =
				value <= 25 ? currentStatus.icons.sad : currentStatus.icons.happy;
		}

		return (
			<div key={index}>
				<Icons type={statusIcon} />
				<span>{content}</span>
			</div>
		);
	}

	return (
		<Wrapper>
			<Time>
				{getTime("isDay") && <Icons type={ICONS_NAMES.sunny} />}
				{getTime("isSunset") && (
					<Icons type={ICONS_NAMES.sunset} fontSize={22} />
				)}
				{getTime("isNight") && <Icons type={ICONS_NAMES.moon} />}
			</Time>

			<Progress>
				<div>
					<h1>Tempo</h1>
					<span>{status.time} / 960</span>
				</div>
				<div>
					<h1>Dias</h1>
					<span>{status.day} / 101</span>
				</div>
			</Progress>

			<div>
				{statusKeys.map((statusKey, index) => getStatus({ statusKey, index }))}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 20px;
	background-color: rgb(72 52 27);
	border: 3px solid rgb(36 22 5);
	border-top: none;
	border-radius: 0 0 15px 15px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	div {
		display: flex;
		align-items: center;
	}

	& > div {
		width: 100%;
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: space-evenly;
		color: ghostwhite;
		font-size: 18px;
	}

	h1 {
		font-weight: 600;
		font-size: 14px;
	}

	span {
		font-size: 16px;
	}
`;

const Progress = styled.div`
	div {
		height: 40px;
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`;

const Time = styled.div`
	&& {
		width: fit-content;
		position: fixed;
		top: 10px;
		left: 20px;
		color: ghostwhite;
		font-size: 18px;
	}
`;
