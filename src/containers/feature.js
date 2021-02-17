import { Feature } from '../components';
import features from '../fixtures/features.json';

function FeatureContainer() {
	return (
		<div className="FeatureContainer">
			<Feature.Container>
				{features.map(({ id, direction, title, description, image, alt }) => (
					<Feature key={id} direction={direction}>
						<Feature.Panel>
							<Feature.Title>{title}</Feature.Title>
							<Feature.Description>{description}</Feature.Description>
						</Feature.Panel>
						<Feature.Panel>
							<Feature.Image src={image} alt={alt} />
						</Feature.Panel>
					</Feature>
				))}
			</Feature.Container>
		</div>
	);
}

export default FeatureContainer;
