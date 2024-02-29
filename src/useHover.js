import { useState, useRef, useEffect } from 'react';

export function useHover() {
	const [hovered, setHovered] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		ref.current?.addEventListener('mouseenter', () => setHovered(true));
		ref.current?.addEventListener('mouseleave', () => setHovered(false));
		
	}, [])

	return {
		hovered,
		ref
	}
}