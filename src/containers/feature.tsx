import { Feature } from '../components';
import { FEATURES } from '../constants/constants';

function FeatureContainer() {
	return (
		<Feature.Container>
			{FEATURES.map(({ id, direction = 'row', title, description, image, alt }) => (
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
	);
}

export default FeatureContainer;
