import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card width={300} borderRadius={10}>
			<Skeleton height={200}></Skeleton>
			<CardBody>
				<SkeletonText></SkeletonText>
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
