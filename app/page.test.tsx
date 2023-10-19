import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';
import { hero_testids } from '@/components/Hero/Hero';
import text from '@/utils/text';

test('renders correctly', () => {
    render(<Home />);
    const hero = screen.getByTestId(hero_testids.hero_container);
    const examplesh2 = screen.getByRole('heading', { level: 2 });
    const sections = screen.getAllByTestId('section');
    const allProjectsLink = screen.getByRole('link', {
        name: text.allWorks
    });

    expect(hero).toBeInTheDocument();
    expect(examplesh2).toHaveTextContent(text.examples);
    expect(sections).toHaveLength(3);
    expect(allProjectsLink).toHaveAttribute('href', '/projects');
});

test('renders Home unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
});
