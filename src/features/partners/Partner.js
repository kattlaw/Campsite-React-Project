const Partner = ({ partner }) => {
    if (partner) {
        const { image, name, description } = partner;

        return (
            <>
            <img src={image} alt={name} style={{ width:'150px' }} />
            <div clasName='m-4'>
                <h5 className='fw-bold m-3'>{name}</h5>
                <div className='m-3'>{description}</div>
            </div>
            </>
        );
    }
    return null;
};

export default Partner;