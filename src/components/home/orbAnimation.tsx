import styles from '../../styles/orbAnimation.module.scss'

const ORB_PARTICLES_COUNT = 400;

const OrbAnimation = () => {
    const childDivs = [];

    // Use a loop to push <div> elements into the divs array
    for (let i = 0; i < ORB_PARTICLES_COUNT; i++) {
        childDivs.push(<div className={styles.orb__child} key={i}></div>);
    }
    return (
        <div className='relative h-full w-full'>
            <div className={styles.orb__wrap}>
                {childDivs}
            </div>
        </div>
    )
}

export default OrbAnimation