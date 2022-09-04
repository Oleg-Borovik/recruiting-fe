import React from 'react';

interface Props {
    setAbout: (value: string) => void
}
export function AboutComponent(props: Props) {
    return (
        <div>
            О себе:
            <textarea onChange={(e) => props.setAbout(e.target.value)} name="About" id="about"></textarea>
        </div>
    );
}