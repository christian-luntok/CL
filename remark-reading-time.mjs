import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    // Gets the Content of the page.
    const contentOnPage = toString(tree);
    // Uses the reading time plugin to calculate the reading time.
    const calculateReadingTime = getReadingTime(contentOnPage);
    // Adding the reading time to a frontmatter data.
    data.astro.frontmatter.readingTime = calculateReadingTime.text;
  };
}