/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, RichText} from '@wordpress/block-editor';

import {RawHTML} from '@wordpress/element';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	console.log('attributes', attributes)

	return (
		<div {...useBlockProps.save({className: 'wp-block-row'})}>
			<div id={`carousel-${attributes?.blockId}`} className="carousel slide" data-bs-ride="carousel">
				{attributes?.items.length > 1 &&
					<div className="carousel-indicators">
						{attributes?.items.map((singleItem, key) => {
							return (
								<button type="button" data-bs-target={`#carousel-${attributes?.blockId}`}
										data-bs-slide-to={key}
										className={`${key === 0 ? 'active' : ''} position-relative`}
										aria-label={`Slide ${key}`}>
								</button>
							)
						})}
					</div>
				}

				<div className="carousel-inner">
					{attributes?.items.length && attributes?.items.map((singleItem, key) => {
						return (
							<div className={`${key === 0 ? 'active' : ''} carousel-item`} data-bs-interval="6000">
								<div className="ratio" style="--bs-aspect-ratio: 28%;">
									<div className="dark-overlay w-100 h-100 position-absolute top-0 start-0"></div>
									{singleItem?.image &&
										<img src={singleItem?.image?.url} alt={singleItem?.image?.alt}/>}
								</div>
								<div className="carousel-caption container">
									<div className="carousel-caption-inner">
										{singleItem.title && <RichText.Content value={singleItem.title} tagName="h1" class="display-1" />}
										{singleItem.content && <RichText.Content value={singleItem.content} tagName="div" class="description" />}
										{singleItem.links && <RichText.Content value={singleItem.links} tagName="button" class="wp-element-button" />}
									</div>
								</div>
							</div>
						)
					})}
				</div>

				{attributes?.items.length && 1 == 2 &&
					<>
						<button className="carousel-control-prev" type="button"
								data-bs-target={`#carousel-${attributes?.blockId}`}
								data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button"
								data-bs-target={`#carousel-${attributes?.blockId}`}
								data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</>
				}
			</div>
		</div>
	);
}
