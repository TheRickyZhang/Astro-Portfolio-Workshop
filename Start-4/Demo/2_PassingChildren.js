function Button({ href, children }) {
	return <a href={href} className="button">{children}</a>;
}

// This usage is the same
<Button href="/about">Learn More</Button>

