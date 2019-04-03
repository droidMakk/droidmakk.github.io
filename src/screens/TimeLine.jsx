import React from "react";
import AnimationComponent from "../components/common/AnimationComponent";
import { TimeLineComponent } from "../components/TimeLineComponent";

export default function TimeLine() {
	let timeLines = [
		{ title: "Test", subHeading: "2019", content: "Dummy COntent" }
	];

	return (
		<AnimationComponent>
			<div className="displaydetailcard">
				<p className="displaydetailTitle">
					{`Time Travel `}
					<span role="img" aria-label="">
						⌚
					</span>{" "}
				</p>
				<hr />
				<div>
					{timeLines.map(timeline => (
						<TimeLineComponent {...timeline} key={timeline.title} />
					))}
				</div>
			</div>
		</AnimationComponent>
	);
}
