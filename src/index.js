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
    },
    save: (props) => {
    },
});
