/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, RichText} from '@wordpress/block-editor';

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
			<div id={`swiper-${attributes?.blockId}`} className="swiper">
				<div className="swiper-wrapper">
					{attributes?.items.length && attributes?.items.map((singleItem, key) => {
						const isFirstChild = key === 0;
						return (
							<div key={key} className={`swiper-slide${isFirstChild ? ' swiper-slide-first' : ''}`}>
								{singleItem.link ? (
									<a href={singleItem?.link} target="_blank" rel="noopener noreferrer">
										<img src={singleItem?.image?.url} alt={singleItem?.image?.alt} width={singleItem?.image?.width} height={singleItem?.image?.height}/>
									</a>) : (
									<img src={singleItem?.image?.url} alt={singleItem?.image?.alt} width={singleItem?.image?.width} height={singleItem?.image?.height}/>
								)
								}
							</div>
						)
					})}
				</div>
				<div className="swiper-pagination"></div>
			</div>
		</div>
	);
}
