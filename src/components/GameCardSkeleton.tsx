import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card width={"300"}>
			<Skeleton
				height={"200"}
				borderRadius={20}
				overflow="hidden"
				boxShadow="dark-lg"
			></Skeleton>
			<CardBody>
				<SkeletonText></SkeletonText>
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
