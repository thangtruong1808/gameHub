import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card width={"300"}>
			<Skeleton></Skeleton>
			<CardBody>
				<SkeletonText></SkeletonText>
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
