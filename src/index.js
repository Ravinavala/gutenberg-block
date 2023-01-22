const {registerBlockType} = wp.blocks;
const  {MediaUpload, RichText} = wp.blockEditor;

registerBlockType('gutenberg-block/teams-block', {
    title: 'Teams Block',
    icon: 'format-image',
    category: 'common',
    attributes: {
        image: {
            type: 'object',
        },
        member_name: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        memberPosition: {
            type: 'string',
        },
    },
    edit: (props) => {
        const {attributes, setAttributes} = props;
        const {image, member_name, description, memberPosition} = attributes;

        return (
                <div className="my-custom-block">
                    <MediaUpload
                        onSelect={(media) => setAttributes({image: media})}
                        type="image"
                        value={image}
                        render={({ open }) => (
                        <button onClick={open}>
                        {!image ? 'Upload Image' : <img src={image.url} alt={image.alt} />}
                        </button>
                        )}
                    />
                    <RichText
                        tagName="p"
                        placeholder="Member Name..."
                        value={member_name}
                        onChange={(newMemberName) => setAttributes({member_name: newMemberName})}
                        />
                    <RichText
                        tagName="p"
                        placeholder="Member Details..."
                        value={description}
                        onChange={(newDescription) => setAttributes({description: newDescription})}
                        />
                    <RichText
                        tagName="p"
                        placeholder="Member Position..."
                        value={memberPosition}
                        onChange={(newMemberPosition) => setAttributes({memberPosition: newMemberPosition})}
                        />
                </div>
                );
    },
    save: (props) => {
        const {attributes} = props;
        const {image, member_name, description, memberPosition} = attributes;
        return (
            <div className="team-custom-block">
                <div className="team_image">
                    <img src={image.url} alt={image.alt} />
                </div>
                <div className="team_content">
                    <RichText.Content tagName="h2" value={member_name} />
                    <RichText.Content tagName="p" value={description} />
                    <RichText.Content tagName="h5" value={memberPosition} />
                </div>
            </div>
        );
    },
});
