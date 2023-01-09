import React, {useState, useEffect} from 'react';
import { useSwipeable } from 'react-swipeable';
// Components
import Product from '../Product';
// Imgs
import Icon3D from '../../assets/3d-icon.svg';
// Styles
import { Wrapper, Content, Inner, Indicators } from './ProductCarousel.styles';

export const CarouselItem = ({ children, width }) => {
    return (
        <Content style={{ width: width }}>
            {children}
        </Content>
    );
}

const ProductCarousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1; 
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 2500);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <Wrapper
            {...handlers}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }} >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </Inner>
            {/* <Indicators>
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    Prev
                </button>
            </Indicators>
            {React.Children.map(children, (child, index) => {
                return (
                    <button
                        className={`${index === activeIndex ? "active" : ""}`}
                        onClick={() => {
                            updateIndex(index);
                        }}
                    >
                        {index + 1}
                    </button>
                );
            })}
            <button
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}
            >
                Next
            </button> */}
        </Wrapper>
    );
}

export default ProductCarousel;