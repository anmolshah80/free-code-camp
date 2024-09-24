// format title of the recipes in PascalCase and in kebab-case
const formatRecipeTitleInPascalCase = (title) => {
  const splitTitle = title.split(' ');

  const formattedTitle = splitTitle.map((string) => {
    if (string === '&amp;') {
      return '&';
    } else if (string === 'and') {
      return string;
    }

    return string[0].toUpperCase() + string.slice(1);
  });

  return formattedTitle.join(' ');
};

const formatRecipeTitlesInKebabCase = (title) => {
  const splitTitle = title.split(' ');

  const formattedTitle = splitTitle.map((string) => {
    if (string === '&amp;') {
      return 'and';
    } else if (string[string.length - 1] === ',') {
      const modifiedString = string.slice(0, string.length - 1);

      return modifiedString[0].toLowerCase() + modifiedString.slice(1);
    }

    return string[0].toLowerCase() + string.slice(1);
  });

  return formattedTitle.join('-');
};

export { formatRecipeTitleInPascalCase, formatRecipeTitlesInKebabCase };
