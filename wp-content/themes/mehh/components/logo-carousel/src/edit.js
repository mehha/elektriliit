/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import {Panel, PanelBody, PanelRow, Button} from '@wordpress/components';
import {useState, useEffect} from '@wordpress/element';
import {more, close, arrowUp, arrowDown} from '@wordpress/icons';
import {MediaPlaceholder, URLInputButton, URLInput} from '@wordpress/block-editor'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({attributes, setAttributes, props}) {
	const blockProps = useBlockProps();
	const [items, setItems] = useState(attributes.items || []);
	const blockId = attributes?.blockId;

	useEffect(() => {
		if (!blockId) {
			setAttributes({blockId: blockProps.id});
		}
	}, [])

	const addRow = () => {
		setItems([...items, {image: '', link: ''}]);
	}

	const deleteRow = (val, i) => {
		setItems((prevItems) => {
			let items = [...prevItems];
			items.splice(i, 1);
			setAttributes({items: items});
			return items
		})
	}

	const updateImage = (val, i) => {
		setItems(prevItems => {
			prevItems[i].image = val
			setAttributes({items: [...prevItems]});
			return [
				...prevItems,
			]
		});
	}

	const updateLink = (val, i) => {
		setItems(prevItems => {
			prevItems[i].link = val
			setAttributes({items: [...prevItems]});
			return [
				...prevItems,
			]
		});
	}

	const moveUp = (index) => {
	    if (index === 0) return; // Can't move up the first item
	    setItems((prevItems) => {
	        const newItems = [...prevItems];
	        [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
	        setAttributes({ items: newItems });
	        return newItems;
	    });
	};

	const moveDown = (index) => {
	    if (index === items.length - 1) return; // Can't move down the last item
	    setItems((prevItems) => {
	        const newItems = [...prevItems];
	        [newItems[index + 1], newItems[index]] = [newItems[index], newItems[index + 1]];
	        setAttributes({ items: newItems });
	        return newItems;
	    });
	};

	return (
		<div {...useBlockProps()}>
			<Panel header="Logo carousel">
				{items.map((item, i) => (
					<div className="panel-body-container">
						<PanelBody
							title={item?.image?.sizes?.thumbnail?.url}
							initialOpen={false}
						>
							<PanelRow>
								{item.image && (
									<div className="image-container">
										<img
											src={item.image.sizes.thumbnail.url}
											alt={item.image.alt}
											width={item.image.sizes.thumbnail.width}
											height={item.image.sizes.thumbnail.height}
										/>
										<Button variant="primary" onClick={() => updateImage('', i)}>Remove
											image</Button>
									</div>
								)}
								<MediaPlaceholder
									onSelect={(val) => updateImage(val, i)}
									allowedTypes={['image']}
									multiple={false}
									value={{id: item.image.id || ''}}
								>
								</MediaPlaceholder>
							</PanelRow>
							<PanelRow>
								<URLInputButton
									placeholder="Link(s)"
									url={item.link}
									onChange={(val) => updateLink(val, i)}
								/>
								<URLInput
									placeholder="Link(s)"
									value={item.link}
									onChange={(val) => updateLink(val, i)}
								/>
							</PanelRow>
						</PanelBody>
						<Button icon={arrowUp} onClick={() => moveUp(i)}></Button>
      			<Button icon={arrowDown} onClick={() => moveDown(i)}></Button>
						<Button
							icon={close}
							label="Delete"
							onClick={(val) => deleteRow(val, i)}
							className="delete-btn"
						/>
					</div>
				))}
			</Panel>
			<Button
				variant="link"
				className="add-btn"
				onClick={() => addRow()}
			>Add slide</Button>
		</div>
	);
}
